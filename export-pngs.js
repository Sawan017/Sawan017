const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const ASSETS_DIR = path.join(__dirname, 'assets');
const TEMP_DIR = path.join(__dirname, '.temp_render');

if (!fs.existsSync(TEMP_DIR)) {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
}

// Major visual assets to export as high-res PNG fallbacks
const targets = [
  { name: 'hero', width: 1200, height: 520 },
  { name: 'about', width: 1200, height: 380 },
  { name: 'journey', width: 1200, height: 340 },
  { name: 'project-1-arinova', width: 1200, height: 270 },
  { name: 'project-arinova', width: 1200, height: 270 },
  { name: 'project-2-sourca', width: 1200, height: 270 },
  { name: 'project-sourca', width: 1200, height: 270 },
  { name: 'project-3-codeascend', width: 1200, height: 270 },
  { name: 'project-codeascend', width: 1200, height: 270 },
  { name: 'project-4-dsa', width: 1200, height: 270 },
  { name: 'project-dsa', width: 1200, height: 270 },
  { name: 'toolkit', width: 1200, height: 320 },
  { name: 'stack', width: 1200, height: 320 },
  { name: 'commit-log', width: 1200, height: 260 },
  { name: 'footer', width: 1200, height: 160 },
  { name: 'divider', width: 1200, height: 16 },
  { name: 'connect', width: 1200, height: 120 }
];

console.log(`Starting headless Edge PNG rasterization for ${targets.length} assets...`);

for (const t of targets) {
  const svgPath = path.join(ASSETS_DIR, `${t.name}.svg`);
  const pngPath = path.join(ASSETS_DIR, `${t.name}.png`);
  if (!fs.existsSync(svgPath)) {
    console.warn(`Skipping missing ${svgPath}`);
    continue;
  }

  const svgContent = fs.readFileSync(svgPath, 'utf8');
  const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body {
      width: ${t.width}px;
      height: ${t.height}px;
      background: transparent;
      overflow: hidden;
    }
    svg {
      width: ${t.width}px;
      height: ${t.height}px;
      display: block;
    }
  </style>
</head>
<body>
  ${svgContent}
</body>
</html>`;

  const tempHtmlPath = path.join(TEMP_DIR, `${t.name}.html`);
  fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

  try {
    const cmd = `"${EDGE_PATH}" --headless=new --disable-gpu --force-device-scale-factor=1 --window-size=${t.width},${t.height} --screenshot="${pngPath}" "file:///${tempHtmlPath.replace(/\\/g, '/')}"`;
    execSync(cmd, { stdio: 'pipe' });
    const stat = fs.statSync(pngPath);
    console.log(`[OK] Exported ${t.name}.png (${stat.size} bytes)`);
  } catch (err) {
    console.error(`[ERR] Failed exporting ${t.name}.png:`, err.message);
  }
}

// Clean up temp dir
try {
  fs.rmSync(TEMP_DIR, { recursive: true, force: true });
} catch (e) {}

console.log('PNG export finished successfully.');
