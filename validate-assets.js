const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, 'assets');
const files = fs.readdirSync(ASSETS_DIR).filter(f => f.endsWith('.svg'));

console.log(`Auditing ${files.length} SVG files in ${ASSETS_DIR}...`);

let totalPassed = 0;
let totalFailed = 0;

for (const file of files) {
  const filePath = path.join(ASSETS_DIR, file);
  const content = fs.readFileSync(filePath, 'utf8');

  const errors = [];

  // Check 1: HTML entity detection
  const entityMatches = content.match(/&[a-zA-Z]+;/g);
  if (entityMatches) {
    const disallowed = entityMatches.filter(e => !['&amp;', '&lt;', '&gt;', '&quot;', '&apos;'].includes(e));
    if (disallowed.length > 0) {
      errors.push(`Disallowed HTML entities found: ${disallowed.join(', ')}`);
    }
  }

  // Check 2: height="auto" or missing numerical dimensions
  if (content.includes('height="auto"') || content.includes("height='auto'")) {
    errors.push('Contains height="auto"');
  }

  // Check 3: Standalone sub-resource <image href="...">
  if (/<image\b[^>]*href=/i.test(content)) {
    errors.push('Contains standalone sub-resource <image href="...">');
  }

  // Check 4: Proper SVG root opening and closing
  if (!content.includes('<svg') || !content.includes('</svg>')) {
    errors.push('Malformed SVG root tags');
  }

  // Check 5: Look for non-Midnight Emerald foreign colors (e.g. pink, blue, gold)
  const hexMatches = content.match(/#[0-9a-fA-F]{6}/g) || [];
  const allowedColors = [
    '#10251f', '#142e25', '#19392d', '#214635', '#32805b', '#68a786',
    '#e1eae3', '#a8bcaf', '#315544', '#0e1f1a', '#16382c', '#000000', '#ffffff'
  ];
  
  const foreignColors = hexMatches.filter(h => !allowedColors.includes(h.toLowerCase()));
  if (foreignColors.length > 0) {
    errors.push(`Foreign color tokens found: ${[...new Set(foreignColors)].join(', ')}`);
  }

  if (errors.length === 0) {
    totalPassed++;
    console.log(`[PASS] ${file}`);
  } else {
    totalFailed++;
    console.log(`[FAIL] ${file}: ${errors.join(' | ')}`);
  }
}

console.log(`\nAudit complete: ${totalPassed} passed, ${totalFailed} failed.`);

if (totalFailed > 0) {
  process.exit(1);
}
