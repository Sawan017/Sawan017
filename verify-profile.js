const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const root = __dirname;
const assetsDir = path.join(root, 'assets');
const requiredFiles = [
  'README.md',
  'README-SETUP.txt',
  'preview.html',
  'build-profile.js',
  'verify-profile.js',
  'assets/hero.svg',
  'assets/about-life.svg',
  'assets/stack.svg',
  'assets/id-dashboard.svg',
  'assets/connect.svg',
  'assets/id.png',
  'assets/right_pointing.png',
  '.github/workflows/snake.yml',
];
const expectedAssetNames = new Set([
  'hero.svg',
  'about-life.svg',
  'stack.svg',
  'id-dashboard.svg',
  'connect.svg',
  'id.png',
  'right_pointing.png',
]);
const obsoletePaths = [
  'build-assets.js',
  'build-playbook-assets.js',
  'build-royal-assets.js',
  'export-pngs.js',
  'validate-assets.js',
  'verify-xml.js',
  'sawan-github-profile.zip',
  'profile-3d-contrib',
  '.github/workflows/profile-3d.yml',
];

const failures = [];
const warnings = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function decodePngAlpha(relativePath) {
  const zlib = require('zlib');
  const buffer = fs.readFileSync(path.join(root, relativePath));
  check(buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])), `${relativePath}: invalid PNG signature`);

  let offset = 8;
  let width = 0;
  let height = 0;
  let bitDepth = 0;
  let colorType = 0;
  let interlace = 0;
  const idat = [];

  while (offset < buffer.length) {
    const length = buffer.readUInt32BE(offset);
    const type = buffer.toString('ascii', offset + 4, offset + 8);
    const data = buffer.subarray(offset + 8, offset + 8 + length);
    if (type === 'IHDR') {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
      interlace = data[12];
    }
    if (type === 'IDAT') idat.push(data);
    offset += 12 + length;
  }

  check(bitDepth === 8 && colorType === 6 && interlace === 0, `${relativePath}: expected non-interlaced 8-bit RGBA PNG`);
  if (!(bitDepth === 8 && colorType === 6 && interlace === 0)) return;

  const raw = zlib.inflateSync(Buffer.concat(idat));
  const bytesPerPixel = 4;
  const stride = width * bytesPerPixel;
  let previous = Buffer.alloc(stride);
  let current = Buffer.alloc(stride);
  let cursor = 0;
  let transparent = 0;
  let minimumAlpha = 255;

  const paeth = (a, b, c) => {
    const p = a + b - c;
    const pa = Math.abs(p - a);
    const pb = Math.abs(p - b);
    const pc = Math.abs(p - c);
    return pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
  };

  for (let y = 0; y < height; y += 1) {
    const filter = raw[cursor++];
    for (let x = 0; x < stride; x += 1) {
      const left = x >= bytesPerPixel ? current[x - bytesPerPixel] : 0;
      const above = previous[x];
      const upperLeft = x >= bytesPerPixel ? previous[x - bytesPerPixel] : 0;
      const encoded = raw[cursor++];
      let predictor = 0;
      if (filter === 1) predictor = left;
      else if (filter === 2) predictor = above;
      else if (filter === 3) predictor = Math.floor((left + above) / 2);
      else if (filter === 4) predictor = paeth(left, above, upperLeft);
      current[x] = (encoded + predictor) & 255;
    }
    for (let x = 3; x < stride; x += 4) {
      const alpha = current[x];
      if (alpha === 0) transparent += 1;
      minimumAlpha = Math.min(minimumAlpha, alpha);
    }
    const swap = previous;
    previous = current;
    current = swap;
  }

  check(transparent > 0 && minimumAlpha === 0, `${relativePath}: no transparent pixels detected`);
  return { width, height, transparent };
}

function checkXmlWithEdge(relativePath, content) {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  if (!fs.existsSync(edgePath)) {
    warnings.push('Microsoft Edge was not found; DOMParser XML checks were skipped.');
    return;
  }

  const payload = Buffer.from(content).toString('base64');
  const tempPath = path.join(root, '.profile-xml-check.html');
  const html = `<!doctype html><meta charset="utf-8"><script>
    const xml = atob('${payload}');
    const doc = new DOMParser().parseFromString(xml, 'image/svg+xml');
    document.body.textContent = doc.querySelector('parsererror') ? 'XML_ERROR' : 'XML_OK';
  </script>`;
  fs.writeFileSync(tempPath, html, 'utf8');
  try {
    const output = execFileSync(edgePath, [
      '--headless=new',
      '--disable-gpu',
      '--allow-file-access-from-files',
      '--dump-dom',
      `file:///${tempPath.replace(/\\/g, '/')}`,
    ], { encoding: 'utf8', timeout: 60000, windowsHide: true, maxBuffer: 20 * 1024 * 1024 });
    check(output.includes('XML_OK'), `${relativePath}: browser XML parser rejected the SVG`);
  } catch (error) {
    failures.push(`${relativePath}: Edge XML check failed (${error.message.split('\n')[0]})`);
  } finally {
    try { fs.unlinkSync(tempPath); } catch {}
  }
}

for (const relativePath of requiredFiles) {
  check(fs.existsSync(path.join(root, relativePath)), `missing required file: ${relativePath}`);
}

for (const obsolete of obsoletePaths) {
  check(!fs.existsSync(path.join(root, obsolete)), `obsolete README asset/tool still exists: ${obsolete}`);
}

if (fs.existsSync(assetsDir)) {
  const assetNames = new Set(fs.readdirSync(assetsDir));
  for (const name of assetNames) check(expectedAssetNames.has(name), `unexpected file in assets/: ${name}`);
  for (const name of expectedAssetNames) check(assetNames.has(name), `missing expected asset: assets/${name}`);
}

if (fs.existsSync(path.join(root, 'README.md'))) {
  const readme = read('README.md');
  const localImages = [...readme.matchAll(/!\[[^\]]*\]\(\.\/assets\/([^)?\s]+)/g)].map((match) => match[1].split('?')[0]);
  check(localImages.length === 5, `README.md should contain exactly five local SVG image links; found ${localImages.length}`);
  check(new Set(localImages).size === 5, 'README.md contains duplicate local image links');
  check(localImages.every((name) => expectedAssetNames.has(name) && name.endsWith('.svg')), 'README.md local image wiring points outside the five core SVGs');
  check((readme.match(/github-contribution-grid-snake-dark\.svg/g) || []).length === 1, 'README.md must contain exactly one contribution visualization');
  check(!readme.includes('github-readme-stats') && !readme.includes('streak-stats'), 'README.md contains a second dynamic statistics visualization');
}

for (const name of ['hero.svg', 'about-life.svg', 'stack.svg', 'id-dashboard.svg', 'connect.svg']) {
  const relativePath = `assets/${name}`;
  if (!fs.existsSync(path.join(root, relativePath))) continue;
  const content = read(relativePath);
  check(content.startsWith('<?xml') && content.includes('<svg xmlns="http://www.w3.org/2000/svg"'), `${relativePath}: missing XML declaration or SVG namespace`);
  check(content.includes('</svg>'), `${relativePath}: missing closing SVG tag`);
  check(!/<script\b/i.test(content), `${relativePath}: JavaScript is not allowed inside profile SVGs`);
  check(!/<foreignObject\b/i.test(content), `${relativePath}: foreignObject is not allowed inside profile SVGs`);
  check(!/<image\b[^>]+href="(?!data:image\/png;base64,)/i.test(content), `${relativePath}: found an external image reference`);
  check(!/href="https?:\/\//i.test(content), `${relativePath}: found an external href`);
  check(content.includes('prefers-reduced-motion'), `${relativePath}: missing reduced-motion fallback`);
  const needsEmbeddedPng = new Set(['hero.svg', 'id-dashboard.svg', 'connect.svg']).has(name);
  const embeddedPngCount = (content.match(/data:image\/png;base64,/g) || []).length;
  check(needsEmbeddedPng ? embeddedPngCount >= 1 : embeddedPngCount === 0, `${relativePath}: unexpected embedded PNG count (${embeddedPngCount})`);
  checkXmlWithEdge(relativePath, content);
}

const idInfo = decodePngAlpha('assets/id.png');
const pointingInfo = decodePngAlpha('assets/right_pointing.png');
if (idInfo) console.log(`assets/id.png: ${idInfo.width}x${idInfo.height}, ${idInfo.transparent} transparent pixels`);
if (pointingInfo) console.log(`assets/right_pointing.png: ${pointingInfo.width}x${pointingInfo.height}, ${pointingInfo.transparent} transparent pixels`);

if (warnings.length) {
  for (const warning of warnings) console.warn(`WARN: ${warning}`);
}

if (failures.length) {
  console.error('\nProfile verification failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('Profile verification passed.');
