const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, 'assets');

const idPngPath = path.join(ASSETS_DIR, 'id.png');
const pointingPngPath = path.join(ASSETS_DIR, 'right_pointing.png');

const idBase64 = `data:image/png;base64,${fs.readFileSync(idPngPath).toString('base64')}`;
const pointingBase64 = `data:image/png;base64,${fs.readFileSync(pointingPngPath).toString('base64')}`;

// 1. assets/hero.svg (1200 x 460)
function generateHeroSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 460" width="1200" height="460">
  <defs>
    <linearGradient id="hero-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070B16" />
      <stop offset="50%" stop-color="#0A1020" />
      <stop offset="100%" stop-color="#050811" />
    </linearGradient>

    <linearGradient id="blue-crimson" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#247BFF" />
      <stop offset="100%" stop-color="#FF354F" />
    </linearGradient>

    <pattern id="dot-grid" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="12" cy="12" r="1" fill="#1C2B4B" opacity="0.6" />
    </pattern>

    <clipPath id="name-mask">
      <rect x="0" y="0" width="700" height="70" />
    </clipPath>

    <clipPath id="portrait-clip">
      <rect x="0" y="0" width="240" height="290" rx="14" />
    </clipPath>

    <clipPath id="hero-card-clip">
      <rect x="0.5" y="0.5" width="1199" height="459" rx="16" />
    </clipPath>

    <style>
      @keyframes riseUp {
        0% { transform: translateY(60px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
      .name-reveal {
        animation: riseUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      @keyframes role1 {
        0%, 25% { opacity: 1; transform: translateY(0); }
        28%, 100% { opacity: 0; transform: translateY(-8px); }
      }
      @keyframes role2 {
        0%, 25% { opacity: 0; transform: translateY(8px); }
        28%, 50% { opacity: 1; transform: translateY(0); }
        53%, 100% { opacity: 0; transform: translateY(-8px); }
      }
      @keyframes role3 {
        0%, 50% { opacity: 0; transform: translateY(8px); }
        53%, 75% { opacity: 1; transform: translateY(0); }
        78%, 100% { opacity: 0; transform: translateY(-8px); }
      }
      @keyframes role4 {
        0%, 75% { opacity: 0; transform: translateY(8px); }
        78%, 98% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-8px); }
      }
      .role-1 { animation: role1 12s infinite; }
      .role-2 { animation: role2 12s infinite; }
      .role-3 { animation: role3 12s infinite; }
      .role-4 { animation: role4 12s infinite; }

      @keyframes scanLine {
        0% { transform: translateY(-100px); opacity: 0; }
        20% { opacity: 0.7; }
        80% { opacity: 0.7; }
        100% { transform: translateY(460px); opacity: 0; }
      }
      .scanner-beam {
        animation: scanLine 8s ease-in-out infinite;
      }

      @keyframes beaconPulse {
        0%, 100% { opacity: 0.5; r: 3.5px; }
        50% { opacity: 1; r: 5px; }
      }
      .beacon { animation: beaconPulse 2s ease-in-out infinite; }

      @media (prefers-reduced-motion: reduce) {
        .name-reveal, .role-1, .scanner-beam, .beacon { animation: none !important; }
        .role-1 { opacity: 1 !important; transform: none !important; }
        .role-2, .role-3, .role-4 { display: none !important; }
      }
    </style>
  </defs>

  <g clip-path="url(#hero-card-clip)">
    <rect width="1200" height="460" fill="url(#hero-bg)" />
    <rect width="1200" height="460" fill="url(#dot-grid)" opacity="0.8" />

    <rect x="0.5" y="0.5" width="1199" height="459" rx="16" fill="none" stroke="#1C2B4B" stroke-width="1.2" />
    <line x1="20" y1="1" x2="300" y2="1" stroke="#247BFF" stroke-width="2" />
    <line x1="300" y1="1" x2="420" y2="1" stroke="#FF354F" stroke-width="2" />

    <g class="scanner-beam">
      <line x1="0" y1="0" x2="1200" y2="0" stroke="#247BFF" stroke-width="1.5" opacity="0.4" />
      <rect x="0" y="-12" width="1200" height="24" fill="#247BFF" opacity="0.04" />
    </g>

    <path d="M 24 38 L 38 38 L 38 24" fill="none" stroke="#247BFF" stroke-width="1.5" />
    <path d="M 1176 38 L 1162 38 L 1162 24" fill="none" stroke="#1C2B4B" stroke-width="1.5" />
    <path d="M 24 422 L 38 422 L 38 436" fill="none" stroke="#1C2B4B" stroke-width="1.5" />
    <path d="M 1176 422 L 1162 422 L 1162 436" fill="none" stroke="#FF354F" stroke-width="1.5" />

    <g transform="translate(64, 46)">
      <g transform="translate(0, 0)">
        <rect width="250" height="26" rx="13" fill="#0D1322" stroke="#1C2B4B" stroke-width="0.8" />
        <circle cx="14" cy="13" r="4" fill="#00E676" class="beacon" />
        <text x="28" y="17" fill="#247BFF" font-family="'Fira Code', Consolas, monospace" font-size="11" font-weight="700">~ /sawan $ echo $GREETING</text>
      </g>

      <g transform="translate(0, 42)" clip-path="url(#name-mask)">
        <g class="name-reveal">
          <text x="0" y="58" fill="#F0F6FC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="900" letter-spacing="-1.2">
            Sawan <tspan fill="#247BFF">Sahani.</tspan>
          </text>
        </g>
      </g>

      <g transform="translate(0, 142)">
        <text x="0" y="0" fill="#FF354F" font-family="'Fira Code', Consolas, monospace" font-size="12" font-weight="700">&gt;</text>
        
        <g class="role-1">
          <text x="18" y="0" fill="#E6EDF3" font-family="'Fira Code', Consolas, monospace" font-size="15" font-weight="600">CSE Undergraduate &amp; Systems Developer</text>
        </g>
        <g class="role-2">
          <text x="18" y="0" fill="#247BFF" font-family="'Fira Code', Consolas, monospace" font-size="15" font-weight="600">Full-Stack Software Engineer</text>
        </g>
        <g class="role-3">
          <text x="18" y="0" fill="#E6EDF3" font-family="'Fira Code', Consolas, monospace" font-size="15" font-weight="600">C++20 Algorithmic &amp; DSA Specialist</text>
        </g>
        <g class="role-4">
          <text x="18" y="0" fill="#FF354F" font-family="'Fira Code', Consolas, monospace" font-size="15" font-weight="600">Interactive 3D &amp; Web Realm Architect</text>
        </g>
      </g>

      <g transform="translate(0, 180)">
        <text x="0" y="0" fill="#8B949E" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="400">
          <tspan x="0" dy="0">Building useful software, strengthening DSA, and learning full-stack engineering.</tspan>
          <tspan x="0" dy="24">Architecting resilient web ecosystems and mastering rigorous asymptotic problem-solving.</tspan>
        </text>
      </g>

      <g transform="translate(0, 244)">
        <rect x="0" y="0" width="186" height="58" rx="8" fill="#0D1322" stroke="#1C2B4B" stroke-width="1" />
        <circle cx="16" cy="18" r="3.5" fill="#247BFF" />
        <text x="28" y="22" fill="#F0F6FC" font-family="-apple-system, sans-serif" font-size="12" font-weight="700">Modern Web &amp; 3D</text>
        <text x="16" y="42" fill="#8B949E" font-family="-apple-system, sans-serif" font-size="10.5">Next.js 16 • React 19 • Three.js</text>

        <rect x="200" y="0" width="186" height="58" rx="8" fill="#0D1322" stroke="#1C2B4B" stroke-width="1" />
        <circle cx="216" cy="18" r="3.5" fill="#FF354F" />
        <text x="228" y="22" fill="#F0F6FC" font-family="-apple-system, sans-serif" font-size="12" font-weight="700">Algorithmic Rigor</text>
        <text x="216" y="42" fill="#8B949E" font-family="-apple-system, sans-serif" font-size="10.5">C++20 STL • LeetCode &amp; CP</text>

        <rect x="400" y="0" width="186" height="58" rx="8" fill="#0D1322" stroke="#1C2B4B" stroke-width="1" />
        <circle cx="416" cy="18" r="3.5" fill="#247BFF" />
        <text x="428" y="22" fill="#F0F6FC" font-family="-apple-system, sans-serif" font-size="12" font-weight="700">Cloud &amp; Persistence</text>
        <text x="416" y="42" fill="#8B949E" font-family="-apple-system, sans-serif" font-size="10.5">Supabase • PostgreSQL • REST</text>
      </g>

      <g transform="translate(0, 332)">
        <rect width="586" height="34" rx="6" fill="#080D1A" stroke="#1C2B4B" stroke-width="0.8" />
        <text x="16" y="21" fill="#247BFF" font-family="'Fira Code', Consolas, monospace" font-size="10.5" font-weight="700">VERIFIED &gt;</text>
        <text x="96" y="21" fill="#E6EDF3" font-family="'Fira Code', Consolas, monospace" font-size="10.5">CSE UNDERGRADUATE • @SAWAN017 • INDIA (UTC+05:30)</text>
      </g>
    </g>

    <g transform="translate(860, 56)">
      <rect x="-1" y="-1" width="272" height="332" rx="16" fill="none" stroke="url(#blue-crimson)" stroke-width="1.8" />
      <rect x="0" y="0" width="270" height="330" rx="15" fill="#0D1322" />

      <g transform="translate(15, 15)">
        <rect width="240" height="300" rx="12" fill="#070B16" stroke="#1C2B4B" stroke-width="1" />
        <circle cx="120" cy="140" r="100" fill="#247BFF" opacity="0.12" />

        <g clip-path="url(#portrait-clip)">
          <image href="${idBase64}" x="-15" y="-10" width="270" height="310" preserveAspectRatio="xMidYMid slice" />
        </g>
      </g>

      <g transform="translate(45, 305)">
        <rect width="180" height="24" rx="12" fill="#070B16" stroke="#247BFF" stroke-width="0.8" />
        <circle cx="14" cy="12" r="3.5" fill="#00E676" />
        <text x="26" y="16" fill="#F0F6FC" font-family="'Fira Code', Consolas, monospace" font-size="9.5" font-weight="700">VERIFIED ID: @SAWAN017</text>
      </g>
    </g>
  </g>
</svg>`;
}

// 2. assets/about-life.svg (1200 x 360)
function generateAboutLifeSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 360" width="1200" height="360">
  <defs>
    <linearGradient id="about-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070B16" />
      <stop offset="100%" stop-color="#090F1E" />
    </linearGradient>
    <pattern id="dot-grid-about" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="12" cy="12" r="1" fill="#1C2B4B" opacity="0.5" />
    </pattern>

    <style>
      @keyframes slide1Anim {
        0%, 30% { opacity: 1; transform: translateX(0); }
        33.3%, 97% { opacity: 0; transform: translateX(-12px); }
        100% { opacity: 1; transform: translateX(0); }
      }
      @keyframes slide2Anim {
        0%, 30% { opacity: 0; transform: translateX(12px); }
        33.3%, 63% { opacity: 1; transform: translateX(0); }
        66.6%, 100% { opacity: 0; transform: translateX(-12px); }
      }
      @keyframes slide3Anim {
        0%, 63% { opacity: 0; transform: translateX(12px); }
        66.6%, 97% { opacity: 1; transform: translateX(0); }
        100% { opacity: 0; transform: translateX(12px); }
      }
      .slide-1 { animation: slide1Anim 12s infinite; }
      .slide-2 { animation: slide2Anim 12s infinite; }
      .slide-3 { animation: slide3Anim 12s infinite; }

      @keyframes prog1 {
        0% { width: 0px; }
        30% { width: 160px; }
        33.3%, 100% { width: 160px; }
      }
      @keyframes prog2 {
        0%, 33.3% { width: 0px; }
        63% { width: 160px; }
        66.6%, 100% { width: 160px; }
      }
      @keyframes prog3 {
        0%, 66.6% { width: 0px; }
        97% { width: 160px; }
        100% { width: 160px; }
      }
      .prog-bar-1 { animation: prog1 12s infinite; }
      .prog-bar-2 { animation: prog2 12s infinite; }
      .prog-bar-3 { animation: prog3 12s infinite; }

      @media (prefers-reduced-motion: reduce) {
        .slide-1 { opacity: 1 !important; transform: none !important; animation: none !important; }
        .slide-2, .slide-3 { display: none !important; }
        .prog-bar-1, .prog-bar-2, .prog-bar-3 { animation: none !important; width: 160px !important; }
      }
    </style>
  </defs>

  <rect x="0.5" y="0.5" width="1199" height="359" rx="16" fill="url(#about-bg)" stroke="#1C2B4B" stroke-width="1.2" />
  <rect width="1200" height="360" fill="url(#dot-grid-about)" opacity="0.6" rx="16" />
  <line x1="20" y1="1" x2="260" y2="1" stroke="#247BFF" stroke-width="2" />

  <!-- LEFT: Core Capabilities -->
  <g transform="translate(48, 36)">
    <text x="0" y="0" fill="#247BFF" font-family="'Fira Code', Consolas, monospace" font-size="11" font-weight="700" letter-spacing="1.5">CAPABILITIES &amp; CORE DISCIPLINES</text>
    <text x="0" y="28" fill="#F0F6FC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="800">
      Engineered for Resilience.
    </text>

    <g transform="translate(0, 52)">
      <rect width="490" height="66" rx="8" fill="#0D1322" stroke="#1C2B4B" stroke-width="1" />
      <text x="18" y="24" fill="#247BFF" font-family="'Fira Code', Consolas, monospace" font-size="10.5" font-weight="700">01 / SYSTEMS ARCHITECTURE</text>
      <text x="18" y="46" fill="#E6EDF3" font-family="-apple-system, sans-serif" font-size="12.5" font-weight="600">Next.js 16 • React 19 • TypeScript • Supabase</text>
      <text x="472" y="38" fill="#8B949E" font-family="'Fira Code', monospace" font-size="10" text-anchor="end">FULL-STACK</text>
    </g>

    <g transform="translate(0, 130)">
      <rect width="490" height="66" rx="8" fill="#0D1322" stroke="#1C2B4B" stroke-width="1" />
      <text x="18" y="24" fill="#FF354F" font-family="'Fira Code', Consolas, monospace" font-size="10.5" font-weight="700">02 / ASYMPTOTIC RIGOR</text>
      <text x="18" y="46" fill="#E6EDF3" font-family="-apple-system, sans-serif" font-size="12.5" font-weight="600">C++20 Standard • Data Structures • Graph Algorithms</text>
      <text x="472" y="38" fill="#8B949E" font-family="'Fira Code', monospace" font-size="10" text-anchor="end">DSA / CP</text>
    </g>

    <g transform="translate(0, 208)">
      <rect width="490" height="66" rx="8" fill="#0D1322" stroke="#1C2B4B" stroke-width="1" />
      <text x="18" y="24" fill="#247BFF" font-family="'Fira Code', Consolas, monospace" font-size="10.5" font-weight="700">03 / INTERACTIVE 3D WEB</text>
      <text x="18" y="46" fill="#E6EDF3" font-family="-apple-system, sans-serif" font-size="12.5" font-weight="600">Three.js • React Three Fiber • Gamified Realms</text>
      <text x="472" y="38" fill="#8B949E" font-family="'Fira Code', monospace" font-size="10" text-anchor="end">3D / UX</text>
    </g>
  </g>

  <line x1="575" y1="36" x2="575" y2="320" stroke="#1C2B4B" stroke-width="1" stroke-dasharray="3 3" />

  <!-- RIGHT: 3-Slide Interests Carousel -->
  <g transform="translate(615, 36)">
    <text x="0" y="0" fill="#247BFF" font-family="'Fira Code', Consolas, monospace" font-size="11" font-weight="700" letter-spacing="1.5">INTERESTS &amp; LEARNING PROGRESSION</text>

    <g transform="translate(0, 16)">
      <rect x="0" y="0" width="160" height="4" rx="2" fill="#1C2B4B" />
      <rect x="0" y="0" width="0" height="4" rx="2" fill="#247BFF" class="prog-bar-1" />

      <rect x="185" y="0" width="160" height="4" rx="2" fill="#1C2B4B" />
      <rect x="185" y="0" width="0" height="4" rx="2" fill="#FF354F" class="prog-bar-2" />

      <rect x="370" y="0" width="160" height="4" rx="2" fill="#1C2B4B" />
      <rect x="370" y="0" width="0" height="4" rx="2" fill="#247BFF" class="prog-bar-3" />
    </g>

    <g transform="translate(0, 36)">
      <rect width="536" height="236" rx="12" fill="#0D1322" stroke="#1C2B4B" stroke-width="1.2" />

      <!-- Slide 1 -->
      <g class="slide-1" transform="translate(24, 28)">
        <text x="0" y="0" fill="#247BFF" font-family="'Fira Code', Consolas, monospace" font-size="11" font-weight="700">01 // ARCHITECTING FULL-STACK REALMS</text>
        <text x="0" y="32" fill="#F0F6FC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="800">
          Clean Code &amp; Scalable Schemas
        </text>
        <text x="0" y="66" fill="#8B949E" font-family="-apple-system, sans-serif" font-size="13.5">
          <tspan x="0" dy="0">Designing production-grade platforms with strict typing, reactive state trees,</tspan>
          <tspan x="0" dy="22">and defensive cloud database modeling with Row Level Security (RLS).</tspan>
          <tspan x="0" dy="22">Focused on high-performance APIs and clean separation of concerns.</tspan>
        </text>
        
        <g transform="translate(0, 140)">
          <rect width="488" height="30" rx="4" fill="#070B16" stroke="#1C2B4B" stroke-width="0.8" />
          <text x="14" y="19" fill="#247BFF" font-family="'Fira Code', monospace" font-size="10.5">FOCUS: Next.js App Router • Supabase SSR • Tailwind • REST</text>
        </g>
      </g>

      <!-- Slide 2 -->
      <g class="slide-2" transform="translate(24, 28)">
        <text x="0" y="0" fill="#FF354F" font-family="'Fira Code', Consolas, monospace" font-size="11" font-weight="700">02 // ALGORITHMIC OPTIMIZATION &amp; DSA</text>
        <text x="0" y="32" fill="#F0F6FC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="800">
          Rigorous Asymptotics in C++20
        </text>
        <text x="0" y="66" fill="#8B949E" font-family="-apple-system, sans-serif" font-size="13.5">
          <tspan x="0" dy="0">Practicing competitive problem-solving on LeetCode and Codeforces</tspan>
          <tspan x="0" dy="22">with strict runtime and memory efficiency. Implementing advanced data</tspan>
          <tspan x="0" dy="22">structures: segment trees, Fenwick trees, and graph algorithms.</tspan>
        </text>

        <g transform="translate(0, 140)">
          <rect width="488" height="30" rx="4" fill="#070B16" stroke="#1C2B4B" stroke-width="0.8" />
          <text x="14" y="19" fill="#FF354F" font-family="'Fira Code', monospace" font-size="10.5">FOCUS: C++20 STL • Graphs • Dynamic Programming • Math</text>
        </g>
      </g>

      <!-- Slide 3 -->
      <g class="slide-3" transform="translate(24, 28)">
        <text x="0" y="0" fill="#247BFF" font-family="'Fira Code', Consolas, monospace" font-size="11" font-weight="700">03 // INTERACTIVE 3D &amp; DEVELOPER RPG</text>
        <text x="0" y="32" fill="#F0F6FC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="800">
          Gamified Progression &amp; 3D Web
        </text>
        <text x="0" y="66" fill="#8B949E" font-family="-apple-system, sans-serif" font-size="13.5">
          <tspan x="0" dy="0">Exploring spatial developer UX using Three.js and React Three Fiber.</tspan>
          <tspan x="0" dy="22">Architecting ARINOVA, an interactive 3D universe where real coding milestones,</tspan>
          <tspan x="0" dy="22">in-browser Monaco IDE execution, and skill progression come alive.</tspan>
        </text>

        <g transform="translate(0, 140)">
          <rect width="488" height="30" rx="4" fill="#070B16" stroke="#1C2B4B" stroke-width="0.8" />
          <text x="14" y="19" fill="#247BFF" font-family="'Fira Code', monospace" font-size="10.5">FOCUS: Three.js • R3F • Monaco Code Sandboxing • Realtime</text>
        </g>
      </g>
    </g>
  </g>
</svg>`;
}

// 3. assets/stack.svg (1200 x 380)
function generateStackSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 380" width="1200" height="380">
  <defs>
    <linearGradient id="stack-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070B16" />
      <stop offset="100%" stop-color="#0A1020" />
    </linearGradient>

    <style>
      @keyframes orbitOuter {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes orbitMiddle {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
      }
      @keyframes orbitInner {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes counterOuter {
        from { transform: rotate(0deg); }
        to { transform: rotate(-360deg); }
      }
      @keyframes counterMiddle {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes counterInner {
        from { transform: rotate(0deg); }
        to { transform: rotate(-360deg); }
      }

      .orbit-3 {
        transform-origin: 270px 190px;
        animation: orbitOuter 26s linear infinite;
      }
      .orbit-2 {
        transform-origin: 270px 190px;
        animation: orbitMiddle 18s linear infinite;
      }
      .orbit-1 {
        transform-origin: 270px 190px;
        animation: orbitInner 12s linear infinite;
      }
      .counter-3 { animation: counterOuter 26s linear infinite; }
      .counter-2 { animation: counterMiddle 18s linear infinite; }
      .counter-1 { animation: counterInner 12s linear infinite; }

      @media (prefers-reduced-motion: reduce) {
        .orbit-1, .orbit-2, .orbit-3, .counter-1, .counter-2, .counter-3 {
          animation: none !important;
        }
      }
    </style>
  </defs>

  <rect x="0.5" y="0.5" width="1199" height="379" rx="16" fill="url(#stack-bg)" stroke="#1C2B4B" stroke-width="1.2" />
  <line x1="20" y1="1" x2="260" y2="1" stroke="#247BFF" stroke-width="2" />

  <g transform="translate(0, 0)">
    <text x="270" y="38" fill="#247BFF" font-family="'Fira Code', Consolas, monospace" font-size="11" font-weight="700" letter-spacing="1.5" text-anchor="middle">
      HARMONIC ORBITAL ARCHITECTURE
    </text>

    <circle cx="270" cy="190" r="32" fill="#0D1322" stroke="#247BFF" stroke-width="1.5" />
    <circle cx="270" cy="190" r="28" fill="#070B16" />
    <text x="270" y="186" fill="#F0F6FC" font-family="-apple-system, sans-serif" font-size="11" font-weight="800" text-anchor="middle">SAWAN</text>
    <text x="270" y="198" fill="#247BFF" font-family="'Fira Code', monospace" font-size="8.5" font-weight="700" text-anchor="middle">DEV CORE</text>

    <!-- Orbit 1: Inner (Radius 75) -->
    <circle cx="270" cy="190" r="75" fill="none" stroke="#1C2B4B" stroke-width="1" stroke-dasharray="3 3" />
    <g class="orbit-1">
      <g transform="translate(345, 190)">
        <g class="counter-1">
          <circle cx="0" cy="0" r="15" fill="#0D1322" stroke="#247BFF" stroke-width="1.2" />
          <text x="0" y="4" fill="#F0F6FC" font-family="'Fira Code', monospace" font-size="8.5" font-weight="700" text-anchor="middle">C++</text>
        </g>
      </g>
      <g transform="translate(232, 255)">
        <g class="counter-1">
          <circle cx="0" cy="0" r="15" fill="#0D1322" stroke="#247BFF" stroke-width="1.2" />
          <text x="0" y="4" fill="#F0F6FC" font-family="'Fira Code', monospace" font-size="8.5" font-weight="700" text-anchor="middle">TS</text>
        </g>
      </g>
      <g transform="translate(232, 125)">
        <g class="counter-1">
          <circle cx="0" cy="0" r="15" fill="#0D1322" stroke="#247BFF" stroke-width="1.2" />
          <text x="0" y="4" fill="#F0F6FC" font-family="'Fira Code', monospace" font-size="8.5" font-weight="700" text-anchor="middle">JS</text>
        </g>
      </g>
    </g>

    <!-- Orbit 2: Middle (Radius 130) -->
    <circle cx="270" cy="190" r="130" fill="none" stroke="#1C2B4B" stroke-width="1" stroke-dasharray="4 4" />
    <g class="orbit-2">
      <g transform="translate(335, 302)">
        <g class="counter-2">
          <circle cx="0" cy="0" r="16" fill="#0D1322" stroke="#247BFF" stroke-width="1.2" />
          <text x="0" y="4" fill="#F0F6FC" font-family="'Fira Code', monospace" font-size="8" font-weight="700" text-anchor="middle">REACT</text>
        </g>
      </g>
      <g transform="translate(140, 190)">
        <g class="counter-2">
          <circle cx="0" cy="0" r="16" fill="#0D1322" stroke="#247BFF" stroke-width="1.2" />
          <text x="0" y="4" fill="#F0F6FC" font-family="'Fira Code', monospace" font-size="8" font-weight="700" text-anchor="middle">NEXT</text>
        </g>
      </g>
      <g transform="translate(335, 78)">
        <g class="counter-2">
          <circle cx="0" cy="0" r="16" fill="#0D1322" stroke="#247BFF" stroke-width="1.2" />
          <text x="0" y="4" fill="#F0F6FC" font-family="'Fira Code', monospace" font-size="8" font-weight="700" text-anchor="middle">THREE</text>
        </g>
      </g>
    </g>

    <!-- Orbit 3: Outer (Radius 180) -->
    <circle cx="270" cy="190" r="180" fill="none" stroke="#1C2B4B" stroke-width="1" stroke-dasharray="5 5" opacity="0.8" />
    <g class="orbit-3">
      <g transform="translate(425, 280)">
        <g class="counter-3">
          <circle cx="0" cy="0" r="16" fill="#0D1322" stroke="#FF354F" stroke-width="1.2" />
          <text x="0" y="4" fill="#F0F6FC" font-family="'Fira Code', monospace" font-size="7.5" font-weight="700" text-anchor="middle">SUPA</text>
        </g>
      </g>
      <g transform="translate(115, 280)">
        <g class="counter-3">
          <circle cx="0" cy="0" r="16" fill="#0D1322" stroke="#FF354F" stroke-width="1.2" />
          <text x="0" y="4" fill="#F0F6FC" font-family="'Fira Code', monospace" font-size="7.5" font-weight="700" text-anchor="middle">POSTG</text>
        </g>
      </g>
      <g transform="translate(270, 10)">
        <g class="counter-3">
          <circle cx="0" cy="0" r="16" fill="#0D1322" stroke="#FF354F" stroke-width="1.2" />
          <text x="0" y="4" fill="#F0F6FC" font-family="'Fira Code', monospace" font-size="8" font-weight="700" text-anchor="middle">GIT</text>
        </g>
      </g>
    </g>
  </g>

  <line x1="560" y1="36" x2="560" y2="340" stroke="#1C2B4B" stroke-width="1" stroke-dasharray="3 3" />

  <!-- RIGHT: Grouped Stack Chips -->
  <g transform="translate(600, 36)">
    <text x="0" y="0" fill="#247BFF" font-family="'Fira Code', Consolas, monospace" font-size="11" font-weight="700" letter-spacing="1.5">VERIFIED TECHNOLOGY STACK</text>
    <text x="0" y="26" fill="#F0F6FC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="800">
      Production Tools &amp; Core Disciplines
    </text>

    <!-- Group 1: Languages and Core CS -->
    <g transform="translate(0, 48)">
      <text x="0" y="0" fill="#8B949E" font-family="'Fira Code', monospace" font-size="10" font-weight="700">01 / LANGUAGES &amp; CORE</text>
      <g transform="translate(0, 8)">
        <rect x="0" y="0" width="70" height="26" rx="4" fill="#0D1322" stroke="#247BFF" stroke-width="1" />
        <text x="35" y="17" fill="#F0F6FC" font-family="'Fira Code', monospace" font-size="11" font-weight="700" text-anchor="middle">C++20</text>

        <rect x="78" y="0" width="96" height="26" rx="4" fill="#0D1322" stroke="#1C2B4B" stroke-width="0.8" />
        <text x="126" y="17" fill="#E6EDF3" font-family="'Fira Code', monospace" font-size="11" font-weight="600" text-anchor="middle">TypeScript</text>

        <rect x="182" y="0" width="96" height="26" rx="4" fill="#0D1322" stroke="#1C2B4B" stroke-width="0.8" />
        <text x="230" y="17" fill="#E6EDF3" font-family="'Fira Code', monospace" font-size="11" font-weight="600" text-anchor="middle">JavaScript</text>

        <rect x="286" y="0" width="72" height="26" rx="4" fill="#0D1322" stroke="#1C2B4B" stroke-width="0.8" />
        <text x="322" y="17" fill="#E6EDF3" font-family="'Fira Code', monospace" font-size="11" font-weight="600" text-anchor="middle">Python</text>

        <rect x="366" y="0" width="56" height="26" rx="4" fill="#0D1322" stroke="#1C2B4B" stroke-width="0.8" />
        <text x="394" y="17" fill="#E6EDF3" font-family="'Fira Code', monospace" font-size="11" font-weight="600" text-anchor="middle">SQL</text>
      </g>
    </g>

    <!-- Group 2: Frontend and 3D -->
    <g transform="translate(0, 114)">
      <text x="0" y="0" fill="#8B949E" font-family="'Fira Code', monospace" font-size="10" font-weight="700">02 / FRONTEND &amp; 3D REALMS</text>
      <g transform="translate(0, 8)">
        <rect x="0" y="0" width="82" height="26" rx="4" fill="#0D1322" stroke="#1C2B4B" stroke-width="0.8" />
        <text x="41" y="17" fill="#E6EDF3" font-family="'Fira Code', monospace" font-size="11" font-weight="600" text-anchor="middle">React 19</text>

        <rect x="90" y="0" width="86" height="26" rx="4" fill="#0D1322" stroke="#1C2B4B" stroke-width="0.8" />
        <text x="133" y="17" fill="#E6EDF3" font-family="'Fira Code', monospace" font-size="11" font-weight="600" text-anchor="middle">Next.js 16</text>

        <rect x="184" y="0" width="80" height="26" rx="4" fill="#0D1322" stroke="#1C2B4B" stroke-width="0.8" />
        <text x="224" y="17" fill="#E6EDF3" font-family="'Fira Code', monospace" font-size="11" font-weight="600" text-anchor="middle">Three.js</text>

        <rect x="272" y="0" width="56" height="26" rx="4" fill="#0D1322" stroke="#1C2B4B" stroke-width="0.8" />
        <text x="300" y="17" fill="#E6EDF3" font-family="'Fira Code', monospace" font-size="11" font-weight="600" text-anchor="middle">R3F</text>

        <rect x="336" y="0" width="100" height="26" rx="4" fill="#0D1322" stroke="#1C2B4B" stroke-width="0.8" />
        <text x="386" y="17" fill="#E6EDF3" font-family="'Fira Code', monospace" font-size="11" font-weight="600" text-anchor="middle">Tailwind CSS</text>

        <rect x="444" y="0" width="108" height="26" rx="4" fill="#0D1322" stroke="#1C2B4B" stroke-width="0.8" />
        <text x="498" y="17" fill="#E6EDF3" font-family="'Fira Code', monospace" font-size="11" font-weight="600" text-anchor="middle">Monaco Editor</text>
      </g>
    </g>

    <!-- Group 3: Backend and Cloud Persistence -->
    <g transform="translate(0, 180)">
      <text x="0" y="0" fill="#8B949E" font-family="'Fira Code', monospace" font-size="10" font-weight="700">03 / BACKEND &amp; CLOUD DATABASE</text>
      <g transform="translate(0, 8)">
        <rect x="0" y="0" width="76" height="26" rx="4" fill="#0D1322" stroke="#1C2B4B" stroke-width="0.8" />
        <text x="38" y="17" fill="#E6EDF3" font-family="'Fira Code', monospace" font-size="11" font-weight="600" text-anchor="middle">Node.js</text>

        <rect x="84" y="0" width="86" height="26" rx="4" fill="#0D1322" stroke="#1C2B4B" stroke-width="0.8" />
        <text x="127" y="17" fill="#E6EDF3" font-family="'Fira Code', monospace" font-size="11" font-weight="600" text-anchor="middle">Supabase</text>

        <rect x="178" y="0" width="96" height="26" rx="4" fill="#0D1322" stroke="#1C2B4B" stroke-width="0.8" />
        <text x="226" y="17" fill="#E6EDF3" font-family="'Fira Code', monospace" font-size="11" font-weight="600" text-anchor="middle">PostgreSQL</text>

        <rect x="282" y="0" width="96" height="26" rx="4" fill="#0D1322" stroke="#1C2B4B" stroke-width="0.8" />
        <text x="330" y="17" fill="#E6EDF3" font-family="'Fira Code', monospace" font-size="11" font-weight="600" text-anchor="middle">RESTful APIs</text>

        <rect x="386" y="0" width="112" height="26" rx="4" fill="#0D1322" stroke="#1C2B4B" stroke-width="0.8" />
        <text x="442" y="17" fill="#E6EDF3" font-family="'Fira Code', monospace" font-size="11" font-weight="600" text-anchor="middle">Google GenAI</text>
      </g>
    </g>

    <!-- Group 4: Workflow and Engineering Tools -->
    <g transform="translate(0, 246)">
      <text x="0" y="0" fill="#8B949E" font-family="'Fira Code', monospace" font-size="10" font-weight="700">04 / WORKFLOW &amp; TOOLS</text>
      <g transform="translate(0, 8)">
        <rect x="0" y="0" width="56" height="26" rx="4" fill="#0D1322" stroke="#1C2B4B" stroke-width="0.8" />
        <text x="28" y="17" fill="#E6EDF3" font-family="'Fira Code', monospace" font-size="11" font-weight="600" text-anchor="middle">Git</text>

        <rect x="64" y="0" width="118" height="26" rx="4" fill="#0D1322" stroke="#1C2B4B" stroke-width="0.8" />
        <text x="123" y="17" fill="#E6EDF3" font-family="'Fira Code', monospace" font-size="11" font-weight="600" text-anchor="middle">GitHub Actions</text>

        <rect x="190" y="0" width="66" height="26" rx="4" fill="#0D1322" stroke="#1C2B4B" stroke-width="0.8" />
        <text x="223" y="17" fill="#E6EDF3" font-family="'Fira Code', monospace" font-size="11" font-weight="600" text-anchor="middle">Linux</text>

        <rect x="264" y="0" width="78" height="26" rx="4" fill="#0D1322" stroke="#1C2B4B" stroke-width="0.8" />
        <text x="303" y="17" fill="#E6EDF3" font-family="'Fira Code', monospace" font-size="11" font-weight="600" text-anchor="middle">Postman</text>

        <rect x="350" y="0" width="60" height="26" rx="4" fill="#0D1322" stroke="#1C2B4B" stroke-width="0.8" />
        <text x="380" y="17" fill="#E6EDF3" font-family="'Fira Code', monospace" font-size="11" font-weight="600" text-anchor="middle">Vite</text>

        <rect x="418" y="0" width="70" height="26" rx="4" fill="#0D1322" stroke="#1C2B4B" stroke-width="0.8" />
        <text x="453" y="17" fill="#E6EDF3" font-family="'Fira Code', monospace" font-size="11" font-weight="600" text-anchor="middle">Docker</text>
      </g>
    </g>
  </g>
</svg>`;
}

// 4. assets/id-dashboard.svg (1200 x 420)
function generateIdDashboardSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 420" width="1200" height="420">
  <defs>
    <linearGradient id="id-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070B16" />
      <stop offset="100%" stop-color="#0A1020" />
    </linearGradient>

    <linearGradient id="metal-clasp" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#334155" />
      <stop offset="50%" stop-color="#94A3B8" />
      <stop offset="100%" stop-color="#334155" />
    </linearGradient>

    <linearGradient id="foil-sheen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#247BFF" stop-opacity="0" />
      <stop offset="45%" stop-color="#247BFF" stop-opacity="0.04" />
      <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.18" />
      <stop offset="55%" stop-color="#FF354F" stop-opacity="0.04" />
      <stop offset="100%" stop-color="#FF354F" stop-opacity="0" />
    </linearGradient>

    <clipPath id="badge-portrait-clip">
      <rect x="0" y="0" width="200" height="175" rx="8" />
    </clipPath>

    <clipPath id="lanyard-card-clip">
      <rect x="0" y="0" width="260" height="340" rx="14" />
    </clipPath>

    <style>
      @keyframes lanyardSwing {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(1.7deg); }
        50% { transform: rotate(0deg); }
        75% { transform: rotate(-1.7deg); }
        100% { transform: rotate(0deg); }
      }
      .hanging-assembly {
        transform-origin: 980px 0px;
        animation: lanyardSwing 5s ease-in-out infinite;
      }

      @keyframes foilSweep {
        0% { transform: translateX(-300px); }
        100% { transform: translateX(350px); }
      }
      .foil-sweep-layer {
        animation: foilSweep 6s ease-in-out infinite;
      }

      @media (prefers-reduced-motion: reduce) {
        .hanging-assembly, .foil-sweep-layer { animation: none !important; }
      }
    </style>
  </defs>

  <rect x="0.5" y="0.5" width="1199" height="419" rx="16" fill="url(#id-bg)" stroke="#1C2B4B" stroke-width="1.2" />
  <line x1="20" y1="1" x2="260" y2="1" stroke="#247BFF" stroke-width="2" />

  <!-- LEFT: Developer Credentials and Details (Width: 640) -->
  <g transform="translate(64, 46)">
    <g transform="translate(0, 0)">
      <rect width="210" height="24" rx="12" fill="#0D1322" stroke="#1C2B4B" stroke-width="0.8" />
      <circle cx="12" cy="12" r="3.5" fill="#247BFF" />
      <text x="24" y="16" fill="#247BFF" font-family="'Fira Code', Consolas, monospace" font-size="10" font-weight="700">VERIFIED DEVELOPER ID // 01</text>
    </g>

    <text x="0" y="58" fill="#F0F6FC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="900" letter-spacing="-0.8">
      Sawan Sahani
    </text>
    <text x="240" y="56" fill="#8B949E" font-family="'Fira Code', monospace" font-size="15" font-weight="600">(@Sawan017)</text>

    <!-- Wrapped Bio Text -->
    <text x="0" y="86" fill="#8B949E" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13.5">
      <tspan x="0" dy="0">Computer Science &amp; Engineering undergraduate dedicated to</tspan>
      <tspan x="0" dy="20">building resilient systems, mastering asymptotic algorithmic</tspan>
      <tspan x="0" dy="20">problem-solving, and architecting modern web platforms.</tspan>
    </text>

    <!-- Information Grid -->
    <g transform="translate(0, 142)">
      <g transform="translate(0, 0)">
        <rect width="260" height="60" rx="8" fill="#0D1322" stroke="#1C2B4B" stroke-width="1" />
        <text x="16" y="22" fill="#247BFF" font-family="'Fira Code', monospace" font-size="9.5" font-weight="700">PRIMARY ROLE</text>
        <text x="16" y="44" fill="#F0F6FC" font-family="-apple-system, sans-serif" font-size="13" font-weight="700">CSE Undergraduate / Dev</text>
      </g>

      <g transform="translate(280, 0)">
        <rect width="260" height="60" rx="8" fill="#0D1322" stroke="#1C2B4B" stroke-width="1" />
        <text x="16" y="22" fill="#FF354F" font-family="'Fira Code', monospace" font-size="9.5" font-weight="700">CORE DISCIPLINE</text>
        <text x="16" y="44" fill="#F0F6FC" font-family="-apple-system, sans-serif" font-size="13" font-weight="700">Systems &amp; Algorithmic DSA</text>
      </g>

      <g transform="translate(0, 72)">
        <rect width="260" height="60" rx="8" fill="#0D1322" stroke="#1C2B4B" stroke-width="1" />
        <text x="16" y="22" fill="#247BFF" font-family="'Fira Code', monospace" font-size="9.5" font-weight="700">FLAGSHIP PLATFORMS</text>
        <text x="16" y="44" fill="#F0F6FC" font-family="-apple-system, sans-serif" font-size="13" font-weight="700">ARINOVA • SourCa • Ascend</text>
      </g>

      <g transform="translate(280, 72)">
        <rect width="260" height="60" rx="8" fill="#0D1322" stroke="#1C2B4B" stroke-width="1" />
        <text x="16" y="22" fill="#00E676" font-family="'Fira Code', monospace" font-size="9.5" font-weight="700">BUILD STATUS</text>
        <text x="16" y="44" fill="#F0F6FC" font-family="-apple-system, sans-serif" font-size="13" font-weight="700">Active Builder • Real Repos</text>
      </g>
    </g>

    <text x="0" y="318" fill="#8B949E" font-family="'Fira Code', Consolas, monospace" font-size="10">
      AUTHENTICITY TOKEN: SHA256-7391-SAWAN017-CSE-BUILDER • SECURE PROFILE
    </text>
  </g>

  <line x1="720" y1="36" x2="720" y2="380" stroke="#1C2B4B" stroke-width="1" stroke-dasharray="3 3" />

  <!-- RIGHT: Hanging Lanyard Assembly (Center at X: 960) -->
  <g class="hanging-assembly">
    <path d="M 940 0 L 955 42" stroke="#1C2B4B" stroke-width="3" />
    <path d="M 980 0 L 965 42" stroke="#1C2B4B" stroke-width="3" />

    <rect x="950" y="42" width="20" height="12" rx="3" fill="url(#metal-clasp)" />
    <circle cx="960" cy="60" r="7" fill="none" stroke="url(#metal-clasp)" stroke-width="3" />
    <rect x="957" y="66" width="6" height="10" fill="url(#metal-clasp)" />

    <g transform="translate(830, 74)">
      <rect x="6" y="6" width="260" height="340" rx="14" fill="#000000" opacity="0.4" />

      <g clip-path="url(#lanyard-card-clip)">
        <rect width="260" height="340" fill="#0D1322" stroke="#1C2B4B" stroke-width="1.2" />

        <rect x="110" y="8" width="40" height="6" rx="3" fill="#070B16" stroke="#1C2B4B" stroke-width="1" />

        <rect x="0" y="24" width="260" height="3" fill="#247BFF" />
        <rect x="0" y="24" width="70" height="3" fill="#FF354F" />

        <text x="130" y="46" fill="#8B949E" font-family="'Fira Code', monospace" font-size="8.5" font-weight="700" text-anchor="middle">
          CSE UNDERGRADUATE // DEVELOPER
        </text>

        <g transform="translate(30, 56)">
          <rect width="200" height="175" rx="8" fill="#070B16" stroke="#247BFF" stroke-width="1" />
          <g clip-path="url(#badge-portrait-clip)">
            <image href="${idBase64}" x="-10" y="-8" width="220" height="195" preserveAspectRatio="xMidYMid slice" />
          </g>
        </g>

        <text x="130" y="254" fill="#F0F6FC" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" text-anchor="middle">
          SAWAN SAHANI
        </text>
        <text x="130" y="270" fill="#247BFF" font-family="'Fira Code', monospace" font-size="10.5" font-weight="700" text-anchor="middle">
          @SAWAN017
        </text>

        <g transform="translate(45, 284)">
          <line x1="0" y1="0" x2="0" y2="18" stroke="#F0F6FC" stroke-width="2" />
          <line x1="4" y1="0" x2="4" y2="18" stroke="#F0F6FC" stroke-width="1" />
          <line x1="8" y1="0" x2="8" y2="18" stroke="#F0F6FC" stroke-width="3" />
          <line x1="14" y1="0" x2="14" y2="18" stroke="#F0F6FC" stroke-width="1" />
          <line x1="18" y1="0" x2="18" y2="18" stroke="#F0F6FC" stroke-width="2" />
          <line x1="24" y1="0" x2="24" y2="18" stroke="#F0F6FC" stroke-width="1" />
          <line x1="28" y1="0" x2="28" y2="18" stroke="#F0F6FC" stroke-width="4" />
          <line x1="36" y1="0" x2="36" y2="18" stroke="#F0F6FC" stroke-width="2" />
          <line x1="42" y1="0" x2="42" y2="18" stroke="#F0F6FC" stroke-width="1" />
          <line x1="48" y1="0" x2="48" y2="18" stroke="#F0F6FC" stroke-width="3" />
          <line x1="56" y1="0" x2="56" y2="18" stroke="#F0F6FC" stroke-width="1" />
          <line x1="62" y1="0" x2="62" y2="18" stroke="#F0F6FC" stroke-width="2" />
          <line x1="68" y1="0" x2="68" y2="18" stroke="#F0F6FC" stroke-width="4" />
          <line x1="76" y1="0" x2="76" y2="18" stroke="#F0F6FC" stroke-width="1" />
          <line x1="82" y1="0" x2="82" y2="18" stroke="#F0F6FC" stroke-width="2" />
          <line x1="88" y1="0" x2="88" y2="18" stroke="#F0F6FC" stroke-width="3" />
          <line x1="96" y1="0" x2="96" y2="18" stroke="#F0F6FC" stroke-width="1" />
          <line x1="102" y1="0" x2="102" y2="18" stroke="#F0F6FC" stroke-width="2" />
          <line x1="108" y1="0" x2="108" y2="18" stroke="#F0F6FC" stroke-width="4" />
          <line x1="116" y1="0" x2="116" y2="18" stroke="#F0F6FC" stroke-width="1" />
          <line x1="122" y1="0" x2="122" y2="18" stroke="#F0F6FC" stroke-width="3" />
          <line x1="130" y1="0" x2="130" y2="18" stroke="#F0F6FC" stroke-width="2" />
          <line x1="136" y1="0" x2="136" y2="18" stroke="#F0F6FC" stroke-width="1" />
          <line x1="142" y1="0" x2="142" y2="18" stroke="#F0F6FC" stroke-width="3" />
          <line x1="150" y1="0" x2="150" y2="18" stroke="#F0F6FC" stroke-width="2" />
          <line x1="156" y1="0" x2="156" y2="18" stroke="#F0F6FC" stroke-width="1" />
          <line x1="162" y1="0" x2="162" y2="18" stroke="#F0F6FC" stroke-width="4" />
          <line x1="170" y1="0" x2="170" y2="18" stroke="#F0F6FC" stroke-width="2" />
          
          <text x="85" y="30" fill="#8B949E" font-family="'Fira Code', monospace" font-size="8.5" text-anchor="middle">DEV-7391-SAWAN017</text>
        </g>

        <g class="foil-sweep-layer">
          <rect x="-100" y="0" width="160" height="340" fill="url(#foil-sheen)" transform="skewX(-20)" />
        </g>

        <rect x="0.5" y="0.5" width="259" height="339" rx="14" fill="none" stroke="#247BFF" stroke-width="0.8" opacity="0.6" />
      </g>
    </g>
  </g>
</svg>`;
}

// 5. assets/connect.svg (1200 x 360)
function generateConnectSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 360" width="1200" height="360">
  <defs>
    <linearGradient id="connect-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070B16" />
      <stop offset="100%" stop-color="#0B1122" />
    </linearGradient>

    <style>
      @keyframes floatCharacter {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-6px); }
      }
      .pointing-char {
        animation: floatCharacter 4s ease-in-out infinite;
      }

      @keyframes nudgeRight {
        0%, 100% { transform: translateX(0); }
        50% { transform: translateX(5px); }
      }
      .nudge-arrow {
        animation: nudgeRight 2s ease-in-out infinite;
      }

      @media (prefers-reduced-motion: reduce) {
        .pointing-char, .nudge-arrow { animation: none !important; }
      }
    </style>
  </defs>

  <rect x="0.5" y="0.5" width="1199" height="359" rx="16" fill="url(#connect-bg)" stroke="#1C2B4B" stroke-width="1.2" />
  <line x1="20" y1="1" x2="260" y2="1" stroke="#247BFF" stroke-width="2" />
  <line x1="260" y1="1" x2="360" y2="1" stroke="#FF354F" stroke-width="2" />

  <!-- LEFT: Right-Pointing Character -->
  <g class="pointing-char" transform="translate(30, 20)">
    <ellipse cx="200" cy="220" rx="170" ry="100" fill="#247BFF" opacity="0.12" />
    <image href="${pointingBase64}" x="0" y="0" width="400" height="330" preserveAspectRatio="xMidYMid meet" />
  </g>

  <!-- RIGHT: Spacious Social Cards -->
  <g transform="translate(480, 36)">
    <text x="0" y="0" fill="#247BFF" font-family="'Fira Code', Consolas, monospace" font-size="11" font-weight="700" letter-spacing="1.5">LET'S CONNECT &amp; COLLABORATE</text>
    <text x="0" y="26" fill="#F0F6FC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="800">
      Verified Developer Channels
    </text>

    <!-- Card 1: GitHub -->
    <g transform="translate(0, 48)">
      <rect width="320" height="86" rx="10" fill="#0D1322" stroke="#1C2B4B" stroke-width="1.2" />
      <g transform="translate(18, 20)">
        <circle cx="20" cy="20" r="18" fill="#070B16" stroke="#247BFF" stroke-width="1" />
        <path fill="#247BFF" transform="translate(12, 12)" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
      </g>
      <text x="68" y="36" fill="#F0F6FC" font-family="-apple-system, sans-serif" font-size="15" font-weight="700">GitHub</text>
      <text x="68" y="56" fill="#247BFF" font-family="'Fira Code', monospace" font-size="11" font-weight="600">@Sawan017</text>
      <text x="68" y="70" fill="#8B949E" font-family="-apple-system, sans-serif" font-size="10.5">Repositories &amp; Open Source</text>
      <g class="nudge-arrow" transform="translate(285, 38)">
        <path d="M 0 6 L 12 6 M 8 1 L 13 6 L 8 11" fill="none" stroke="#247BFF" stroke-width="1.8" />
      </g>
    </g>

    <!-- Card 2: LeetCode -->
    <g transform="translate(340, 48)">
      <rect width="320" height="86" rx="10" fill="#0D1322" stroke="#1C2B4B" stroke-width="1.2" />
      <g transform="translate(18, 20)">
        <circle cx="20" cy="20" r="18" fill="#070B16" stroke="#FFA116" stroke-width="1" />
        <path fill="#FFA116" transform="translate(12, 12)" d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943L15.292 5.69a5.714 5.714 0 0 0-1.81-1.332A5.807 5.807 0 0 0 13.484 0z"/>
      </g>
      <text x="68" y="36" fill="#F0F6FC" font-family="-apple-system, sans-serif" font-size="15" font-weight="700">LeetCode</text>
      <text x="68" y="56" fill="#FFA116" font-family="'Fira Code', monospace" font-size="11" font-weight="600">@Sawan017</text>
      <text x="68" y="70" fill="#8B949E" font-family="-apple-system, sans-serif" font-size="10.5">Asymptotic Algorithmic DSA</text>
      <g class="nudge-arrow" transform="translate(285, 38)">
        <path d="M 0 6 L 12 6 M 8 1 L 13 6 L 8 11" fill="none" stroke="#FFA116" stroke-width="1.8" />
      </g>
    </g>

    <!-- Card 3: Codeforces -->
    <g transform="translate(0, 150)">
      <rect width="320" height="86" rx="10" fill="#0D1322" stroke="#1C2B4B" stroke-width="1.2" />
      <g transform="translate(18, 20)">
        <circle cx="20" cy="20" r="18" fill="#070B16" stroke="#1F8ACB" stroke-width="1" />
        <rect x="12" y="20" width="3.5" height="10" fill="#FFD400" />
        <rect x="18" y="14" width="3.5" height="16" fill="#1F8ACB" />
        <rect x="24" y="17" width="3.5" height="13" fill="#ED1C24" />
      </g>
      <text x="68" y="36" fill="#F0F6FC" font-family="-apple-system, sans-serif" font-size="15" font-weight="700">Codeforces</text>
      <text x="68" y="56" fill="#1F8ACB" font-family="'Fira Code', monospace" font-size="11" font-weight="600">@Sawan017</text>
      <text x="68" y="70" fill="#8B949E" font-family="-apple-system, sans-serif" font-size="10.5">Contests &amp; Competitive DSA</text>
      <g class="nudge-arrow" transform="translate(285, 38)">
        <path d="M 0 6 L 12 6 M 8 1 L 13 6 L 8 11" fill="none" stroke="#1F8ACB" stroke-width="1.8" />
      </g>
    </g>

    <!-- Card 4: Email -->
    <g transform="translate(340, 150)">
      <rect width="320" height="86" rx="10" fill="#0D1322" stroke="#1C2B4B" stroke-width="1.2" />
      <g transform="translate(18, 20)">
        <circle cx="20" cy="20" r="18" fill="#070B16" stroke="#FF354F" stroke-width="1" />
        <path fill="#FF354F" transform="translate(12, 13)" d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2zm0 1.5a.25.25 0 0 0-.25.25v.678l6.5 4.333 6.5-4.333V3.75a.25.25 0 0 0-.25-.25H1.75zm13 2.482l-6.223 4.15a.75.75 0 0 1-.832 0L1.5 5.982v6.268c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.982z"/>
      </g>
      <text x="68" y="36" fill="#F0F6FC" font-family="-apple-system, sans-serif" font-size="15" font-weight="700">Email</text>
      <text x="68" y="56" fill="#FF354F" font-family="'Fira Code', monospace" font-size="10.5" font-weight="600">sawansahani017@gmail.com</text>
      <text x="68" y="70" fill="#8B949E" font-family="-apple-system, sans-serif" font-size="10.5">Inquiries &amp; Collaboration</text>
      <g class="nudge-arrow" transform="translate(285, 38)">
        <path d="M 0 6 L 12 6 M 8 1 L 13 6 L 8 11" fill="none" stroke="#FF354F" stroke-width="1.8" />
      </g>
    </g>

    <text x="0" y="268" fill="#8B949E" font-family="'Fira Code', monospace" font-size="10">
      VERIFIED CHANNELS // ALL LINKS ROUTE DIRECTLY TO AUTHENTIC PLATFORMS
    </text>
  </g>
</svg>`;
}

fs.writeFileSync(path.join(ASSETS_DIR, 'hero.svg'), generateHeroSvg());
fs.writeFileSync(path.join(ASSETS_DIR, 'about-life.svg'), generateAboutLifeSvg());
fs.writeFileSync(path.join(ASSETS_DIR, 'stack.svg'), generateStackSvg());
fs.writeFileSync(path.join(ASSETS_DIR, 'id-dashboard.svg'), generateIdDashboardSvg());
fs.writeFileSync(path.join(ASSETS_DIR, 'connect.svg'), generateConnectSvg());

console.log('Refined playbook SVGs compiled successfully.');
