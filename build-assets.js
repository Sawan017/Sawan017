const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, 'assets');

if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

// -------------------------------------------------------------
// 1. Two-Tone Pill Buttons
// Height: 32px, Left side (dark #19392D), Right side (emerald #32805B)
// -------------------------------------------------------------
function generateTwoToneButton({ totalWidth, splitX, leftText, rightText, iconSvg }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalWidth} 32" width="${totalWidth}" height="32">
  <defs>
    <clipPath id="btn-clip">
      <rect x="0" y="0" width="${totalWidth}" height="32" rx="4" />
    </clipPath>
  </defs>
  <g clip-path="url(#btn-clip)">
    <!-- Left segment -->
    <rect x="0" y="0" width="${splitX}" height="32" fill="#19392D" />
    <!-- Right segment -->
    <rect x="${splitX}" y="0" width="${totalWidth - splitX}" height="32" fill="#32805B" />
    <!-- Divider line -->
    <line x1="${splitX}" y1="0" x2="${splitX}" y2="32" stroke="#315544" stroke-width="1.2" />
    
    <!-- Outer border -->
    <rect x="0.5" y="0.5" width="${totalWidth - 1}" height="31" fill="none" stroke="#315544" stroke-width="1" rx="4" />

    <!-- Icon -->
    <g transform="translate(12, 8)">
      ${iconSvg}
    </g>

    <!-- Left Text -->
    <text x="${iconSvg ? 34 : 14}" y="20" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="700" letter-spacing="1">${leftText}</text>

    <!-- Right Text -->
    <text x="${splitX + (totalWidth - splitX) / 2}" y="20" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="700" letter-spacing="0.8" text-anchor="middle">${rightText}</text>
  </g>
</svg>`;
}

const octocatIcon = `<path fill="#A8BCAF" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>`;
const playIcon = `<polygon points="3,2 13,8 3,14" fill="#A8BCAF"/>`;
const linkIcon = `<path fill="#A8BCAF" d="M3.9 8.2a2.5 2.5 0 0 1 0-3.5l2.4-2.4a2.5 2.5 0 0 1 3.5 3.5l-.7.7a.75.75 0 0 1-1.06-1.06l.7-.7a1 1 0 0 0-1.42-1.42L4.9 5.72a1 1 0 0 0 0 1.42.75.75 0 0 1-1.06 1.06zm8.2-.4a2.5 2.5 0 0 1 0 3.5l-2.4 2.4a2.5 2.5 0 0 1-3.5-3.5l.7-.7a.75.75 0 0 1 1.06 1.06l-.7.7a1 1 0 0 0 1.42 1.42l2.4-2.4a1 1 0 0 0 0-1.42.75.75 0 0 1 1.06-1.06zm-5.7.4a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06z"/>`;
const mailIcon = `<path fill="#A8BCAF" d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2zm0 1.5a.25.25 0 0 0-.25.25v.678l6.5 4.333 6.5-4.333V3.75a.25.25 0 0 0-.25-.25H1.75zm13 2.482l-6.223 4.15a.75.75 0 0 1-.832 0L1.5 5.982v6.268c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.982z"/>`;
const terminalIcon = `<path fill="#A8BCAF" d="M2 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2zm2.5 3.5l2 1.5-2 1.5-.6-.8 1-0.7-1-0.7.6-.8zm3 3h3v1h-3v-1z"/>`;

// Generate Hero Buttons
const btnHeroPortfolio = generateTwoToneButton({
  totalWidth: 260,
  splitX: 110,
  leftText: 'PORTFOLIO',
  rightText: 'SAWAN.ENGINEERING',
  iconSvg: linkIcon
});

const btnHeroLeetcode = generateTwoToneButton({
  totalWidth: 220,
  splitX: 105,
  leftText: 'LEETCODE',
  rightText: '@SAWAN017',
  iconSvg: terminalIcon
});

const btnHeroCodeforces = generateTwoToneButton({
  totalWidth: 230,
  splitX: 115,
  leftText: 'CODEFORCES',
  rightText: '@SAWAN017',
  iconSvg: terminalIcon
});

const btnHeroEmail = generateTwoToneButton({
  totalWidth: 220,
  splitX: 90,
  leftText: 'EMAIL',
  rightText: 'CONTACT ME',
  iconSvg: mailIcon
});

// Generate Project Action Buttons
const btnArinovaRepo = generateTwoToneButton({
  totalWidth: 240,
  splitX: 120,
  leftText: 'REPOSITORY',
  rightText: 'ARINOVA',
  iconSvg: octocatIcon
});

const btnArinovaDemo = generateTwoToneButton({
  totalWidth: 230,
  splitX: 110,
  leftText: 'LIVE DEMO',
  rightText: 'ARINOVA RPG',
  iconSvg: playIcon
});

const btnSourcaRepo = generateTwoToneButton({
  totalWidth: 230,
  splitX: 120,
  leftText: 'REPOSITORY',
  rightText: 'SOURCA',
  iconSvg: octocatIcon
});

const btnSourcaDemo = generateTwoToneButton({
  totalWidth: 240,
  splitX: 110,
  leftText: 'LIVE DEMO',
  rightText: 'SOURCA ENGINE',
  iconSvg: playIcon
});

const btnCodeAscendRepo = generateTwoToneButton({
  totalWidth: 250,
  splitX: 120,
  leftText: 'REPOSITORY',
  rightText: 'CODEASCEND',
  iconSvg: octocatIcon
});

const btnDsaRepo = generateTwoToneButton({
  totalWidth: 260,
  splitX: 120,
  leftText: 'REPOSITORY',
  rightText: 'ALGORITHMS C++20',
  iconSvg: octocatIcon
});

// Write buttons to assets
fs.writeFileSync(path.join(ASSETS_DIR, 'btn-hero-portfolio.svg'), btnHeroPortfolio);
fs.writeFileSync(path.join(ASSETS_DIR, 'btn-hero-leetcode.svg'), btnHeroLeetcode);
fs.writeFileSync(path.join(ASSETS_DIR, 'btn-hero-codeforces.svg'), btnHeroCodeforces);
fs.writeFileSync(path.join(ASSETS_DIR, 'btn-hero-email.svg'), btnHeroEmail);

fs.writeFileSync(path.join(ASSETS_DIR, 'btn-arinova-repo.svg'), btnArinovaRepo);
fs.writeFileSync(path.join(ASSETS_DIR, 'btn-arinova-demo.svg'), btnArinovaDemo);
fs.writeFileSync(path.join(ASSETS_DIR, 'btn-sourca-repo.svg'), btnSourcaRepo);
fs.writeFileSync(path.join(ASSETS_DIR, 'btn-sourca-demo.svg'), btnSourcaDemo);
fs.writeFileSync(path.join(ASSETS_DIR, 'btn-codeascend-repo.svg'), btnCodeAscendRepo);
fs.writeFileSync(path.join(ASSETS_DIR, 'btn-dsa-repo.svg'), btnDsaRepo);

console.log('Action buttons generated successfully.');

// -------------------------------------------------------------
// 2. Project Cards (1200 x 270)
// Pure inline vector graphics, exact Midnight Emerald palette
// -------------------------------------------------------------

function generateProject1Arinova() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 270" width="1200" height="270">
  <defs>
    <linearGradient id="p1-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#142E25" />
      <stop offset="100%" stop-color="#10251F" />
    </linearGradient>
    <linearGradient id="p1-node-glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#68A786" />
      <stop offset="100%" stop-color="#32805B" />
    </linearGradient>
  </defs>

  <!-- Container -->
  <rect x="0.5" y="0.5" width="1199" height="269" rx="14" fill="url(#p1-bg)" stroke="#315544" stroke-width="1.2" />
  <!-- Top hairline -->
  <line x1="14" y1="1" x2="1186" y2="1" stroke="#315544" stroke-width="1" />
  <line x1="14" y1="1" x2="220" y2="1" stroke="#68A786" stroke-width="1.5" />

  <!-- Metadata Top Line -->
  <text x="44" y="38" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="11.5" font-weight="700" letter-spacing="1.5">01 • 3D WEB REALM • GAMIFIED RPG • 2025</text>

  <!-- Title + Italic Subtitle -->
  <text x="44" y="78" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="800" letter-spacing="-0.3">ARINOVA</text>
  <text x="200" y="77" fill="#68A786" font-family="Georgia, serif" font-size="16" font-style="italic">Gamified Developer Universe</text>

  <!-- Subtitle Description -->
  <text x="44" y="105" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13">An interactive 3D developer career RPG transforming real coding quests and milestones into an epic journey.</text>

  <!-- Built Line -->
  <text x="44" y="128" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="11" font-weight="600">BUILT &gt; 3D Realm (Three.js/R3F) • Dynamic Quest Engine • Monaco Code Sandbox • Supabase Realtime Sync</text>

  <!-- 3 Metric Boxes -->
  <g transform="translate(44, 146)">
    <!-- Metric 1 -->
    <rect x="0" y="0" width="160" height="48" rx="6" fill="#19392D" stroke="#315544" stroke-width="1" />
    <text x="14" y="22" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700">3D Realm</text>
    <text x="14" y="38" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">Three.js &amp; R3F Canvas</text>

    <!-- Metric 2 -->
    <rect x="175" y="0" width="160" height="48" rx="6" fill="#19392D" stroke="#315544" stroke-width="1" />
    <text x="189" y="22" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700">Sub-50ms</text>
    <text x="189" y="38" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">Quest State Sync</text>

    <!-- Metric 3 -->
    <rect x="350" y="0" width="160" height="48" rx="6" fill="#19392D" stroke="#315544" stroke-width="1" />
    <text x="364" y="22" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700">Monaco IDE</text>
    <text x="364" y="38" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">In-Browser Code Sandbox</text>
  </g>

  <!-- Tech Pills Row -->
  <g transform="translate(44, 212)">
    <!-- React 19 -->
    <rect x="0" y="0" width="76" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="38" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">React 19</text>

    <!-- TypeScript -->
    <rect x="84" y="0" width="86" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="127" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">TypeScript</text>

    <!-- Three.js -->
    <rect x="178" y="0" width="76" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="216" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Three.js</text>

    <!-- R3F -->
    <rect x="262" y="0" width="56" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="290" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">R3F</text>

    <!-- Supabase -->
    <rect x="326" y="0" width="80" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="366" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Supabase</text>

    <!-- Monaco Editor -->
    <rect x="414" y="0" width="104" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="466" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Monaco Editor</text>

    <!-- Tailwind CSS -->
    <rect x="526" y="0" width="96" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="574" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Tailwind CSS</text>
  </g>

  <!-- Right Schematic: Isometric 3D World Node Illustration -->
  <g transform="translate(800, 24)">
    <!-- Illustration Card Container -->
    <rect x="0" y="0" width="356" height="222" rx="10" fill="#10251F" stroke="#315544" stroke-width="1" />
    
    <!-- Coordinate Grid Lines -->
    <line x1="20" y1="170" x2="336" y2="170" stroke="#315544" stroke-width="0.8" stroke-dasharray="3 3" />
    <line x1="20" y1="130" x2="336" y2="130" stroke="#315544" stroke-width="0.6" stroke-dasharray="2 4" />
    <line x1="20" y1="90" x2="336" y2="90" stroke="#315544" stroke-width="0.6" stroke-dasharray="2 4" />
    
    <!-- Orbital Rings -->
    <ellipse cx="178" cy="110" rx="110" ry="42" fill="none" stroke="#315544" stroke-width="1" stroke-dasharray="4 4" />
    <ellipse cx="178" cy="110" rx="75" ry="28" fill="none" stroke="#68A786" stroke-width="1" opacity="0.4" />
    
    <!-- Central Isometric Crystal Core -->
    <!-- Top Face -->
    <polygon points="178,65 218,85 178,105 138,85" fill="#68A786" opacity="0.9" />
    <!-- Left Face -->
    <polygon points="138,85 178,105 178,155 138,135" fill="#32805B" opacity="0.95" />
    <!-- Right Face -->
    <polygon points="178,105 218,85 218,135 178,155" fill="#214635" opacity="0.9" />
    <!-- Core highlights -->
    <line x1="178" y1="65" x2="178" y2="155" stroke="#E1EAE3" stroke-width="0.8" opacity="0.7" />
    
    <!-- Floating Orbit Nodes -->
    <circle cx="85" cy="116" r="4.5" fill="#68A786" />
    <circle cx="265" cy="102" r="4" fill="#32805B" />
    <circle cx="218" cy="55" r="3.5" fill="#E1EAE3" />
    <line x1="178" y1="65" x2="218" y2="55" stroke="#68A786" stroke-width="0.8" stroke-dasharray="2 2" />

    <!-- Terminal Coordinate HUD -->
    <rect x="20" y="18" width="168" height="22" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="28" y="33" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="9" font-weight="600">NODE: [x: 42.8, y: 19.4, z: 0.0]</text>

    <!-- Bottom HUD Line -->
    <text x="178" y="202" fill="#A8BCAF" font-family="'Fira Code', Consolas, monospace" font-size="9" text-anchor="middle">REALM: ACTIVE • 60 FPS • THREE.JS CORE</text>
  </g>
</svg>`;
}

function generateProject2Sourca() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 270" width="1200" height="270">
  <defs>
    <linearGradient id="p2-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#142E25" />
      <stop offset="100%" stop-color="#10251F" />
    </linearGradient>
  </defs>

  <!-- Container -->
  <rect x="0.5" y="0.5" width="1199" height="269" rx="14" fill="url(#p2-bg)" stroke="#315544" stroke-width="1.2" />
  <!-- Top hairline -->
  <line x1="14" y1="1" x2="1186" y2="1" stroke="#315544" stroke-width="1" />
  <line x1="14" y1="1" x2="220" y2="1" stroke="#68A786" stroke-width="1.5" />

  <!-- Metadata Top Line -->
  <text x="44" y="38" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="11.5" font-weight="700" letter-spacing="1.5">02 • AI PLATFORM • PLACEMENT ENGINE • 2025</text>

  <!-- Title + Italic Subtitle -->
  <text x="44" y="78" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="800" letter-spacing="-0.3">SourCa</text>
  <text x="170" y="77" fill="#68A786" font-family="Georgia, serif" font-size="16" font-style="italic">AI Assessment &amp; Placement Engine</text>

  <!-- Subtitle Description -->
  <text x="44" y="105" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13">Intelligent technical evaluation engine that conducts automated coding interviews, contextual assessments, and recruiter analytics.</text>

  <!-- Built Line -->
  <text x="44" y="128" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="11" font-weight="600">BUILT &gt; Next.js 16 SSR • Google GenAI Evaluation Pipeline • Sandboxed Execution • Recruiter Analytics</text>

  <!-- 3 Metric Boxes -->
  <g transform="translate(44, 146)">
    <!-- Metric 1 -->
    <rect x="0" y="0" width="160" height="48" rx="6" fill="#19392D" stroke="#315544" stroke-width="1" />
    <text x="14" y="22" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700">Google GenAI</text>
    <text x="14" y="38" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">Contextual Reasoning</text>

    <!-- Metric 2 -->
    <rect x="175" y="0" width="160" height="48" rx="6" fill="#19392D" stroke="#315544" stroke-width="1" />
    <text x="189" y="22" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700">Sandbox Runner</text>
    <text x="189" y="38" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">Isolated Code Execution</text>

    <!-- Metric 3 -->
    <rect x="350" y="0" width="160" height="48" rx="6" fill="#19392D" stroke="#315544" stroke-width="1" />
    <text x="364" y="22" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700">Zero-Bias</text>
    <text x="364" y="38" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">Recruiter Match Metrics</text>
  </g>

  <!-- Tech Pills Row -->
  <g transform="translate(44, 212)">
    <rect x="0" y="0" width="86" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="43" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Next.js 16</text>

    <rect x="94" y="0" width="86" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="137" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">TypeScript</text>

    <rect x="188" y="0" width="102" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="239" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Google GenAI</text>

    <rect x="298" y="0" width="104" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="350" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Supabase SSR</text>

    <rect x="410" y="0" width="112" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="466" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Tailwind CSS v4</text>

    <rect x="530" y="0" width="86" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="573" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">PostgreSQL</text>
  </g>

  <!-- Right Schematic: AI Assessment Pipeline Flow -->
  <g transform="translate(800, 24)">
    <rect x="0" y="0" width="356" height="222" rx="10" fill="#10251F" stroke="#315544" stroke-width="1" />
    
    <!-- Top label -->
    <text x="178" y="32" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="9" text-anchor="middle" letter-spacing="1">GENAI • LIVE INTERVIEW EVALUATION</text>

    <!-- Node 1: Candidate Submission -->
    <rect x="24" y="95" width="84" height="32" rx="6" fill="#19392D" stroke="#315544" stroke-width="1" />
    <text x="66" y="115" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="700" text-anchor="middle">SUBMISSION</text>

    <!-- Curve to Center -->
    <path d="M 108 111 C 130 111, 140 111, 155 111" fill="none" stroke="#68A786" stroke-width="1.2" />

    <!-- Central Node: GenAI Engine -->
    <rect x="155" y="85" width="76" height="52" rx="6" fill="#214635" stroke="#68A786" stroke-width="1.2" />
    <text x="193" y="108" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="800" text-anchor="middle">GenAI</text>
    <text x="193" y="124" fill="#68A786" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="8.5" text-anchor="middle">PIPELINE</text>

    <!-- Branches from Center -->
    <!-- Top Branch -> Score &amp; Insights -->
    <path d="M 231 103 C 250 103, 255 75, 270 75" fill="none" stroke="#68A786" stroke-width="1.2" />
    <rect x="270" y="60" width="66" height="30" rx="6" fill="#19392D" stroke="#32805B" stroke-width="1" />
    <text x="303" y="79" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9.5" font-weight="700" text-anchor="middle">INSIGHTS</text>

    <!-- Bottom Branch -> Recruiter Match -->
    <path d="M 231 119 C 250 119, 255 147, 270 147" fill="none" stroke="#68A786" stroke-width="1.2" />
    <rect x="270" y="132" width="66" height="30" rx="6" fill="#19392D" stroke="#315544" stroke-width="1" />
    <text x="303" y="151" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9.5" font-weight="700" text-anchor="middle">REPORT</text>

    <!-- Subtext -->
    <text x="178" y="196" fill="#A8BCAF" font-family="'Fira Code', Consolas, monospace" font-size="9" text-anchor="middle">PROMPT CACHING • CONTEXTUAL FEEDBACK</text>
  </g>
</svg>`;
}

function generateProject3CodeAscend() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 270" width="1200" height="270">
  <defs>
    <linearGradient id="p3-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#142E25" />
      <stop offset="100%" stop-color="#10251F" />
    </linearGradient>
  </defs>

  <!-- Container -->
  <rect x="0.5" y="0.5" width="1199" height="269" rx="14" fill="url(#p3-bg)" stroke="#315544" stroke-width="1.2" />
  <!-- Top hairline -->
  <line x1="14" y1="1" x2="1186" y2="1" stroke="#315544" stroke-width="1" />
  <line x1="14" y1="1" x2="220" y2="1" stroke="#68A786" stroke-width="1.5" />

  <!-- Metadata Top Line -->
  <text x="44" y="38" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="11.5" font-weight="700" letter-spacing="1.5">03 • PRODUCTIVITY • CAREER PROGRESSION • 2024</text>

  <!-- Title + Italic Subtitle -->
  <text x="44" y="78" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="800" letter-spacing="-0.3">CodeAscend</text>
  <text x="235" y="77" fill="#68A786" font-family="Georgia, serif" font-size="16" font-style="italic">Milestone &amp; Trajectory Tracker</text>

  <!-- Subtitle Description -->
  <text x="44" y="105" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13">A comprehensive skill roadmap and milestone tracker helping engineers visualize learning curves and career velocity.</text>

  <!-- Built Line -->
  <text x="44" y="128" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="11" font-weight="600">BUILT &gt; Milestone Dependency Graphs • Velocity Metrics • Cloud Persistence • RESTful API Integration</text>

  <!-- 3 Metric Boxes -->
  <g transform="translate(44, 146)">
    <!-- Metric 1 -->
    <rect x="0" y="0" width="160" height="48" rx="6" fill="#19392D" stroke="#315544" stroke-width="1" />
    <text x="14" y="22" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700">50+ Roadmaps</text>
    <text x="14" y="38" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">Curated Learning Tracks</text>

    <!-- Metric 2 -->
    <rect x="175" y="0" width="160" height="48" rx="6" fill="#19392D" stroke="#315544" stroke-width="1" />
    <text x="189" y="22" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700">Dynamic Graph</text>
    <text x="189" y="38" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">Prerequisite Dependencies</text>

    <!-- Metric 3 -->
    <rect x="350" y="0" width="160" height="48" rx="6" fill="#19392D" stroke="#315544" stroke-width="1" />
    <text x="364" y="22" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700">Velocity Sync</text>
    <text x="364" y="38" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">Real-time Progress Tracker</text>
  </g>

  <!-- Tech Pills Row -->
  <g transform="translate(44, 212)">
    <rect x="0" y="0" width="66" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="33" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">React</text>

    <rect x="74" y="0" width="86" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="117" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">TypeScript</text>

    <rect x="168" y="0" width="80" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="208" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Supabase</text>

    <rect x="256" y="0" width="94" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="303" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Tailwind CSS</text>

    <rect x="358" y="0" width="84" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="400" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">REST APIs</text>

    <rect x="450" y="0" width="56" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="478" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Vite</text>
  </g>

  <!-- Right Schematic: Milestone Ascending Trajectory -->
  <g transform="translate(800, 24)">
    <rect x="0" y="0" width="356" height="222" rx="10" fill="#10251F" stroke="#315544" stroke-width="1" />
    
    <text x="178" y="32" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="9" text-anchor="middle" letter-spacing="1">SKILL ROADMAP &amp; TRAJECTORY PIPELINE</text>

    <!-- 4 Step Pipeline Blocks matching reference -->
    <g transform="translate(26, 75)">
      <!-- Step 01 -->
      <rect x="0" y="45" width="66" height="34" rx="4" fill="#19392D" stroke="#315544" stroke-width="1" />
      <text x="33" y="58" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="8" text-anchor="middle">01</text>
      <text x="33" y="71" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="600" text-anchor="middle">Core</text>

      <line x1="66" y1="62" x2="80" y2="47" stroke="#68A786" stroke-width="1.2" stroke-dasharray="2 2" />

      <!-- Step 02 -->
      <rect x="80" y="30" width="66" height="34" rx="4" fill="#19392D" stroke="#315544" stroke-width="1" />
      <text x="113" y="43" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="8" text-anchor="middle">02</text>
      <text x="113" y="56" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="600" text-anchor="middle">Systems</text>

      <line x1="146" y1="47" x2="160" y2="32" stroke="#68A786" stroke-width="1.2" stroke-dasharray="2 2" />

      <!-- Step 03 -->
      <rect x="160" y="15" width="66" height="34" rx="4" fill="#19392D" stroke="#315544" stroke-width="1" />
      <text x="193" y="28" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="8" text-anchor="middle">03</text>
      <text x="193" y="41" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="600" text-anchor="middle">Scale</text>

      <line x1="226" y1="32" x2="240" y2="17" stroke="#68A786" stroke-width="1.2" stroke-dasharray="2 2" />

      <!-- Step 04 -->
      <rect x="240" y="0" width="66" height="34" rx="4" fill="#214635" stroke="#68A786" stroke-width="1.2" />
      <text x="273" y="13" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="8" text-anchor="middle">04</text>
      <text x="273" y="26" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="700" text-anchor="middle">Mastery</text>
    </g>

    <!-- Ascending Trajectory Curve -->
    <path d="M 40 165 Q 160 160, 290 95" fill="none" stroke="#68A786" stroke-width="1.5" />
    <circle cx="290" cy="95" r="4" fill="#E1EAE3" />

    <!-- Subtext -->
    <text x="178" y="196" fill="#A8BCAF" font-family="'Fira Code', Consolas, monospace" font-size="9" text-anchor="middle">TRAJECTORY: POSITIVE VELOCITY • PERSISTENT STATE</text>
  </g>
</svg>`;
}

function generateProject4DSA() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 270" width="1200" height="270">
  <defs>
    <linearGradient id="p4-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#142E25" />
      <stop offset="100%" stop-color="#10251F" />
    </linearGradient>
  </defs>

  <!-- Container -->
  <rect x="0.5" y="0.5" width="1199" height="269" rx="14" fill="url(#p4-bg)" stroke="#315544" stroke-width="1.2" />
  <!-- Top hairline -->
  <line x1="14" y1="1" x2="1186" y2="1" stroke="#315544" stroke-width="1" />
  <line x1="14" y1="1" x2="220" y2="1" stroke="#68A786" stroke-width="1.5" />

  <!-- Metadata Top Line -->
  <text x="44" y="38" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="11.5" font-weight="700" letter-spacing="1.5">04 • SYSTEMS • COMPETITIVE PROGRAMMING • 2024 - PRESENT</text>

  <!-- Title + Italic Subtitle -->
  <text x="44" y="78" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="800" letter-spacing="-0.3">Algorithmic Solutions</text>
  <text x="360" y="77" fill="#68A786" font-family="Georgia, serif" font-size="16" font-style="italic">High-Performance C++20 Core</text>

  <!-- Subtitle Description -->
  <text x="44" y="105" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13">Rigorous problem-solving repository implementing advanced data structures, graph theory, and dynamic programming with strict asymptotic bounds.</text>

  <!-- Built Line -->
  <text x="44" y="128" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="11" font-weight="600">BUILT &gt; C++20 Ranges &amp; Concepts • Segment Trees • Fenwick Trees • Tarjan SCC • Flow Networks</text>

  <!-- 3 Metric Boxes -->
  <g transform="translate(44, 146)">
    <!-- Metric 1 -->
    <rect x="0" y="0" width="160" height="48" rx="6" fill="#19392D" stroke="#315544" stroke-width="1" />
    <text x="14" y="22" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700">C++20</text>
    <text x="14" y="38" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">Standard Library Core</text>

    <!-- Metric 2 -->
    <rect x="175" y="0" width="160" height="48" rx="6" fill="#19392D" stroke="#315544" stroke-width="1" />
    <text x="189" y="22" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700">O(log N)</text>
    <text x="189" y="38" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">Strict Asymptotics</text>

    <!-- Metric 3 -->
    <rect x="350" y="0" width="160" height="48" rx="6" fill="#19392D" stroke="#315544" stroke-width="1" />
    <text x="364" y="22" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700">Hundreds</text>
    <text x="364" y="38" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">Verified Solutions</text>
  </g>

  <!-- Tech Pills Row -->
  <g transform="translate(44, 212)">
    <rect x="0" y="0" width="66" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="33" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">C++20</text>

    <rect x="74" y="0" width="56" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="102" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">STL</text>

    <rect x="138" y="0" width="118" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="197" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Data Structures</text>

    <rect x="264" y="0" width="94" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="311" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Algorithms</text>

    <rect x="366" y="0" width="104" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="418" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Graph Theory</text>

    <rect x="478" y="0" width="154" height="24" rx="4" fill="#19392D" stroke="#315544" stroke-width="0.8" />
    <text x="555" y="16" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Dynamic Programming</text>
  </g>

  <!-- Right Schematic: Isometric Binary Tree / Graph Layer -->
  <g transform="translate(800, 24)">
    <rect x="0" y="0" width="356" height="222" rx="10" fill="#10251F" stroke="#315544" stroke-width="1" />
    
    <text x="178" y="32" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="9" text-anchor="middle" letter-spacing="1">TREE / GRAPH ISOMETRIC TOPOLOGY</text>

    <!-- Balanced Tree Node Layout -->
    <!-- Root Node -->
    <circle cx="178" cy="65" r="14" fill="#214635" stroke="#68A786" stroke-width="1.5" />
    <text x="178" y="69" fill="#E1EAE3" font-family="'Fira Code', Consolas, monospace" font-size="9" font-weight="700" text-anchor="middle">R</text>

    <!-- Edges Level 1 -->
    <line x1="168" y1="75" x2="118" y2="105" stroke="#68A786" stroke-width="1.2" />
    <line x1="188" y1="75" x2="238" y2="105" stroke="#68A786" stroke-width="1.2" />

    <!-- Children Level 1 -->
    <circle cx="118" cy="112" r="12" fill="#19392D" stroke="#32805B" stroke-width="1.2" />
    <text x="118" y="116" fill="#E1EAE3" font-family="'Fira Code', Consolas, monospace" font-size="8.5" text-anchor="middle">L1</text>

    <circle cx="238" cy="112" r="12" fill="#19392D" stroke="#32805B" stroke-width="1.2" />
    <text x="238" y="116" fill="#E1EAE3" font-family="'Fira Code', Consolas, monospace" font-size="8.5" text-anchor="middle">R1</text>

    <!-- Edges Level 2 -->
    <line x1="110" y1="122" x2="80" y2="150" stroke="#315544" stroke-width="1" stroke-dasharray="2 2" />
    <line x1="126" y1="122" x2="148" y2="150" stroke="#315544" stroke-width="1" stroke-dasharray="2 2" />
    <line x1="230" y1="122" x2="208" y2="150" stroke="#315544" stroke-width="1" stroke-dasharray="2 2" />
    <line x1="246" y1="122" x2="276" y2="150" stroke="#315544" stroke-width="1" stroke-dasharray="2 2" />

    <!-- Leaf Nodes -->
    <circle cx="80" cy="154" r="8" fill="#142E25" stroke="#315544" stroke-width="1" />
    <circle cx="148" cy="154" r="8" fill="#142E25" stroke="#315544" stroke-width="1" />
    <circle cx="208" cy="154" r="8" fill="#142E25" stroke="#315544" stroke-width="1" />
    <circle cx="276" cy="154" r="8" fill="#142E25" stroke="#315544" stroke-width="1" />

    <!-- Subtext -->
    <text x="178" y="196" fill="#A8BCAF" font-family="'Fira Code', Consolas, monospace" font-size="9" text-anchor="middle">COMPLEXITY: O(1) OVERHEAD • PROVABLE BOUNDS</text>
  </g>
</svg>`;
}

fs.writeFileSync(path.join(ASSETS_DIR, 'project-arinova.svg'), generateProject1Arinova());
fs.writeFileSync(path.join(ASSETS_DIR, 'project-1-arinova.svg'), generateProject1Arinova());

fs.writeFileSync(path.join(ASSETS_DIR, 'project-sourca.svg'), generateProject2Sourca());
fs.writeFileSync(path.join(ASSETS_DIR, 'project-2-sourca.svg'), generateProject2Sourca());

fs.writeFileSync(path.join(ASSETS_DIR, 'project-codeascend.svg'), generateProject3CodeAscend());
fs.writeFileSync(path.join(ASSETS_DIR, 'project-3-codeascend.svg'), generateProject3CodeAscend());

fs.writeFileSync(path.join(ASSETS_DIR, 'project-dsa.svg'), generateProject4DSA());
fs.writeFileSync(path.join(ASSETS_DIR, 'project-4-dsa.svg'), generateProject4DSA());

console.log('Project cards generated successfully.');

// -------------------------------------------------------------
// 3. Toolkit (1200 x 320) - 6 Categorized Cards Grid
// -------------------------------------------------------------
function generateToolkit() {
  const cards = [
    {
      col: 0, row: 0,
      tag: '01 LANGUAGES',
      primary: 'C++20',
      badge: 'PRIMARY',
      line2: 'TypeScript • JavaScript',
      line3: 'Python • SQL • Bash',
      footnote: 'STRICT ASYMPTOTICS • MODERN STANDARDS'
    },
    {
      col: 1, row: 0,
      tag: '02 FRONTEND &amp; 3D',
      primary: 'React 19 • Next.js 16',
      badge: null,
      line2: 'Three.js • React Three Fiber',
      line3: 'Tailwind CSS v4 • Framer Motion',
      footnote: 'INTERACTIVE SHADERS • RESPONSIVE UX'
    },
    {
      col: 2, row: 0,
      tag: '03 BACKEND &amp; APIS',
      primary: 'Node.js • Express',
      badge: null,
      line2: 'REST APIs • Microservices',
      line3: 'Supabase • SSR Endpoints',
      footnote: 'HIGH THROUGHPUT • LOW LATENCY'
    },
    {
      col: 0, row: 1,
      tag: '04 DATA &amp; STORAGE',
      primary: 'PostgreSQL • Supabase DB',
      badge: null,
      line2: 'Redis • Vector Embeddings',
      line3: 'ACID Transactions • Relational Schema',
      footnote: 'INDEXING • NORMALIZATION • CACHING'
    },
    {
      col: 1, row: 1,
      tag: '05 SYSTEMS &amp; DSA',
      primary: 'Algorithms • Data Structures',
      badge: null,
      line2: 'Dynamic Programming • Graphs',
      line3: 'Segment Trees • Tree Traversals',
      footnote: 'LEETCODE &amp; CODEFORCES RIGOR'
    },
    {
      col: 2, row: 1,
      tag: '06 INFRA &amp; ENGINEERING',
      primary: 'Git • GitHub Actions',
      badge: null,
      line2: 'Linux • Postman • Vite',
      line3: 'Docker Basics • Monorepo Workflows',
      footnote: 'SYSTEM DESIGN • CI/CD AUTOMATION'
    }
  ];

  let cardsSvg = '';
  for (const c of cards) {
    const x = 20 + c.col * (372 + 22);
    const y = 14 + c.row * (138 + 16);

    let badgeSvg = '';
    if (c.badge) {
      badgeSvg = `
        <rect x="74" y="27" width="56" height="18" rx="3" fill="#214635" stroke="#68A786" stroke-width="0.8" />
        <text x="102" y="39.5" fill="#E1EAE3" font-family="'Fira Code', Consolas, monospace" font-size="8.5" font-weight="700" text-anchor="middle">${c.badge}</text>
      `;
    }

    cardsSvg += `
    <g transform="translate(${x}, ${y})">
      <rect x="0" y="0" width="372" height="138" rx="8" fill="#142E25" stroke="#315544" stroke-width="1" />
      <line x1="8" y1="1" x2="60" y2="1" stroke="#68A786" stroke-width="1.2" />

      <!-- Tag -->
      <text x="16" y="24" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="9.5" font-weight="700" letter-spacing="1">${c.tag}</text>

      <!-- Primary Title -->
      <text x="16" y="44" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="17" font-weight="700">${c.primary}</text>
      ${badgeSvg}

      <!-- Line 2 -->
      <text x="16" y="68" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="500">${c.line2}</text>

      <!-- Line 3 -->
      <text x="16" y="88" fill="#68A786" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="400">${c.line3}</text>

      <!-- Divider -->
      <line x1="16" y1="102" x2="356" y2="102" stroke="#315544" stroke-width="0.8" stroke-dasharray="2 3" />

      <!-- Footnote -->
      <text x="16" y="120" fill="#A8BCAF" font-family="'Fira Code', Consolas, monospace" font-size="8.5" letter-spacing="0.5">${c.footnote}</text>
    </g>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 320" width="1200" height="320">
  <defs>
    <linearGradient id="tk-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10251F" />
      <stop offset="100%" stop-color="#0E1F1A" />
    </linearGradient>
  </defs>

  <rect width="1200" height="320" rx="14" fill="url(#tk-bg)" stroke="#315544" stroke-width="1.2" />

  ${cardsSvg}
</svg>`;
}

// -------------------------------------------------------------
// 4. Commit Log / Activity Banner (1200 x 260)
// -------------------------------------------------------------
function generateCommitLog() {
  // Generate a realistic 52-week calendar heat map matrix
  const weeks = 52;
  const days = 7;
  const colors = ['#19392D', '#214635', '#32805B', '#68A786', '#E1EAE3'];
  
  // Seeded pseudo-random activity pattern
  let squaresSvg = '';
  const startX = 60;
  const startY = 100;
  const size = 15;
  const gap = 5;

  let seed = 42;
  function rnd() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  }

  for (let w = 0; w < weeks; w++) {
    for (let d = 0; d < days; d++) {
      const r = rnd();
      let colorIdx = 0;
      // create higher density in recent months
      if (w > 20) {
        if (r > 0.85) colorIdx = 4;
        else if (r > 0.65) colorIdx = 3;
        else if (r > 0.4) colorIdx = 2;
        else if (r > 0.2) colorIdx = 1;
        else colorIdx = 0;
      } else {
        if (r > 0.9) colorIdx = 3;
        else if (r > 0.75) colorIdx = 2;
        else if (r > 0.5) colorIdx = 1;
        else colorIdx = 0;
      }

      const x = startX + w * (size + gap);
      const y = startY + d * (size + gap);
      const color = colors[colorIdx];

      squaresSvg += `<rect x="${x}" y="${y}" width="${size}" height="${size}" rx="2.5" fill="${color}" />`;
    }
  }

  const months = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  let monthLabelsSvg = '';
  months.forEach((m, idx) => {
    const mx = startX + idx * 88;
    monthLabelsSvg += `<text x="${mx}" y="88" fill="#A8BCAF" font-family="'Fira Code', Consolas, monospace" font-size="9">${m}</text>`;
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 260" width="1200" height="260">
  <defs>
    <linearGradient id="cl-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#142E25" />
      <stop offset="100%" stop-color="#10251F" />
    </linearGradient>
  </defs>

  <rect x="0.5" y="0.5" width="1199" height="259" rx="14" fill="url(#cl-bg)" stroke="#315544" stroke-width="1.2" />
  <line x1="14" y1="1" x2="220" y2="1" stroke="#68A786" stroke-width="1.5" />

  <!-- Top Left: Heading -->
  <text x="44" y="38" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="11" font-weight="700" letter-spacing="1.5">COMMIT LOG • REAL GITHUB ACTIVITY</text>
  <text x="44" y="65" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="700">A year of building, <tspan fill="#68A786" font-family="Georgia, serif" font-style="italic">one square at a time.</tspan></text>

  <!-- Top Right: 4 Metrics -->
  <g transform="translate(680, 24)">
    <text x="0" y="14" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="9" font-weight="700">CADENCE</text>
    <text x="0" y="34" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="700">DAILY</text>
    <text x="0" y="48" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9.5">active cadence</text>

    <text x="120" y="14" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="9" font-weight="700">FOCUS</text>
    <text x="120" y="34" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="700">SYSTEMS</text>
    <text x="120" y="48" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9.5">full-stack &amp; dsa</text>

    <text x="240" y="14" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="9" font-weight="700">CORE</text>
    <text x="240" y="34" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="700">C++20 &amp; TS</text>
    <text x="240" y="48" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9.5">modern standards</text>

    <text x="370" y="14" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="9" font-weight="700">STATUS</text>
    <text x="370" y="34" fill="#68A786" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="700">ONLINE</text>
    <text x="370" y="48" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9.5">regular builds</text>
  </g>

  <!-- Month Labels -->
  ${monthLabelsSvg}

  <!-- Day Labels (Mon, Wed, Fri) -->
  <text x="28" y="123" fill="#A8BCAF" font-family="'Fira Code', Consolas, monospace" font-size="8.5">Mon</text>
  <text x="28" y="163" fill="#A8BCAF" font-family="'Fira Code', Consolas, monospace" font-size="8.5">Wed</text>
  <text x="28" y="203" fill="#A8BCAF" font-family="'Fira Code', Consolas, monospace" font-size="8.5">Fri</text>

  <!-- Grid Squares -->
  ${squaresSvg}

  <!-- Bottom Strip -->
  <text x="60" y="246" fill="#A8BCAF" font-family="'Fira Code', Consolas, monospace" font-size="9">Source: public GitHub contribution calendar for @Sawan017 • refreshed daily</text>

  <g transform="translate(980, 238)">
    <text x="0" y="9" fill="#A8BCAF" font-family="'Fira Code', Consolas, monospace" font-size="8.5">Less</text>
    <rect x="30" y="0" width="10" height="10" rx="2" fill="#19392D" />
    <rect x="44" y="0" width="10" height="10" rx="2" fill="#214635" />
    <rect x="58" y="0" width="10" height="10" rx="2" fill="#32805B" />
    <rect x="72" y="0" width="10" height="10" rx="2" fill="#68A786" />
    <rect x="86" y="0" width="10" height="10" rx="2" fill="#E1EAE3" />
    <text x="102" y="9" fill="#A8BCAF" font-family="'Fira Code', Consolas, monospace" font-size="8.5">More</text>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 5. Footer Graphic (1200 x 160)
// -------------------------------------------------------------
function generateFooter() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 160" width="1200" height="160">
  <defs>
    <linearGradient id="ft-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#142E25" />
      <stop offset="100%" stop-color="#10251F" />
    </linearGradient>
  </defs>

  <rect x="0.5" y="0.5" width="1199" height="159" rx="14" fill="url(#ft-bg)" stroke="#315544" stroke-width="1.2" />
  <line x1="14" y1="1" x2="220" y2="1" stroke="#68A786" stroke-width="1.5" />

  <!-- Left: Monogram / Terminal Prompt -->
  <g transform="translate(44, 28)">
    <rect x="0" y="0" width="28" height="28" rx="6" fill="#19392D" stroke="#315544" stroke-width="1" />
    <text x="14" y="19" fill="#68A786" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="800" text-anchor="middle">S</text>

    <text x="40" y="19" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="12" font-weight="600">sawan@dev:~$ exit 0</text>
    
    <text x="0" y="58" fill="#E1EAE3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="700">Let's build something <tspan fill="#68A786" font-family="Georgia, serif" font-style="italic">exceptional.</tspan></text>
    <text x="0" y="82" fill="#A8BCAF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12.5">Open for high-impact software engineering roles, systems architecture, and algorithmic challenges.</text>
  </g>

  <!-- Right: Status &amp; Monogram Badges -->
  <g transform="translate(820, 36)">
    <!-- Status Pill -->
    <rect x="0" y="0" width="336" height="36" rx="6" fill="#19392D" stroke="#315544" stroke-width="1" />
    <circle cx="20" cy="18" r="4" fill="#68A786" />
    <text x="32" y="22" fill="#E1EAE3" font-family="'Fira Code', Consolas, monospace" font-size="10.5" font-weight="700">STATUS: OPEN TO ROLES • GLOBAL TIMEZONES</text>

    <!-- Location &amp; Standard -->
    <text x="336" y="60" fill="#68A786" font-family="'Fira Code', Consolas, monospace" font-size="9.5" text-anchor="end">MIDNIGHT EMERALD RIGOR • C++20 &amp; FULL-STACK</text>
    <text x="336" y="78" fill="#A8BCAF" font-family="'Fira Code', Consolas, monospace" font-size="9" text-anchor="end">github.com/Sawan017 • sawansahani017@gmail.com</text>
  </g>
</svg>`;
}

fs.writeFileSync(path.join(ASSETS_DIR, 'toolkit.svg'), generateToolkit());
fs.writeFileSync(path.join(ASSETS_DIR, 'stack.svg'), generateToolkit());

fs.writeFileSync(path.join(ASSETS_DIR, 'commit-log.svg'), generateCommitLog());

fs.writeFileSync(path.join(ASSETS_DIR, 'footer.svg'), generateFooter());

console.log('Toolkit, Commit Log, and Footer generated successfully.');
