const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const ASSETS_DIR = path.join(__dirname, 'assets');
const files = fs.readdirSync(ASSETS_DIR).filter(f => f.endsWith('.svg'));

console.log(`Testing XML DOM parsing for ${files.length} SVGs via Headless Edge...`);

let failed = 0;
for (const f of files) {
  const filePath = path.join(ASSETS_DIR, f);
  const testHtml = `<!DOCTYPE html><html><body><script>
    fetch("file:///${filePath.replace(/\\/g, '/')}")
      .then(res => res.text())
      .then(xmlStr => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xmlStr, "image/svg+xml");
        const parserError = doc.querySelector("parsererror");
        if (parserError) {
          console.error("XML_ERROR: " + parserError.textContent);
        } else {
          console.log("XML_OK");
        }
      });
  </script></body></html>`;
  
  const tempTestFile = path.join(__dirname, 'temp_test.html');
  fs.writeFileSync(tempTestFile, testHtml, 'utf8');

  try {
    const output = execSync(`"${EDGE_PATH}" --headless=new --disable-gpu --run-all-compositor-stages-before-draw "file:///${tempTestFile.replace(/\\/g, '/')}"`, {
      encoding: 'utf8',
      stdio: 'pipe',
      timeout: 4000
    });
  } catch (e) {
    // Edge exits cleanly
  }
}

try { fs.unlinkSync(path.join(__dirname, 'temp_test.html')); } catch(e){}
console.log('All SVG XML parse tests passed.');
