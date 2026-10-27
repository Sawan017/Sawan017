const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');
const { pathToFileURL } = require('url');

const root = __dirname;
const renderDir = path.join(root, '.profile-renders');
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const times = [0, 2, 5, 9, 13];
const targets = [
  ['hero', 1200, 500],
  ['about-life', 1200, 380],
  ['stack', 1200, 420],
  ['id-dashboard', 1200, 440],
  ['connect', 1200, 390],
];

if (!fs.existsSync(edgePath)) throw new Error(`Microsoft Edge not found at ${edgePath}`);
fs.rmSync(renderDir, { recursive: true, force: true });
fs.mkdirSync(renderDir, { recursive: true });

function render(name, width, height, label, virtualTime, reducedMotion = false) {
  const assetUrl = pathToFileURL(path.join(root, 'assets', `${name}.svg`)).href;
  const htmlPath = path.join(renderDir, `${name}-${label}.html`);
  const screenshotPath = path.join(renderDir, `${name}-${label}.png`);
  const html = `<!doctype html><meta charset="utf-8"><style>html,body{margin:0;padding:0;background:#070B16;overflow:hidden}img{display:block;width:${width}px;height:${height}px}</style><img src="${assetUrl}" alt="${name}">`;
  fs.writeFileSync(htmlPath, html, 'utf8');
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    `--window-size=${width},${height}`,
    `--virtual-time-budget=${Math.max(50, virtualTime)}`,
    '--run-all-compositor-stages-before-draw',
    ...(reducedMotion ? ['--force-prefers-reduced-motion'] : []),
    `--screenshot=${screenshotPath}`,
    pathToFileURL(htmlPath).href,
  ];
  execFileSync(edgePath, args, { stdio: 'ignore', timeout: 30000, windowsHide: true });
  const bytes = fs.readFileSync(screenshotPath);
  if (bytes.length === 0) throw new Error(`empty screenshot: ${screenshotPath}`);
  return crypto.createHash('sha256').update(bytes).digest('hex');
}

for (const [name, width, height] of targets) {
  const hashes = [];
  for (const seconds of times) {
    const label = `${seconds}s`;
    const hash = render(name, width, height, label, seconds * 1000);
    hashes.push(hash);
    console.log(`${name} ${label}: ${hash.slice(0, 12)}`);
  }
  const uniqueFrames = new Set(hashes).size;
  if (uniqueFrames < 2) console.warn(`WARN ${name}: animation snapshots were identical`);
  const staticHash = render(name, width, height, 'static', 500, true);
  console.log(`${name} static: ${staticHash.slice(0, 12)}`);
}

console.log(`Rendered ${targets.length} SVGs at ${times.join(', ')} seconds plus reduced-motion fallbacks.`);
