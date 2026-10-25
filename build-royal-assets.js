const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, 'assets');
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

// -----------------------------------------------------------------------------
// 1. Two-Tone Action Buttons (Royal Dark Navy &amp; Sapphire Accent)
// -----------------------------------------------------------------------------
function generateTwoToneButton({ totalWidth, splitX, leftText, rightText, iconSvg }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalWidth} 32" width="${totalWidth}" height="32">
  <defs>
    <clipPath id="btn-clip">
      <rect x="0" y="0" width="${totalWidth}" height="32" rx="5" />
    </clipPath>
  </defs>
  <g clip-path="url(#btn-clip)">
    <!-- Left segment (Deep Slate Navy) -->
    <rect x="0" y="0" width="${splitX}" height="32" fill="#131B2E" />
    <!-- Right segment (Royal Sapphire Accent) -->
    <rect x="${splitX}" y="0" width="${totalWidth - splitX}" height="32" fill="#2563EB" />
    <!-- Divider line -->
    <line x1="${splitX}" y1="0" x2="${splitX}" y2="32" stroke="#253553" stroke-width="1.2" />
    
    <!-- Outer border -->
    <rect x="0.5" y="0.5" width="${totalWidth - 1}" height="31" fill="none" stroke="#253553" stroke-width="1" rx="5" />

    <!-- Icon -->
    <g transform="translate(12, 8)">
      ${iconSvg}
    </g>

    <!-- Left Text -->
    <text x="${iconSvg ? 34 : 14}" y="20" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="700" letter-spacing="1">${leftText}</text>

    <!-- Right Text -->
    <text x="${splitX + (totalWidth - splitX) / 2}" y="20" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="700" letter-spacing="0.8" text-anchor="middle">${rightText}</text>
  </g>
</svg>`;
}

const octocatIcon = `<path fill="#94A3B8" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>`;
const playIcon = `<polygon points="3,2 13,8 3,14" fill="#94A3B8"/>`;
const mailIcon = `<path fill="#94A3B8" d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2zm0 1.5a.25.25 0 0 0-.25.25v.678l6.5 4.333 6.5-4.333V3.75a.25.25 0 0 0-.25-.25H1.75zm13 2.482l-6.223 4.15a.75.75 0 0 1-.832 0L1.5 5.982v6.268c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.982z"/>`;
const terminalIcon = `<path fill="#94A3B8" d="M2 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2zm2.5 3.5l2 1.5-2 1.5-.6-.8 1-0.7-1-0.7.6-.8zm3 3h3v1h-3v-1z"/>`;

const buttons = [
  { file: 'btn-hero-portfolio.svg', totalWidth: 240, splitX: 110, leftText: 'GITHUB', rightText: '@SAWAN017', iconSvg: octocatIcon },
  { file: 'btn-hero-leetcode.svg', totalWidth: 220, splitX: 105, leftText: 'LEETCODE', rightText: '@SAWAN017', iconSvg: terminalIcon },
  { file: 'btn-hero-codeforces.svg', totalWidth: 230, splitX: 115, leftText: 'CODEFORCES', rightText: '@SAWAN017', iconSvg: terminalIcon },
  { file: 'btn-hero-email.svg', totalWidth: 210, splitX: 90, leftText: 'EMAIL', rightText: 'GET IN TOUCH', iconSvg: mailIcon },
  { file: 'btn-arinova-repo.svg', totalWidth: 230, splitX: 115, leftText: 'REPOSITORY', rightText: 'ARINOVA', iconSvg: octocatIcon },
  { file: 'btn-arinova-demo.svg', totalWidth: 220, splitX: 105, leftText: 'LIVE REALM', rightText: 'ARINOVA RPG', iconSvg: playIcon },
  { file: 'btn-sourca-repo.svg', totalWidth: 220, splitX: 115, leftText: 'REPOSITORY', rightText: 'SOURCA', iconSvg: octocatIcon },
  { file: 'btn-sourca-demo.svg', totalWidth: 230, splitX: 105, leftText: 'LIVE ENGINE', rightText: 'SOURCA AI', iconSvg: playIcon },
  { file: 'btn-codeascend-repo.svg', totalWidth: 240, splitX: 115, leftText: 'REPOSITORY', rightText: 'CODEASCEND', iconSvg: octocatIcon },
  { file: 'btn-dsa-repo.svg', totalWidth: 250, splitX: 115, leftText: 'REPOSITORY', rightText: 'ALGORITHMS C++20', iconSvg: octocatIcon },
];

for (const b of buttons) {
  fs.writeFileSync(path.join(ASSETS_DIR, b.file), generateTwoToneButton(b));
}

// -----------------------------------------------------------------------------
// 2. Animated Hero Banner (1200 x 480) - Royal Dark Twilight Navy &amp; Radar
// -----------------------------------------------------------------------------
function generateAnimatedHero() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 480" width="1200" height="480">
  <defs>
    <linearGradient id="hero-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="50%" stop-color="#0B0F19" />
      <stop offset="100%" stop-color="#070A10" />
    </linearGradient>
    <linearGradient id="blue-glow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#60A5FA" />
    </linearGradient>
    <radialGradient id="radar-core-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#3B82F6" stop-opacity="0" />
    </radialGradient>
    <style>
      @keyframes spinSlow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes spinReverse {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
      }
      @keyframes pulseGlow {
        0%, 100% { opacity: 0.4; r: 4px; }
        50% { opacity: 1; r: 6px; }
      }
      @keyframes radarSweep {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      .spin-outer {
        transform-origin: 920px 240px;
        animation: spinSlow 30s linear infinite;
      }
      .spin-inner {
        transform-origin: 920px 240px;
        animation: spinReverse 18s linear infinite;
      }
      .radar-sweep {
        transform-origin: 920px 240px;
        animation: radarSweep 6s linear infinite;
      }
      .pulse-dot {
        animation: pulseGlow 2.5s ease-in-out infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .spin-outer, .spin-inner, .radar-sweep, .pulse-dot {
          animation: none !important;
        }
      }
    </style>
  </defs>

  <!-- Container -->
  <rect x="0.5" y="0.5" width="1199" height="479" rx="16" fill="url(#hero-bg)" stroke="#22304A" stroke-width="1.2" />

  <!-- Top Hairline Accent -->
  <line x1="16" y1="1" x2="1184" y2="1" stroke="#22304A" stroke-width="1" />
  <line x1="16" y1="1" x2="260" y2="1" stroke="#3B82F6" stroke-width="2" />

  <!-- Grid Texture Overlay -->
  <g opacity="0.07" stroke="#94A3B8" stroke-width="0.8">
    <line x1="40" y1="0" x2="40" y2="480" />
    <line x1="240" y1="0" x2="240" y2="480" />
    <line x1="440" y1="0" x2="440" y2="480" />
    <line x1="640" y1="0" x2="640" y2="480" />
    <line x1="840" y1="0" x2="840" y2="480" />
    <line x1="1040" y1="0" x2="1040" y2="480" />
    <line x1="0" y1="120" x2="1200" y2="120" />
    <line x1="0" y1="240" x2="1200" y2="240" />
    <line x1="0" y1="360" x2="1200" y2="360" />
  </g>

  <!-- Corner Brackets -->
  <path d="M 28 42 L 42 42 L 42 28" fill="none" stroke="#3B82F6" stroke-width="1.5" />
  <path d="M 1172 42 L 1158 42 L 1158 28" fill="none" stroke="#22304A" stroke-width="1.5" />
  <path d="M 28 438 L 42 438 L 42 452" fill="none" stroke="#22304A" stroke-width="1.5" />
  <path d="M 1172 438 L 1158 438 L 1158 452" fill="none" stroke="#3B82F6" stroke-width="1.5" />

  <!-- Terminal Status Pill -->
  <g transform="translate(64, 52)">
    <rect width="210" height="26" rx="13" fill="#131B2E" stroke="#253553" stroke-width="0.8" />
    <circle cx="14" cy="13" r="4" fill="#10B981" />
    <text x="28" y="17" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="11" font-weight="600">~ /sawan $ status --active</text>
  </g>

  <!-- Main Headline -->
  <text x="64" y="140" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="46" font-weight="800" letter-spacing="-1">
    Sawan <tspan fill="#60A5FA" font-family="Georgia, serif" font-style="italic" font-weight="400">Sahani.</tspan>
  </text>

  <!-- Developer Handle &amp; Tagline -->
  <g transform="translate(64, 168)">
    <rect width="96" height="22" rx="4" fill="#1E293B" stroke="#3B82F6" stroke-width="0.8" />
    <text x="48" y="15" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="10.5" font-weight="700" text-anchor="middle">@Sawan017</text>

    <text x="112" y="16" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13.5" font-weight="600" letter-spacing="0.5">
      SYSTEMS ARCHITECT • FULL-STACK ENGINEER • C++20 ALGORITHMIC SPECIALIST
    </text>
  </g>

  <!-- Concise Narrative Statement -->
  <text x="64" y="222" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14.5" font-weight="400" line-height="24">
    <tspan x="64" dy="0">Engineering resilient full-stack platforms, interactive 3D ecosystems, and mastering</tspan>
    <tspan x="64" dy="24">rigorous asymptotic algorithmic problem-solving with high-performance standards.</tspan>
  </text>

  <!-- 3 Skill Panels -->
  <g transform="translate(64, 280)">
    <!-- Panel 1: Modern Web &amp; 3D -->
    <g transform="translate(0, 0)">
      <rect width="186" height="74" rx="8" fill="#131B2E" stroke="#253553" stroke-width="1" />
      <circle cx="18" cy="22" r="3.5" fill="#60A5FA" />
      <text x="30" y="26" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700">Modern Web &amp; 3D</text>
      <text x="18" y="46" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11">Next.js 16 • React 19</text>
      <text x="18" y="62" fill="#60A5FA" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">Three.js &amp; R3F Canvas</text>
    </g>

    <!-- Panel 2: Algorithmic Rigor -->
    <g transform="translate(202, 0)">
      <rect width="186" height="74" rx="8" fill="#131B2E" stroke="#253553" stroke-width="1" />
      <circle cx="18" cy="22" r="3.5" fill="#3B82F6" />
      <text x="30" y="26" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700">Algorithmic Rigor</text>
      <text x="18" y="46" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11">C++20 STL &amp; Concepts</text>
      <text x="18" y="62" fill="#60A5FA" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">LeetCode &amp; Codeforces</text>
    </g>

    <!-- Panel 3: Cloud &amp; Architecture -->
    <g transform="translate(404, 0)">
      <rect width="186" height="74" rx="8" fill="#131B2E" stroke="#253553" stroke-width="1" />
      <circle cx="18" cy="22" r="3.5" fill="#10B981" />
      <text x="30" y="26" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700">Cloud &amp; Systems</text>
      <text x="18" y="46" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11">Supabase • PostgreSQL</text>
      <text x="18" y="62" fill="#60A5FA" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">REST APIs &amp; SSR Pipelines</text>
    </g>
  </g>

  <!-- Verified Project Badges Footer Strip -->
  <g transform="translate(64, 388)">
    <rect width="590" height="34" rx="6" fill="#0C1322" stroke="#22304A" stroke-width="0.8" />
    <text x="18" y="21" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="10.5" font-weight="700">FLAGSHIPS &gt;</text>
    <text x="100" y="21" fill="#E2E8F0" font-family="'Fira Code', Consolas, monospace" font-size="10.5">ARINOVA (RPG) • SourCa (AI) • CodeAscend • C++20 DSA</text>
  </g>

  <!-- RIGHT SIDE: Animated Technical Orbital Radar -->
  <g transform="translate(20, 0)">
    <!-- Radar Background Disc -->
    <circle cx="920" cy="240" r="160" fill="url(#radar-core-glow)" />
    <circle cx="920" cy="240" r="160" fill="none" stroke="#22304A" stroke-width="1.2" />
    <circle cx="920" cy="240" r="115" fill="none" stroke="#1E293B" stroke-width="1" />
    <circle cx="920" cy="240" r="70" fill="none" stroke="#22304A" stroke-width="1" />

    <!-- Crosshair Lines -->
    <line x1="920" y1="60" x2="920" y2="420" stroke="#1E293B" stroke-width="0.8" stroke-dasharray="3 3" />
    <line x1="740" y1="240" x2="1100" y2="240" stroke="#1E293B" stroke-width="0.8" stroke-dasharray="3 3" />

    <!-- Animated Radar Sweeping Sector Beam -->
    <g class="radar-sweep">
      <path d="M 920 240 L 1080 240 A 160 160 0 0 0 1033 127 Z" fill="#3B82F6" opacity="0.12" />
      <line x1="920" y1="240" x2="1080" y2="240" stroke="#60A5FA" stroke-width="1.5" opacity="0.6" />
    </g>

    <!-- Animated Spinning Outer Rings -->
    <g class="spin-outer">
      <circle cx="920" cy="240" r="140" fill="none" stroke="#3B82F6" stroke-width="1.2" stroke-dasharray="14 18 30 18" opacity="0.75" />
      <circle cx="1060" cy="240" r="4" fill="#60A5FA" />
      <circle cx="780" cy="240" r="3" fill="#3B82F6" />
    </g>

    <g class="spin-inner">
      <circle cx="920" cy="240" r="95" fill="none" stroke="#60A5FA" stroke-width="1" stroke-dasharray="8 12" opacity="0.5" />
      <circle cx="920" cy="145" r="3.5" fill="#60A5FA" />
      <circle cx="920" cy="335" r="3.5" fill="#3B82F6" />
    </g>

    <!-- Radar Center Telemetry Core -->
    <circle cx="920" cy="240" r="28" fill="#0F172A" stroke="#3B82F6" stroke-width="1.5" />
    <circle cx="920" cy="240" r="6" fill="#60A5FA" class="pulse-dot" />
    <text x="920" y="244" fill="#F8FAFC" font-family="'Fira Code', Consolas, monospace" font-size="9" font-weight="700" text-anchor="middle">DEV</text>

    <!-- Telemetry Callout Pills -->
    <g transform="translate(870, 92)">
      <rect width="100" height="20" rx="3" fill="#131B2E" stroke="#253553" stroke-width="0.8" />
      <text x="50" y="14" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="8.5" font-weight="700" text-anchor="middle">SYS.ARCH // 01</text>
    </g>

    <g transform="translate(1015, 190)">
      <rect width="84" height="20" rx="3" fill="#131B2E" stroke="#253553" stroke-width="0.8" />
      <text x="42" y="14" fill="#94A3B8" font-family="'Fira Code', Consolas, monospace" font-size="8.5" text-anchor="middle">WEB 3D // 60FPS</text>
    </g>

    <g transform="translate(745, 275)">
      <rect width="86" height="20" rx="3" fill="#131B2E" stroke="#253553" stroke-width="0.8" />
      <text x="43" y="14" fill="#94A3B8" font-family="'Fira Code', Consolas, monospace" font-size="8.5" text-anchor="middle">C++20 // CORE</text>
    </g>

    <g transform="translate(865, 365)">
      <rect width="110" height="20" rx="3" fill="#131B2E" stroke="#253553" stroke-width="0.8" />
      <text x="55" y="14" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="8.5" font-weight="700" text-anchor="middle">STATUS: ACTIVE</text>
    </g>
  </g>
</svg>`;
}

// -----------------------------------------------------------------------------
// 3. About Section Graphic (1200 x 320) - Terminal CLI Session + Focus Cards
// -----------------------------------------------------------------------------
function generateAboutSection() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 320" width="1200" height="320">
  <defs>
    <linearGradient id="about-card-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="100%" stop-color="#0A0E17" />
    </linearGradient>
  </defs>

  <!-- Left: Interactive Terminal CLI Window (Width: 680) -->
  <g transform="translate(0, 0)">
    <rect x="0.5" y="0.5" width="679" height="319" rx="12" fill="#0A0E17" stroke="#22304A" stroke-width="1.2" />
    
    <!-- Window Header -->
    <path d="M 1 12 A 11 11 0 0 1 12 1 L 668 1 A 11 11 0 0 1 679 12 L 679 38 L 1 38 Z" fill="#131B2E" />
    <line x1="1" y1="38" x2="679" y2="38" stroke="#22304A" stroke-width="1" />
    
    <!-- Window Controls -->
    <circle cx="20" cy="20" r="5" fill="#EF4444" />
    <circle cx="38" cy="20" r="5" fill="#F59E0B" />
    <circle cx="56" cy="20" r="5" fill="#10B981" />
    
    <text x="340" y="24" fill="#94A3B8" font-family="'Fira Code', Consolas, monospace" font-size="11" text-anchor="middle">sawan@workstation: ~</text>

    <!-- Terminal Content -->
    <g transform="translate(24, 62)">
      <!-- Command 1 -->
      <text x="0" y="0" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="12" font-weight="700">$ whoami</text>
      <text x="0" y="20" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13">Sawan Sahani • Systems Architect &amp; Full-Stack Engineer</text>

      <!-- Command 2 -->
      <text x="0" y="56" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="12" font-weight="700">$ cat discipline.md</text>
      <text x="0" y="76" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12.5">
        Undergraduate in Computer Science &amp; Engineering. Specialized in architecting
      </text>
      <text x="0" y="94" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12.5">
        modular full-stack web platforms and mastering algorithmic problem-solving.
      </text>

      <!-- Command 3 -->
      <text x="0" y="130" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="12" font-weight="700">$ ls ./shipped_systems</text>
      <text x="0" y="150" fill="#38BDF8" font-family="'Fira Code', Consolas, monospace" font-size="11.5">
        arinova/  sourca/  codeascend/  algorithmic-solutions-cpp/
      </text>

      <!-- Command 4 -->
      <text x="0" y="186" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="12" font-weight="700">$ echo $CORE_PHILOSOPHY</text>
      <text x="0" y="206" fill="#F8FAFC" font-family="Georgia, serif" font-size="13" font-style="italic">
        "Rigorous asymptotic logic beneath the surface; clean, intentional design on top."
      </text>

      <!-- Cursor -->
      <rect x="0" y="226" width="8" height="15" fill="#3B82F6" opacity="0.8" />
    </g>
  </g>

  <!-- Right: 3 Stacked Focus Cards (Width: 496) -->
  <g transform="translate(704, 0)">
    <!-- Card 1: Primary Language -->
    <g transform="translate(0, 0)">
      <rect x="0.5" y="0.5" width="495" height="96" rx="10" fill="#0F172A" stroke="#22304A" stroke-width="1.2" />
      <text x="20" y="26" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="9.5" font-weight="700" letter-spacing="1">PRIMARY LANGUAGE // CORE CS</text>
      <text x="20" y="52" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="800">C++20 Standard</text>
      <text x="20" y="74" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12">Data Structures • Algorithmic Rigor • Optimal Time &amp; Space</text>
      
      <rect x="400" y="16" width="76" height="22" rx="4" fill="#131B2E" stroke="#3B82F6" stroke-width="0.8" />
      <text x="438" y="31" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="9" font-weight="700" text-anchor="middle">PRIMARY</text>
    </g>

    <!-- Card 2: Full-Stack Systems -->
    <g transform="translate(0, 112)">
      <rect x="0.5" y="0.5" width="495" height="96" rx="10" fill="#0F172A" stroke="#22304A" stroke-width="1.2" />
      <text x="20" y="26" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="9.5" font-weight="700" letter-spacing="1">FULL-STACK ECOSYSTEM // MODERN WEB</text>
      <text x="20" y="52" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="800">TypeScript &amp; React 19</text>
      <text x="20" y="74" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12">Next.js 16 SSR • Three.js 3D Canvas • Tailwind CSS</text>
      
      <rect x="382" y="16" width="94" height="22" rx="4" fill="#131B2E" stroke="#22304A" stroke-width="0.8" />
      <text x="429" y="31" fill="#94A3B8" font-family="'Fira Code', Consolas, monospace" font-size="9" font-weight="600" text-anchor="middle">FULL-STACK</text>
    </g>

    <!-- Card 3: Cloud &amp; Backend Architecture -->
    <g transform="translate(0, 224)">
      <rect x="0.5" y="0.5" width="495" height="96" rx="10" fill="#0F172A" stroke="#22304A" stroke-width="1.2" />
      <text x="20" y="26" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="9.5" font-weight="700" letter-spacing="1">PERSISTENCE &amp; CLOUD ARCHITECTURE</text>
      <text x="20" y="52" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="800">Supabase &amp; PostgreSQL</text>
      <text x="20" y="74" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12">Row Level Security • Relational Modeling • Real-time Sync</text>
      
      <rect x="390" y="16" width="86" height="22" rx="4" fill="#131B2E" stroke="#22304A" stroke-width="0.8" />
      <text x="433" y="31" fill="#94A3B8" font-family="'Fira Code', Consolas, monospace" font-size="9" font-weight="600" text-anchor="middle">DATABASE</text>
    </g>
  </g>
</svg>`;
}

// -----------------------------------------------------------------------------
// 4. Featured Project 1: ARINOVA (1200 x 260) - Astral Indigo &amp; Floating 3D Node
// -----------------------------------------------------------------------------
function generateProject1Arinova() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 260" width="1200" height="260">
  <defs>
    <linearGradient id="p1-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#11182B" />
      <stop offset="100%" stop-color="#0A0E18" />
    </linearGradient>
    <style>
      @keyframes floatCrystal {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-7px); }
      }
      @keyframes spinOrbit {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .floating-node {
        animation: floatCrystal 4s ease-in-out infinite;
      }
      .orbit-ring {
        transform-origin: 980px 125px;
        animation: spinOrbit 14s linear infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .floating-node, .orbit-ring { animation: none !important; }
      }
    </style>
  </defs>

  <!-- Container -->
  <rect x="0.5" y="0.5" width="1199" height="259" rx="14" fill="url(#p1-bg)" stroke="#233455" stroke-width="1.2" />
  <line x1="16" y1="1" x2="240" y2="1" stroke="#3B82F6" stroke-width="2" />

  <!-- Metadata Top Line -->
  <text x="44" y="38" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="11" font-weight="700" letter-spacing="1.5">01 • 3D WEB REALM • GAMIFIED DEVELOPER RPG • 2025</text>

  <!-- Title + Italic Subtitle -->
  <text x="44" y="76" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="800" letter-spacing="-0.3">ARINOVA</text>
  <text x="195" y="75" fill="#60A5FA" font-family="Georgia, serif" font-size="16" font-style="italic">Gamified Developer Universe</text>

  <!-- Concise Description -->
  <text x="44" y="103" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13.5">
    An interactive 3D developer career RPG transforming real coding roadmaps, quests, and milestones into an immersive universe.
  </text>

  <!-- Architecture / Built Line -->
  <text x="44" y="128" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="11" font-weight="600">
    BUILT &gt; Three.js 3D Canvas • Dynamic Quest Engine • Monaco In-Browser IDE • Supabase Cloud State
  </text>

  <!-- 3 Authentic Architecture Pillars -->
  <g transform="translate(44, 144)">
    <rect x="0" y="0" width="165" height="46" rx="6" fill="#131D33" stroke="#253555" stroke-width="1" />
    <text x="14" y="21" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700">3D Interactive Realm</text>
    <text x="14" y="36" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">Three.js &amp; R3F Scene</text>

    <rect x="180" y="0" width="165" height="46" rx="6" fill="#131D33" stroke="#253555" stroke-width="1" />
    <text x="194" y="21" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700">Real-Time Progression</text>
    <text x="194" y="36" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">Supabase Cloud Sync</text>

    <rect x="360" y="0" width="165" height="46" rx="6" fill="#131D33" stroke="#253555" stroke-width="1" />
    <text x="374" y="21" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700">Monaco Code IDE</text>
    <text x="374" y="36" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">Live Quest Evaluation</text>
  </g>

  <!-- Tech Pills Row -->
  <g transform="translate(44, 206)">
    <rect x="0" y="0" width="76" height="24" rx="4" fill="#131D33" stroke="#253555" stroke-width="0.8" />
    <text x="38" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">React 19</text>

    <rect x="84" y="0" width="86" height="24" rx="4" fill="#131D33" stroke="#253555" stroke-width="0.8" />
    <text x="127" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">TypeScript</text>

    <rect x="178" y="0" width="76" height="24" rx="4" fill="#131D33" stroke="#253555" stroke-width="0.8" />
    <text x="216" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Three.js</text>

    <rect x="262" y="0" width="56" height="24" rx="4" fill="#131D33" stroke="#253555" stroke-width="0.8" />
    <text x="290" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">R3F</text>

    <rect x="326" y="0" width="80" height="24" rx="4" fill="#131D33" stroke="#253555" stroke-width="0.8" />
    <text x="366" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Supabase</text>

    <rect x="414" y="0" width="104" height="24" rx="4" fill="#131D33" stroke="#253555" stroke-width="0.8" />
    <text x="466" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Monaco Editor</text>

    <rect x="526" y="0" width="96" height="24" rx="4" fill="#131D33" stroke="#253555" stroke-width="0.8" />
    <text x="574" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Tailwind CSS</text>
  </g>

  <!-- Right: Animated Isometric Crystal Illustration -->
  <g transform="translate(800, 20)">
    <rect x="0" y="0" width="356" height="218" rx="10" fill="#0A0E18" stroke="#233455" stroke-width="1" />
    
    <!-- Coordinate Grid Lines -->
    <line x1="20" y1="160" x2="336" y2="160" stroke="#1E2A44" stroke-width="0.8" stroke-dasharray="3 3" />
    <line x1="20" y1="120" x2="336" y2="120" stroke="#1E2A44" stroke-width="0.6" stroke-dasharray="2 4" />

    <!-- Orbit Ring (Animated) -->
    <g class="orbit-ring">
      <ellipse cx="178" cy="110" rx="90" ry="34" fill="none" stroke="#3B82F6" stroke-width="1" stroke-dasharray="6 6" opacity="0.6" />
      <circle cx="268" cy="110" r="3.5" fill="#60A5FA" />
      <circle cx="88" cy="110" r="2.5" fill="#3B82F6" />
    </g>

    <!-- Floating Isometric Node (Animated) -->
    <g class="floating-node">
      <!-- Isometric Crystal Core -->
      <polygon points="178,65 218,85 178,105 138,85" fill="#60A5FA" opacity="0.85" />
      <polygon points="138,85 178,105 178,155 138,135" fill="#2563EB" opacity="0.9" />
      <polygon points="178,105 218,85 218,135 178,155" fill="#1D4ED8" opacity="0.8" />
      <line x1="178" y1="65" x2="178" y2="155" stroke="#F8FAFC" stroke-width="0.8" opacity="0.7" />
    </g>

    <!-- HUD Label -->
    <rect x="20" y="16" width="154" height="20" rx="4" fill="#131D33" stroke="#253555" stroke-width="0.8" />
    <text x="28" y="30" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="8.5" font-weight="600">WORLD_NODE: [3D REALM]</text>

    <text x="178" y="198" fill="#94A3B8" font-family="'Fira Code', Consolas, monospace" font-size="9" text-anchor="middle">STATUS: ACTIVE • THREE.JS / R3F</text>
  </g>
</svg>`;
}

// -----------------------------------------------------------------------------
// 5. Featured Project 2: SourCa (1200 x 260) - Midnight Cobalt &amp; Neural Pulse
// -----------------------------------------------------------------------------
function generateProject2Sourca() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 260" width="1200" height="260">
  <defs>
    <linearGradient id="p2-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0E1929" />
      <stop offset="100%" stop-color="#090E17" />
    </linearGradient>
    <style>
      @keyframes pulseData {
        0% { stroke-dashoffset: 40; }
        100% { stroke-dashoffset: 0; }
      }
      @keyframes glowNode {
        0%, 100% { stroke: #0284C7; }
        50% { stroke: #38BDF8; }
      }
      .data-pipe {
        stroke-dasharray: 6 6;
        animation: pulseData 1.5s linear infinite;
      }
      .ai-engine {
        animation: glowNode 2s ease-in-out infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .data-pipe, .ai-engine { animation: none !important; }
      }
    </style>
  </defs>

  <!-- Container -->
  <rect x="0.5" y="0.5" width="1199" height="259" rx="14" fill="url(#p2-bg)" stroke="#1D354E" stroke-width="1.2" />
  <line x1="16" y1="1" x2="240" y2="1" stroke="#0284C7" stroke-width="2" />

  <!-- Metadata Top Line -->
  <text x="44" y="38" fill="#38BDF8" font-family="'Fira Code', Consolas, monospace" font-size="11" font-weight="700" letter-spacing="1.5">02 • AI PLATFORM • TECHNICAL PLACEMENT ENGINE • 2025</text>

  <!-- Title + Italic Subtitle -->
  <text x="44" y="76" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="800" letter-spacing="-0.3">SourCa</text>
  <text x="165" y="75" fill="#38BDF8" font-family="Georgia, serif" font-size="16" font-style="italic">AI Assessment &amp; Placement Engine</text>

  <!-- Concise Description -->
  <text x="44" y="103" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13.5">
    Intelligent evaluation platform that conducts automated technical coding interviews, contextual assessments, and recruiter matching.
  </text>

  <!-- Architecture / Built Line -->
  <text x="44" y="128" fill="#38BDF8" font-family="'Fira Code', Consolas, monospace" font-size="11" font-weight="600">
    BUILT &gt; Next.js 16 SSR • Google GenAI Evaluation Pipeline • Sandboxed Execution • Recruiter Analytics
  </text>

  <!-- 3 Authentic Architecture Pillars -->
  <g transform="translate(44, 144)">
    <rect x="0" y="0" width="165" height="46" rx="6" fill="#112236" stroke="#1F3A56" stroke-width="1" />
    <text x="14" y="21" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700">Google GenAI Core</text>
    <text x="14" y="36" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">Automated Code Review</text>

    <rect x="180" y="0" width="165" height="46" rx="6" fill="#112236" stroke="#1F3A56" stroke-width="1" />
    <text x="194" y="21" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700">Sandbox Runner</text>
    <text x="194" y="36" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">Isolated Code Execution</text>

    <rect x="360" y="0" width="165" height="46" rx="6" fill="#112236" stroke="#1F3A56" stroke-width="1" />
    <text x="374" y="21" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700">Recruiter Insights</text>
    <text x="374" y="36" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">Contextual Benchmark Match</text>
  </g>

  <!-- Tech Pills Row -->
  <g transform="translate(44, 206)">
    <rect x="0" y="0" width="86" height="24" rx="4" fill="#112236" stroke="#1F3A56" stroke-width="0.8" />
    <text x="43" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Next.js 16</text>

    <rect x="94" y="0" width="86" height="24" rx="4" fill="#112236" stroke="#1F3A56" stroke-width="0.8" />
    <text x="137" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">TypeScript</text>

    <rect x="188" y="0" width="102" height="24" rx="4" fill="#112236" stroke="#1F3A56" stroke-width="0.8" />
    <text x="239" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Google GenAI</text>

    <rect x="298" y="0" width="104" height="24" rx="4" fill="#112236" stroke="#1F3A56" stroke-width="0.8" />
    <text x="350" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Supabase SSR</text>

    <rect x="410" y="0" width="112" height="24" rx="4" fill="#112236" stroke="#1F3A56" stroke-width="0.8" />
    <text x="466" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Tailwind CSS v4</text>

    <rect x="530" y="0" width="86" height="24" rx="4" fill="#112236" stroke="#1F3A56" stroke-width="0.8" />
    <text x="573" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">PostgreSQL</text>
  </g>

  <!-- Right: Animated Neural AI Pipeline Diagram -->
  <g transform="translate(800, 20)">
    <rect x="0" y="0" width="356" height="218" rx="10" fill="#090E17" stroke="#1D354E" stroke-width="1" />
    
    <text x="178" y="30" fill="#38BDF8" font-family="'Fira Code', Consolas, monospace" font-size="9" text-anchor="middle" letter-spacing="1">EVALUATION PIPELINE // GENAI</text>

    <!-- Node 1: Candidate Input -->
    <rect x="24" y="94" width="86" height="32" rx="6" fill="#112236" stroke="#1F3A56" stroke-width="1" />
    <text x="67" y="114" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="700" text-anchor="middle">SUBMISSION</text>

    <!-- Animated Data Pipeline Stream to Center -->
    <path d="M 110 110 L 155 110" fill="none" stroke="#38BDF8" stroke-width="1.8" class="data-pipe" />

    <!-- Central Node: GenAI Engine -->
    <rect x="155" y="84" width="76" height="52" rx="6" fill="#0E233D" stroke="#0284C7" stroke-width="1.5" class="ai-engine" />
    <text x="193" y="106" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="800" text-anchor="middle">GenAI</text>
    <text x="193" y="122" fill="#38BDF8" font-family="'Fira Code', Consolas, monospace" font-size="8.5" text-anchor="middle">PIPELINE</text>

    <!-- Branches to Outputs -->
    <path d="M 231 102 C 250 102, 252 74, 270 74" fill="none" stroke="#38BDF8" stroke-width="1.5" class="data-pipe" />
    <rect x="270" y="58" width="68" height="30" rx="6" fill="#112236" stroke="#0284C7" stroke-width="1" />
    <text x="304" y="77" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9.5" font-weight="700" text-anchor="middle">INSIGHTS</text>

    <path d="M 231 118 C 250 118, 252 146, 270 146" fill="none" stroke="#38BDF8" stroke-width="1.5" class="data-pipe" />
    <rect x="270" y="132" width="68" height="30" rx="6" fill="#112236" stroke="#1F3A56" stroke-width="1" />
    <text x="304" y="151" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9.5" font-weight="700" text-anchor="middle">REPORT</text>

    <text x="178" y="198" fill="#94A3B8" font-family="'Fira Code', Consolas, monospace" font-size="9" text-anchor="middle">PROMPT CACHING • CONTEXTUAL FEEDBACK</text>
  </g>
</svg>`;
}

// -----------------------------------------------------------------------------
// 6. Featured Project 3: CodeAscend (1200 x 260) - Regal Slate &amp; Ascending Trajectory
// -----------------------------------------------------------------------------
function generateProject3CodeAscend() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 260" width="1200" height="260">
  <defs>
    <linearGradient id="p3-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#121927" />
      <stop offset="100%" stop-color="#0A0F19" />
    </linearGradient>
    <style>
      @keyframes sweepPath {
        0% { stroke-dashoffset: 200; }
        100% { stroke-dashoffset: 0; }
      }
      @keyframes pulseStep {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
      }
      .trajectory-line {
        stroke-dasharray: 200;
        animation: sweepPath 3s ease-in-out infinite alternate;
      }
      .active-step {
        animation: pulseStep 2s ease-in-out infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .trajectory-line, .active-step { animation: none !important; }
      }
    </style>
  </defs>

  <!-- Container -->
  <rect x="0.5" y="0.5" width="1199" height="259" rx="14" fill="url(#p3-bg)" stroke="#25354F" stroke-width="1.2" />
  <line x1="16" y1="1" x2="240" y2="1" stroke="#3B82F6" stroke-width="2" />

  <!-- Metadata Top Line -->
  <text x="44" y="38" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="11" font-weight="700" letter-spacing="1.5">03 • PRODUCTIVITY • CAREER PROGRESSION • 2024</text>

  <!-- Title + Italic Subtitle -->
  <text x="44" y="76" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="800" letter-spacing="-0.3">CodeAscend</text>
  <text x="235" y="75" fill="#60A5FA" font-family="Georgia, serif" font-size="16" font-style="italic">Milestone &amp; Trajectory Tracker</text>

  <!-- Concise Description -->
  <text x="44" y="103" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13.5">
    A comprehensive skill roadmap and milestone tracker helping engineers visualize learning curves and career velocity.
  </text>

  <!-- Architecture / Built Line -->
  <text x="44" y="128" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="11" font-weight="600">
    BUILT &gt; Milestone Dependency Graphs • Velocity Metrics • Cloud Persistence • RESTful API Integration
  </text>

  <!-- 3 Authentic Architecture Pillars -->
  <g transform="translate(44, 144)">
    <rect x="0" y="0" width="165" height="46" rx="6" fill="#141E32" stroke="#25354F" stroke-width="1" />
    <text x="14" y="21" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700">Roadmap Tracks</text>
    <text x="14" y="36" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">Curated Learning Paths</text>

    <rect x="180" y="0" width="165" height="46" rx="6" fill="#141E32" stroke="#25354F" stroke-width="1" />
    <text x="194" y="21" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700">Dynamic Graph</text>
    <text x="194" y="36" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">Prerequisite Dependencies</text>

    <rect x="360" y="0" width="165" height="46" rx="6" fill="#141E32" stroke="#25354F" stroke-width="1" />
    <text x="374" y="21" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700">Velocity Tracker</text>
    <text x="374" y="36" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">Persistent Progress State</text>
  </g>

  <!-- Tech Pills Row -->
  <g transform="translate(44, 206)">
    <rect x="0" y="0" width="66" height="24" rx="4" fill="#141E32" stroke="#25354F" stroke-width="0.8" />
    <text x="33" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">React</text>

    <rect x="74" y="0" width="86" height="24" rx="4" fill="#141E32" stroke="#25354F" stroke-width="0.8" />
    <text x="117" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">TypeScript</text>

    <rect x="168" y="0" width="80" height="24" rx="4" fill="#141E32" stroke="#25354F" stroke-width="0.8" />
    <text x="208" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Supabase</text>

    <rect x="256" y="0" width="94" height="24" rx="4" fill="#141E32" stroke="#25354F" stroke-width="0.8" />
    <text x="303" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Tailwind CSS</text>

    <rect x="358" y="0" width="84" height="24" rx="4" fill="#141E32" stroke="#25354F" stroke-width="0.8" />
    <text x="400" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">REST APIs</text>

    <rect x="450" y="0" width="56" height="24" rx="4" fill="#141E32" stroke="#25354F" stroke-width="0.8" />
    <text x="478" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Vite</text>
  </g>

  <!-- Right: Animated Ascending Trajectory Diagram -->
  <g transform="translate(800, 20)">
    <rect x="0" y="0" width="356" height="218" rx="10" fill="#0A0F19" stroke="#25354F" stroke-width="1" />
    
    <text x="178" y="30" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="9" text-anchor="middle" letter-spacing="1">SKILL ROADMAP &amp; TRAJECTORY PIPELINE</text>

    <!-- 4 Step Pipeline Blocks -->
    <g transform="translate(26, 75)">
      <!-- Step 01 -->
      <rect x="0" y="45" width="66" height="34" rx="4" fill="#141E32" stroke="#25354F" stroke-width="1" />
      <text x="33" y="58" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="8" text-anchor="middle">01</text>
      <text x="33" y="71" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="600" text-anchor="middle">Core</text>

      <line x1="66" y1="62" x2="80" y2="47" stroke="#3B82F6" stroke-width="1.2" stroke-dasharray="2 2" />

      <!-- Step 02 -->
      <rect x="80" y="30" width="66" height="34" rx="4" fill="#141E32" stroke="#25354F" stroke-width="1" />
      <text x="113" y="43" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="8" text-anchor="middle">02</text>
      <text x="113" y="56" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="600" text-anchor="middle">Systems</text>

      <line x1="146" y1="47" x2="160" y2="32" stroke="#3B82F6" stroke-width="1.2" stroke-dasharray="2 2" />

      <!-- Step 03 -->
      <rect x="160" y="15" width="66" height="34" rx="4" fill="#141E32" stroke="#25354F" stroke-width="1" />
      <text x="193" y="28" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="8" text-anchor="middle">03</text>
      <text x="193" y="41" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="600" text-anchor="middle">Scale</text>

      <line x1="226" y1="32" x2="240" y2="17" stroke="#3B82F6" stroke-width="1.2" stroke-dasharray="2 2" />

      <!-- Step 04 -->
      <rect x="240" y="0" width="66" height="34" rx="4" fill="#1E2B45" stroke="#3B82F6" stroke-width="1.2" class="active-step" />
      <text x="273" y="13" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="8" text-anchor="middle">04</text>
      <text x="273" y="26" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="700" text-anchor="middle">Mastery</text>
    </g>

    <!-- Ascending Trajectory Curve (Animated Sweep) -->
    <path d="M 40 165 Q 160 160, 290 95" fill="none" stroke="#60A5FA" stroke-width="2" class="trajectory-line" />
    <circle cx="290" cy="95" r="4.5" fill="#F8FAFC" />

    <text x="178" y="198" fill="#94A3B8" font-family="'Fira Code', Consolas, monospace" font-size="9" text-anchor="middle">TRAJECTORY: POSITIVE VELOCITY • 100% PERSISTENT</text>
  </g>
</svg>`;
}

// -----------------------------------------------------------------------------
// 7. Featured Project 4: Algorithmic Solutions (1200 x 260) - Charcoal Obsidian &amp; Tree
// -----------------------------------------------------------------------------
function generateProject4DSA() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 260" width="1200" height="260">
  <defs>
    <linearGradient id="p4-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0E131E" />
      <stop offset="100%" stop-color="#080C14" />
    </linearGradient>
    <style>
      @keyframes pingRoot {
        0%, 100% { fill: #1D4ED8; }
        50% { fill: #3B82F6; }
      }
      @keyframes pingLeft {
        0%, 100% { stroke: #253555; }
        30% { stroke: #60A5FA; }
      }
      @keyframes pingRight {
        0%, 100% { stroke: #253555; }
        60% { stroke: #60A5FA; }
      }
      .node-root { animation: pingRoot 3s ease-in-out infinite; }
      .node-left { animation: pingLeft 3s ease-in-out infinite; }
      .node-right { animation: pingRight 3s ease-in-out infinite; }
      @media (prefers-reduced-motion: reduce) {
        .node-root, .node-left, .node-right { animation: none !important; }
      }
    </style>
  </defs>

  <!-- Container -->
  <rect x="0.5" y="0.5" width="1199" height="259" rx="14" fill="url(#p4-bg)" stroke="#233148" stroke-width="1.2" />
  <line x1="16" y1="1" x2="240" y2="1" stroke="#6366F1" stroke-width="2" />

  <!-- Metadata Top Line -->
  <text x="44" y="38" fill="#818CF8" font-family="'Fira Code', Consolas, monospace" font-size="11" font-weight="700" letter-spacing="1.5">04 • SYSTEMS • COMPETITIVE PROGRAMMING • 2024 - PRESENT</text>

  <!-- Title + Italic Subtitle -->
  <text x="44" y="76" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="800" letter-spacing="-0.3">Algorithmic Solutions</text>
  <text x="360" y="75" fill="#818CF8" font-family="Georgia, serif" font-size="16" font-style="italic">High-Performance C++20 Core</text>

  <!-- Concise Description -->
  <text x="44" y="103" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13.5">
    Rigorous problem-solving repository implementing advanced data structures, graph theory, and dynamic programming with strict asymptotic bounds.
  </text>

  <!-- Architecture / Built Line -->
  <text x="44" y="128" fill="#818CF8" font-family="'Fira Code', Consolas, monospace" font-size="11" font-weight="600">
    BUILT &gt; C++20 Ranges &amp; Concepts • Segment Trees • Fenwick Trees • Tarjan SCC • Flow Networks
  </text>

  <!-- 3 Authentic Architecture Pillars -->
  <g transform="translate(44, 144)">
    <rect x="0" y="0" width="165" height="46" rx="6" fill="#131B2A" stroke="#233148" stroke-width="1" />
    <text x="14" y="21" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700">C++20 STL Rigor</text>
    <text x="14" y="36" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">Modern Standard Library</text>

    <rect x="180" y="0" width="165" height="46" rx="6" fill="#131B2A" stroke="#233148" stroke-width="1" />
    <text x="194" y="21" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700">Strict Asymptotics</text>
    <text x="194" y="36" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">O(1) / O(log N) Bound Checks</text>

    <rect x="360" y="0" width="165" height="46" rx="6" fill="#131B2A" stroke="#233148" stroke-width="1" />
    <text x="374" y="21" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700">DP &amp; Graph Theory</text>
    <text x="374" y="36" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5">Tarjan, Flows, Trees</text>
  </g>

  <!-- Tech Pills Row -->
  <g transform="translate(44, 206)">
    <rect x="0" y="0" width="66" height="24" rx="4" fill="#131B2A" stroke="#233148" stroke-width="0.8" />
    <text x="33" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">C++20</text>

    <rect x="74" y="0" width="56" height="24" rx="4" fill="#131B2A" stroke="#233148" stroke-width="0.8" />
    <text x="102" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">STL</text>

    <rect x="138" y="0" width="118" height="24" rx="4" fill="#131B2A" stroke="#233148" stroke-width="0.8" />
    <text x="197" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Data Structures</text>

    <rect x="264" y="0" width="94" height="24" rx="4" fill="#131B2A" stroke="#233148" stroke-width="0.8" />
    <text x="311" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Algorithms</text>

    <rect x="366" y="0" width="104" height="24" rx="4" fill="#131B2A" stroke="#233148" stroke-width="0.8" />
    <text x="418" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Graph Theory</text>

    <rect x="478" y="0" width="154" height="24" rx="4" fill="#131B2A" stroke="#233148" stroke-width="0.8" />
    <text x="555" y="16" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Dynamic Programming</text>
  </g>

  <!-- Right: Animated Binary Search Tree / Graph Diagram -->
  <g transform="translate(800, 20)">
    <rect x="0" y="0" width="356" height="218" rx="10" fill="#080C14" stroke="#233148" stroke-width="1" />
    
    <text x="178" y="30" fill="#818CF8" font-family="'Fira Code', Consolas, monospace" font-size="9" text-anchor="middle" letter-spacing="1">TREE / GRAPH ISOMETRIC TOPOLOGY</text>

    <!-- Balanced Tree Node Layout -->
    <!-- Root Node -->
    <circle cx="178" cy="62" r="14" fill="#1D4ED8" stroke="#818CF8" stroke-width="1.5" class="node-root" />
    <text x="178" y="66" fill="#F8FAFC" font-family="'Fira Code', Consolas, monospace" font-size="9" font-weight="700" text-anchor="middle">R</text>

    <!-- Edges Level 1 -->
    <line x1="168" y1="72" x2="118" y2="102" stroke="#818CF8" stroke-width="1.2" />
    <line x1="188" y1="72" x2="238" y2="102" stroke="#818CF8" stroke-width="1.2" />

    <!-- Children Level 1 -->
    <circle cx="118" cy="110" r="12" fill="#131B2A" stroke="#3B82F6" stroke-width="1.2" class="node-left" />
    <text x="118" y="114" fill="#F8FAFC" font-family="'Fira Code', Consolas, monospace" font-size="8.5" text-anchor="middle">L1</text>

    <circle cx="238" cy="110" r="12" fill="#131B2A" stroke="#3B82F6" stroke-width="1.2" class="node-right" />
    <text x="238" y="114" fill="#F8FAFC" font-family="'Fira Code', Consolas, monospace" font-size="8.5" text-anchor="middle">R1</text>

    <!-- Edges Level 2 -->
    <line x1="110" y1="120" x2="80" y2="148" stroke="#233148" stroke-width="1" stroke-dasharray="2 2" />
    <line x1="126" y1="120" x2="148" y2="148" stroke="#233148" stroke-width="1" stroke-dasharray="2 2" />
    <line x1="230" y1="120" x2="208" y2="148" stroke="#233148" stroke-width="1" stroke-dasharray="2 2" />
    <line x1="246" y1="120" x2="276" y2="148" stroke="#233148" stroke-width="1" stroke-dasharray="2 2" />

    <!-- Leaf Nodes -->
    <circle cx="80" cy="152" r="8" fill="#0E131E" stroke="#233148" stroke-width="1" />
    <circle cx="148" cy="152" r="8" fill="#0E131E" stroke="#233148" stroke-width="1" />
    <circle cx="208" cy="152" r="8" fill="#0E131E" stroke="#233148" stroke-width="1" />
    <circle cx="276" cy="152" r="8" fill="#0E131E" stroke="#233148" stroke-width="1" />

    <text x="178" y="198" fill="#94A3B8" font-family="'Fira Code', Consolas, monospace" font-size="9" text-anchor="middle">COMPLEXITY: O(1) OVERHEAD • PROVABLE BOUNDS</text>
  </g>
</svg>`;
}

// -----------------------------------------------------------------------------
// 8. Contact &amp; Footer Banner (1200 x 140)
// -----------------------------------------------------------------------------
function generateFooterBanner() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 140" width="1200" height="140">
  <defs>
    <linearGradient id="ft-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="100%" stop-color="#090D16" />
    </linearGradient>
  </defs>

  <rect x="0.5" y="0.5" width="1199" height="139" rx="14" fill="url(#ft-bg)" stroke="#22304A" stroke-width="1.2" />
  <line x1="16" y1="1" x2="240" y2="1" stroke="#3B82F6" stroke-width="2" />

  <!-- Left Side: Monogram &amp; Statement -->
  <g transform="translate(40, 24)">
    <rect x="0" y="0" width="28" height="28" rx="6" fill="#131B2E" stroke="#253553" stroke-width="1" />
    <text x="14" y="19" fill="#60A5FA" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="800" text-anchor="middle">S</text>
    
    <text x="40" y="19" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="11.5" font-weight="600">sawan@workstation:~$ exit 0</text>
    
    <text x="0" y="56" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="19" font-weight="700">
      Let's build something <tspan fill="#60A5FA" font-family="Georgia, serif" font-style="italic">exceptional.</tspan>
    </text>
    <text x="0" y="78" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12">
      Open for software engineering roles, distributed systems, and collaborative development.
    </text>
  </g>

  <!-- Right Side: Status Pill -->
  <g transform="translate(830, 32)">
    <rect x="0" y="0" width="330" height="34" rx="6" fill="#131B2E" stroke="#253553" stroke-width="1" />
    <circle cx="18" cy="17" r="4" fill="#10B981" />
    <text x="30" y="21" fill="#F8FAFC" font-family="'Fira Code', Consolas, monospace" font-size="10" font-weight="700">STATUS: OPEN TO ROLES • VERIFIED</text>
    
    <text x="330" y="58" fill="#60A5FA" font-family="'Fira Code', Consolas, monospace" font-size="9" text-anchor="end">github.com/Sawan017 • sawansahani017@gmail.com</text>
    <text x="330" y="74" fill="#94A3B8" font-family="'Fira Code', Consolas, monospace" font-size="8.5" text-anchor="end">EARTH • TIMEZONE UTC+05:30</text>
  </g>
</svg>`;
}

// -----------------------------------------------------------------------------
// 9. Clean Section Dividers
// -----------------------------------------------------------------------------
function generateDivider() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 16" width="1200" height="16">
  <line x1="0" y1="8" x2="540" y2="8" stroke="#22304A" stroke-width="1" />
  <circle cx="570" cy="8" r="2.5" fill="#3B82F6" />
  <polygon points="600,4 604,8 600,12 596,8" fill="#60A5FA" />
  <circle cx="630" cy="8" r="2.5" fill="#3B82F6" />
  <line x1="660" y1="8" x2="1200" y2="8" stroke="#22304A" stroke-width="1" />
</svg>`;
}

// Write files
fs.writeFileSync(path.join(ASSETS_DIR, 'hero.svg'), generateAnimatedHero());
fs.writeFileSync(path.join(ASSETS_DIR, 'about.svg'), generateAboutSection());
fs.writeFileSync(path.join(ASSETS_DIR, 'project-1-arinova.svg'), generateProject1Arinova());
fs.writeFileSync(path.join(ASSETS_DIR, 'project-arinova.svg'), generateProject1Arinova());
fs.writeFileSync(path.join(ASSETS_DIR, 'project-2-sourca.svg'), generateProject2Sourca());
fs.writeFileSync(path.join(ASSETS_DIR, 'project-sourca.svg'), generateProject2Sourca());
fs.writeFileSync(path.join(ASSETS_DIR, 'project-3-codeascend.svg'), generateProject3CodeAscend());
fs.writeFileSync(path.join(ASSETS_DIR, 'project-codeascend.svg'), generateProject3CodeAscend());
fs.writeFileSync(path.join(ASSETS_DIR, 'project-4-dsa.svg'), generateProject4DSA());
fs.writeFileSync(path.join(ASSETS_DIR, 'project-dsa.svg'), generateProject4DSA());
fs.writeFileSync(path.join(ASSETS_DIR, 'footer.svg'), generateFooterBanner());
fs.writeFileSync(path.join(ASSETS_DIR, 'divider.svg'), generateDivider());

console.log('All royal dark animated SVG assets generated successfully.');
