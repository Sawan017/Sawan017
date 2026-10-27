const fs = require('fs');
const path = require('path');

const root = __dirname;
const assetsDir = path.join(root, 'assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const idAsset = `data:image/png;base64,${fs.readFileSync(path.join(assetsDir, 'id.png')).toString('base64')}`;
const pointingAsset = `data:image/png;base64,${fs.readFileSync(path.join(assetsDir, 'right_pointing.png')).toString('base64')}`;

const palette = {
  navy: '#070B16',
  surface: '#0D1322',
  surface2: '#111B2E',
  line: '#1C2B4B',
  blue: '#247BFF',
  crimson: '#FF354F',
  text: '#F8FAFC',
  muted: '#A7B2C4',
  green: '#7FE3B0',
};

function writeAsset(name, content) {
  fs.writeFileSync(path.join(assetsDir, name), content, 'utf8');
  console.log(`wrote assets/${name}`);
}

function heroSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 500" width="1200" height="500" role="img" aria-labelledby="hero-title hero-desc">
  <title id="hero-title">Sawan Sahani — GitHub profile introduction</title>
  <desc id="hero-desc">Animated introduction for Sawan017, a CSE undergraduate and developer.</desc>
  <defs>
    <linearGradient id="hero-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${palette.navy}" />
      <stop offset="0.56" stop-color="#0B1120" />
      <stop offset="1" stop-color="#05070D" />
    </linearGradient>
    <linearGradient id="hero-rim" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${palette.blue}" />
      <stop offset="0.55" stop-color="${palette.crimson}" />
      <stop offset="1" stop-color="${palette.blue}" />
    </linearGradient>
    <radialGradient id="hero-glow" cx="50%" cy="45%" r="60%">
      <stop offset="0" stop-color="${palette.blue}" stop-opacity="0.24" />
      <stop offset="1" stop-color="${palette.blue}" stop-opacity="0" />
    </radialGradient>
    <pattern id="hero-dots" width="22" height="22" patternUnits="userSpaceOnUse">
      <circle cx="11" cy="11" r="1" fill="${palette.line}" opacity="0.72" />
    </pattern>
    <clipPath id="hero-name-clip"><rect x="58" y="98" width="700" height="72" rx="4" /></clipPath>
    <clipPath id="hero-portrait-clip"><rect x="0" y="0" width="270" height="300" rx="16" /></clipPath>
    <style>
      @keyframes heroNameReveal { from { transform: translateY(46px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      @keyframes heroScan { 0% { transform: translateY(-30px); opacity: 0; } 18% { opacity: .7; } 82% { opacity: .7; } 100% { transform: translateY(530px); opacity: 0; } }
      @keyframes heroRole1 { 0%, 22% { opacity: 1; transform: translateY(0); } 26%, 100% { opacity: 0; transform: translateY(-9px); } }
      @keyframes heroRole2 { 0%, 22% { opacity: 0; transform: translateY(9px); } 26%, 47% { opacity: 1; transform: translateY(0); } 51%, 100% { opacity: 0; transform: translateY(-9px); } }
      @keyframes heroRole3 { 0%, 47% { opacity: 0; transform: translateY(9px); } 51%, 72% { opacity: 1; transform: translateY(0); } 76%, 100% { opacity: 0; transform: translateY(-9px); } }
      @keyframes heroRole4 { 0%, 72% { opacity: 0; transform: translateY(9px); } 76%, 96% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(-9px); } }
      @keyframes heroPulse { 0%, 100% { opacity: .45; } 50% { opacity: 1; } }
      .hero-name { animation: heroNameReveal 1.1s cubic-bezier(.16,1,.3,1) both; }
      .hero-scan { animation: heroScan 8s ease-in-out infinite; }
      .hero-role-1 { animation: heroRole1 12s infinite; }
      .hero-role-2 { animation: heroRole2 12s infinite; }
      .hero-role-3 { animation: heroRole3 12s infinite; }
      .hero-role-4 { animation: heroRole4 12s infinite; }
      .hero-pulse { animation: heroPulse 2.2s ease-in-out infinite; }
      @media (prefers-reduced-motion: reduce) {
        .hero-name, .hero-scan, .hero-pulse, .hero-role-1, .hero-role-2, .hero-role-3, .hero-role-4 { animation: none !important; }
        .hero-name { transform: none !important; opacity: 1 !important; }
        .hero-role-1 { opacity: 1 !important; transform: none !important; }
        .hero-role-2, .hero-role-3, .hero-role-4 { opacity: 0 !important; }
      }
    </style>
  </defs>

  <rect x="0.6" y="0.6" width="1198.8" height="498.8" rx="20" fill="url(#hero-bg)" stroke="${palette.line}" stroke-width="1.2" />
  <rect width="1200" height="500" rx="20" fill="url(#hero-dots)" opacity="0.72" />
  <rect x="1" y="1" width="1198" height="498" rx="19" fill="none" stroke="url(#hero-rim)" stroke-opacity="0.22" />
  <line x1="24" y1="1.5" x2="282" y2="1.5" stroke="${palette.blue}" stroke-width="2" />
  <line x1="282" y1="1.5" x2="382" y2="1.5" stroke="${palette.crimson}" stroke-width="2" />

  <g class="hero-scan" opacity="0.65">
    <line x1="0" y1="0" x2="1200" y2="0" stroke="${palette.blue}" stroke-width="1.5" />
    <rect x="0" y="-18" width="1200" height="36" fill="${palette.blue}" opacity="0.055" />
  </g>

  <g transform="translate(58 44)">
    <rect width="226" height="28" rx="14" fill="${palette.surface}" stroke="${palette.line}" />
    <circle cx="15" cy="14" r="4" fill="${palette.green}" class="hero-pulse" />
    <text x="29" y="18" fill="${palette.blue}" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="700">~ /sawan $ whoami</text>
  </g>

  <text x="58" y="91" fill="${palette.muted}" font-family="'Fira Code',Consolas,monospace" font-size="10.5" letter-spacing="1.5">SAWAN017 / PROFILE README / 01</text>

  <g clip-path="url(#hero-name-clip)" class="hero-name">
    <text x="58" y="157" fill="${palette.text}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="58" font-weight="900" letter-spacing="-1.8">
      Sawan <tspan fill="${palette.blue}">Sahani.</tspan>
    </text>
  </g>

  <g transform="translate(58 205)">
    <text x="0" y="0" fill="${palette.crimson}" font-family="'Fira Code',Consolas,monospace" font-size="16" font-weight="800">&gt;</text>
    <text x="24" y="0" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="17" font-weight="700" class="hero-role-1">CSE UNDERGRADUATE / DEVELOPER</text>
    <text x="24" y="0" fill="${palette.blue}" font-family="'Fira Code',Consolas,monospace" font-size="17" font-weight="700" class="hero-role-2">FULL-STACK SOFTWARE BUILDER</text>
    <text x="24" y="0" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="17" font-weight="700" class="hero-role-3">C++20 / DSA PRACTITIONER</text>
    <text x="24" y="0" fill="${palette.crimson}" font-family="'Fira Code',Consolas,monospace" font-size="17" font-weight="700" class="hero-role-4">INTERACTIVE 3D / WEB EXPLORER</text>
  </g>

  <text x="58" y="247" fill="${palette.muted}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="15">
    <tspan x="58" dy="0">Building useful software, strengthening DSA, and learning full-stack engineering.</tspan>
    <tspan x="58" dy="24">I like rigorous systems underneath and intentional interfaces on top.</tspan>
  </text>

  <g transform="translate(58 327)">
    <g>
      <rect width="174" height="66" rx="10" fill="${palette.surface}" stroke="${palette.line}" />
      <circle cx="18" cy="20" r="4" fill="${palette.blue}" />
      <text x="31" y="24" fill="${palette.text}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="12.5" font-weight="800">SYSTEMS</text>
      <text x="18" y="46" fill="${palette.muted}" font-family="'Fira Code',Consolas,monospace" font-size="10.5">C++20 · DSA · APIs</text>
    </g>
    <g transform="translate(190 0)">
      <rect width="174" height="66" rx="10" fill="${palette.surface}" stroke="${palette.line}" />
      <circle cx="18" cy="20" r="4" fill="${palette.crimson}" />
      <text x="31" y="24" fill="${palette.text}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="12.5" font-weight="800">WEB</text>
      <text x="18" y="46" fill="${palette.muted}" font-family="'Fira Code',Consolas,monospace" font-size="10.5">TypeScript · React</text>
    </g>
    <g transform="translate(380 0)">
      <rect width="174" height="66" rx="10" fill="${palette.surface}" stroke="${palette.line}" />
      <circle cx="18" cy="20" r="4" fill="${palette.blue}" />
      <text x="31" y="24" fill="${palette.text}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="12.5" font-weight="800">SPATIAL UX</text>
      <text x="18" y="46" fill="${palette.muted}" font-family="'Fira Code',Consolas,monospace" font-size="10.5">Three.js · Supabase</text>
    </g>
  </g>

  <g transform="translate(58 431)">
    <rect width="554" height="31" rx="7" fill="#080D18" stroke="${palette.line}" />
    <text x="16" y="20" fill="${palette.blue}" font-family="'Fira Code',Consolas,monospace" font-size="10.5" font-weight="800">PUBLIC PROFILE &gt;</text>
    <text x="139" y="20" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="10.5">@SAWAN017 · VERIFIED FACTS ONLY</text>
  </g>

  <g transform="translate(856 64)">
    <rect x="-8" y="-8" width="296" height="386" rx="22" fill="url(#hero-glow)" opacity="0.8" />
    <rect x="0" y="0" width="280" height="370" rx="18" fill="${palette.surface}" stroke="url(#hero-rim)" stroke-width="1.5" />
    <rect x="12" y="12" width="256" height="302" rx="15" fill="${palette.navy}" stroke="${palette.line}" />
    <circle cx="140" cy="162" r="108" fill="${palette.blue}" opacity="0.09" />
    <g clip-path="url(#hero-portrait-clip)">
      <image href="${idAsset}" x="5" y="5" width="270" height="300" preserveAspectRatio="xMidYMid meet" />
    </g>
    <rect x="50" y="327" width="180" height="26" rx="13" fill="#080D18" stroke="${palette.blue}" stroke-opacity="0.7" />
    <circle cx="65" cy="340" r="3.5" fill="${palette.green}" />
    <text x="77" y="344" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="9.5" font-weight="800">TRUE-ALPHA / @SAWAN017</text>
  </g>
</svg>`;
}

function aboutSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 380" width="1200" height="380" role="img" aria-labelledby="about-title about-desc">
  <title id="about-title">About Sawan Sahani</title>
  <desc id="about-desc">Capabilities and a three-slide interests carousel.</desc>
  <defs>
    <linearGradient id="about-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${palette.navy}" /><stop offset="1" stop-color="#0A1020" /></linearGradient>
    <pattern id="about-dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r="1" fill="${palette.line}" opacity="0.65" /></pattern>
    <style>
      @keyframes aboutSlide1 { 0%, 30% { opacity: 1; transform: translateX(0); } 33%, 100% { opacity: 0; transform: translateX(-12px); } }
      @keyframes aboutSlide2 { 0%, 30% { opacity: 0; transform: translateX(12px); } 33%, 63% { opacity: 1; transform: translateX(0); } 66%, 100% { opacity: 0; transform: translateX(-12px); } }
      @keyframes aboutSlide3 { 0%, 63% { opacity: 0; transform: translateX(12px); } 66%, 97% { opacity: 1; transform: translateX(0); } 100% { opacity: 0; transform: translateX(12px); } }
      @keyframes aboutProgress1 { 0% { transform: scaleX(0); } 30% { transform: scaleX(1); } 33%, 100% { transform: scaleX(1); } }
      @keyframes aboutProgress2 { 0%, 33% { transform: scaleX(0); } 63% { transform: scaleX(1); } 66%, 100% { transform: scaleX(1); } }
      @keyframes aboutProgress3 { 0%, 66% { transform: scaleX(0); } 97% { transform: scaleX(1); } 100% { transform: scaleX(1); } }
      .about-s1 { animation: aboutSlide1 12s infinite; }
      .about-s2 { animation: aboutSlide2 12s infinite; }
      .about-s3 { animation: aboutSlide3 12s infinite; }
      .about-p1 { animation: aboutProgress1 12s infinite; transform-origin: left center; }
      .about-p2 { animation: aboutProgress2 12s infinite; transform-origin: left center; }
      .about-p3 { animation: aboutProgress3 12s infinite; transform-origin: left center; }
      @media (prefers-reduced-motion: reduce) {
        .about-s1, .about-s2, .about-s3, .about-p1, .about-p2, .about-p3 { animation: none !important; }
        .about-s1 { opacity: 1 !important; transform: none !important; }
        .about-s2, .about-s3 { opacity: 0 !important; }
        .about-p1 { transform: scaleX(1) !important; }
        .about-p2, .about-p3 { transform: scaleX(0) !important; }
      }
    </style>
  </defs>
  <rect x="0.6" y="0.6" width="1198.8" height="378.8" rx="20" fill="url(#about-bg)" stroke="${palette.line}" stroke-width="1.2" />
  <rect width="1200" height="380" rx="20" fill="url(#about-dots)" opacity="0.55" />
  <line x1="24" y1="1.5" x2="254" y2="1.5" stroke="${palette.blue}" stroke-width="2" />

  <g transform="translate(50 38)">
    <text x="0" y="0" fill="${palette.blue}" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="800" letter-spacing="1.4">ABOUT / HOW I BUILD</text>
    <text x="0" y="34" fill="${palette.text}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="26" font-weight="900">Useful software, carefully made.</text>
    <text x="0" y="61" fill="${palette.muted}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="13.5">A CSE undergraduate lens on systems, product surfaces, and problem-solving.</text>

    <g transform="translate(0 82)">
      <rect width="505" height="62" rx="10" fill="${palette.surface}" stroke="${palette.line}" />
      <text x="17" y="22" fill="${palette.blue}" font-family="'Fira Code',Consolas,monospace" font-size="10.5" font-weight="800">01 / SYSTEMS</text>
      <text x="17" y="44" fill="${palette.text}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="13" font-weight="700">C++20 · data structures · runtime discipline</text>
    </g>
    <g transform="translate(0 154)">
      <rect width="505" height="62" rx="10" fill="${palette.surface}" stroke="${palette.line}" />
      <text x="17" y="22" fill="${palette.crimson}" font-family="'Fira Code',Consolas,monospace" font-size="10.5" font-weight="800">02 / PLATFORMS</text>
      <text x="17" y="44" fill="${palette.text}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="13" font-weight="700">TypeScript · React · Supabase · PostgreSQL</text>
    </g>
    <g transform="translate(0 226)">
      <rect width="505" height="62" rx="10" fill="${palette.surface}" stroke="${palette.line}" />
      <text x="17" y="22" fill="${palette.blue}" font-family="'Fira Code',Consolas,monospace" font-size="10.5" font-weight="800">03 / SPATIAL UX</text>
      <text x="17" y="44" fill="${palette.text}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="13" font-weight="700">Three.js · React Three Fiber · interaction</text>
    </g>
  </g>

  <line x1="590" y1="34" x2="590" y2="346" stroke="${palette.line}" stroke-dasharray="3 5" />

  <g transform="translate(630 38)">
    <text x="0" y="0" fill="${palette.blue}" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="800" letter-spacing="1.4">INTERESTS / CURRENT CURIOSITY</text>
    <g transform="translate(0 20)">
      <rect width="158" height="4" rx="2" fill="${palette.line}" /><rect width="158" height="4" rx="2" fill="${palette.blue}" class="about-p1" />
      <rect x="183" width="158" height="4" rx="2" fill="${palette.line}" /><rect x="183" width="158" height="4" rx="2" fill="${palette.crimson}" class="about-p2" />
      <rect x="366" width="158" height="4" rx="2" fill="${palette.line}" /><rect x="366" width="158" height="4" rx="2" fill="${palette.blue}" class="about-p3" />
    </g>

    <g transform="translate(0 48)">
      <rect width="524" height="252" rx="14" fill="${palette.surface}" stroke="${palette.line}" />
      <g transform="translate(24 28)" class="about-s1">
        <text x="0" y="0" fill="${palette.blue}" font-family="'Fira Code',Consolas,monospace" font-size="10.5" font-weight="800">01 // BUILD</text>
        <text x="0" y="34" fill="${palette.text}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="20" font-weight="900">Make the useful thing real.</text>
        <text x="0" y="70" fill="${palette.muted}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="13">
          <tspan x="0" dy="0">I enjoy turning a rough idea into a working surface:</tspan>
          <tspan x="0" dy="22">clear data flows, honest constraints, and a UI people</tspan>
          <tspan x="0" dy="22">can understand without a tour guide.</tspan>
        </text>
        <rect y="166" width="476" height="28" rx="6" fill="#080D18" stroke="${palette.line}" /><text x="14" y="185" fill="${palette.blue}" font-family="'Fira Code',Consolas,monospace" font-size="10">FOCUS: product surfaces · typed systems · small feedback loops</text>
      </g>
      <g transform="translate(24 28)" class="about-s2">
        <text x="0" y="0" fill="${palette.crimson}" font-family="'Fira Code',Consolas,monospace" font-size="10.5" font-weight="800">02 // STUDY</text>
        <text x="0" y="34" fill="${palette.text}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="20" font-weight="900">Strengthen the core.</text>
        <text x="0" y="70" fill="${palette.muted}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="13">
          <tspan x="0" dy="0">DSA practice is a way to build better instincts:</tspan>
          <tspan x="0" dy="22">choose a model, prove the trade-off, then make the</tspan>
          <tspan x="0" dy="22">implementation readable enough to revisit.</tspan>
        </text>
        <rect y="166" width="476" height="28" rx="6" fill="#080D18" stroke="${palette.line}" /><text x="14" y="185" fill="${palette.crimson}" font-family="'Fira Code',Consolas,monospace" font-size="10">FOCUS: C++20 · asymptotics · graphs · dynamic programming</text>
      </g>
      <g transform="translate(24 28)" class="about-s3">
        <text x="0" y="0" fill="${palette.blue}" font-family="'Fira Code',Consolas,monospace" font-size="10.5" font-weight="800">03 // EXPLORE</text>
        <text x="0" y="34" fill="${palette.text}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="20" font-weight="900">Give software some space.</text>
        <text x="0" y="70" fill="${palette.muted}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="13">
          <tspan x="0" dy="0">3D interaction is a different kind of systems thinking:</tspan>
          <tspan x="0" dy="22">scene graphs, motion, feedback, and the feeling of</tspan>
          <tspan x="0" dy="22">moving through a product rather than reading one.</tspan>
        </text>
        <rect y="166" width="476" height="28" rx="6" fill="#080D18" stroke="${palette.line}" /><text x="14" y="185" fill="${palette.blue}" font-family="'Fira Code',Consolas,monospace" font-size="10">FOCUS: Three.js · R3F · developer tools · human-scale motion</text>
      </g>
    </g>
  </g>
</svg>`;
}

function stackSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 420" width="1200" height="420" role="img" aria-labelledby="stack-title stack-desc">
  <title id="stack-title">Sawan017 technology stack</title>
  <desc id="stack-desc">Labelled technology nodes on three animated elliptical orbits and grouped stack chips.</desc>
  <defs>
    <linearGradient id="stack-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${palette.navy}" /><stop offset="1" stop-color="#0B1120" /></linearGradient>
    <radialGradient id="stack-core" cx="50%" cy="50%" r="60%"><stop offset="0" stop-color="${palette.blue}" stop-opacity="0.24" /><stop offset="1" stop-color="${palette.blue}" stop-opacity="0" /></radialGradient>
    <style>
      @keyframes stackCounterOuter { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
      @keyframes stackCounterMiddle { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      @keyframes stackCounterInner { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
      .stack-counter { transform-box: fill-box; transform-origin: center; }
      .stack-counter-outer { animation: stackCounterOuter 26s linear infinite; }
      .stack-counter-middle { animation: stackCounterMiddle 18s linear infinite; }
      .stack-counter-inner { animation: stackCounterInner 12s linear infinite; }
      @media (prefers-reduced-motion: reduce) { .stack-motion, .stack-counter { animation: none !important; display: none !important; } }
    </style>
  </defs>
  <rect x="0.6" y="0.6" width="1198.8" height="418.8" rx="20" fill="url(#stack-bg)" stroke="${palette.line}" stroke-width="1.2" />
  <line x1="24" y1="1.5" x2="254" y2="1.5" stroke="${palette.blue}" stroke-width="2" />

  <g transform="translate(0 0)">
    <text x="278" y="36" fill="${palette.blue}" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="800" letter-spacing="1.4" text-anchor="middle">STACK / HARMONIC ORBITS</text>
    <circle cx="278" cy="220" r="184" fill="url(#stack-core)" />
    <ellipse cx="278" cy="220" rx="190" ry="96" fill="none" stroke="${palette.line}" stroke-width="1" stroke-dasharray="5 5" />
    <ellipse cx="278" cy="220" rx="145" ry="74" fill="none" stroke="${palette.line}" stroke-width="1" stroke-dasharray="4 4" />
    <ellipse cx="278" cy="220" rx="96" ry="50" fill="none" stroke="${palette.line}" stroke-width="1" stroke-dasharray="3 4" />

    <g class="stack-outer">
      <animateTransform class="stack-motion" attributeName="transform" type="rotate" from="0 278 220" to="360 278 220" dur="26s" repeatCount="indefinite" />
      <ellipse cx="278" cy="220" rx="190" ry="96" fill="none" stroke="${palette.crimson}" stroke-opacity="0.34" />
      <g transform="translate(468 220)"><g class="stack-counter stack-counter-outer"><circle r="20" fill="${palette.surface}" stroke="${palette.crimson}" /><text y="4" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="9" font-weight="800" text-anchor="middle">SUPA</text></g></g>
      <g transform="translate(183 172)"><g class="stack-counter stack-counter-outer"><circle r="20" fill="${palette.surface}" stroke="${palette.crimson}" /><text y="4" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="8.5" font-weight="800" text-anchor="middle">POSTG</text></g></g>
      <g transform="translate(278 124)"><g class="stack-counter stack-counter-outer"><circle r="20" fill="${palette.surface}" stroke="${palette.crimson}" /><text y="4" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="9" font-weight="800" text-anchor="middle">GIT</text></g></g>
    </g>
    <g class="stack-middle">
      <animateTransform class="stack-motion" attributeName="transform" type="rotate" from="360 278 220" to="0 278 220" dur="18s" repeatCount="indefinite" />
      <ellipse cx="278" cy="220" rx="145" ry="74" fill="none" stroke="${palette.blue}" stroke-opacity="0.42" />
      <g transform="translate(423 220)"><g class="stack-counter stack-counter-middle"><circle r="19" fill="${palette.surface}" stroke="${palette.blue}" /><text y="4" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="8.5" font-weight="800" text-anchor="middle">REACT</text></g></g>
      <g transform="translate(206 146)"><g class="stack-counter stack-counter-middle"><circle r="19" fill="${palette.surface}" stroke="${palette.blue}" /><text y="4" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="8.5" font-weight="800" text-anchor="middle">THREE</text></g></g>
      <g transform="translate(278 294)"><g class="stack-counter stack-counter-middle"><circle r="19" fill="${palette.surface}" stroke="${palette.blue}" /><text y="4" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="8.5" font-weight="800" text-anchor="middle">VITE</text></g></g>
    </g>
    <g class="stack-inner">
      <animateTransform class="stack-motion" attributeName="transform" type="rotate" from="0 278 220" to="360 278 220" dur="12s" repeatCount="indefinite" />
      <ellipse cx="278" cy="220" rx="96" ry="50" fill="none" stroke="${palette.green}" stroke-opacity="0.45" />
      <g transform="translate(374 220)"><g class="stack-counter stack-counter-inner"><circle r="18" fill="${palette.surface}" stroke="${palette.green}" /><text y="4" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="8.5" font-weight="800" text-anchor="middle">C++</text></g></g>
      <g transform="translate(230 195)"><g class="stack-counter stack-counter-inner"><circle r="18" fill="${palette.surface}" stroke="${palette.green}" /><text y="4" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="8.5" font-weight="800" text-anchor="middle">TS</text></g></g>
      <g transform="translate(278 270)"><g class="stack-counter stack-counter-inner"><circle r="18" fill="${palette.surface}" stroke="${palette.green}" /><text y="4" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="8.5" font-weight="800" text-anchor="middle">JS</text></g></g>
    </g>
    <circle cx="278" cy="220" r="42" fill="${palette.surface}" stroke="${palette.blue}" stroke-width="1.4" />
    <circle cx="278" cy="220" r="32" fill="${palette.navy}" stroke="${palette.line}" />
    <text x="278" y="216" fill="${palette.text}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="12" font-weight="900" text-anchor="middle">SAWAN</text>
    <text x="278" y="231" fill="${palette.blue}" font-family="'Fira Code',Consolas,monospace" font-size="8.5" font-weight="800" text-anchor="middle">DEV CORE</text>
  </g>

  <line x1="556" y1="34" x2="556" y2="386" stroke="${palette.line}" stroke-dasharray="3 5" />
  <g transform="translate(606 38)">
    <text x="0" y="0" fill="${palette.blue}" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="800" letter-spacing="1.4">VERIFIED STACK / PUBLIC SIGNALS</text>
    <text x="0" y="34" fill="${palette.text}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="24" font-weight="900">Tools I am using and learning.</text>
    <text x="0" y="58" fill="${palette.muted}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="12.5">Labels reflect the supplied playbook and the current public repositories.</text>

    <g transform="translate(0 86)">
      <text x="0" y="0" fill="${palette.muted}" font-family="'Fira Code',Consolas,monospace" font-size="10" font-weight="800">01 / LANGUAGES</text>
      <g transform="translate(0 12)">
        <rect width="70" height="28" rx="6" fill="${palette.surface}" stroke="${palette.blue}" /><text x="35" y="19" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="800" text-anchor="middle">C++20</text>
        <rect x="78" width="104" height="28" rx="6" fill="${palette.surface}" stroke="${palette.line}" /><text x="130" y="19" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="700" text-anchor="middle">TypeScript</text>
        <rect x="190" width="104" height="28" rx="6" fill="${palette.surface}" stroke="${palette.line}" /><text x="242" y="19" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="700" text-anchor="middle">JavaScript</text>
        <rect x="302" width="58" height="28" rx="6" fill="${palette.surface}" stroke="${palette.line}" /><text x="331" y="19" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="700" text-anchor="middle">C</text>
        <rect x="368" width="64" height="28" rx="6" fill="${palette.surface}" stroke="${palette.line}" /><text x="400" y="19" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="700" text-anchor="middle">SQL</text>
      </g>
    </g>
    <g transform="translate(0 154)">
      <text x="0" y="0" fill="${palette.muted}" font-family="'Fira Code',Consolas,monospace" font-size="10" font-weight="800">02 / FRONTEND + 3D</text>
      <g transform="translate(0 12)">
        <rect width="82" height="28" rx="6" fill="${palette.surface}" stroke="${palette.crimson}" /><text x="41" y="19" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="700" text-anchor="middle">React</text>
        <rect x="90" width="86" height="28" rx="6" fill="${palette.surface}" stroke="${palette.line}" /><text x="133" y="19" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="700" text-anchor="middle">Three.js</text>
        <rect x="184" width="138" height="28" rx="6" fill="${palette.surface}" stroke="${palette.line}" /><text x="253" y="19" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="700" text-anchor="middle">React Three Fiber</text>
        <rect x="330" width="68" height="28" rx="6" fill="${palette.surface}" stroke="${palette.line}" /><text x="364" y="19" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="700" text-anchor="middle">Vite</text>
      </g>
    </g>
    <g transform="translate(0 222)">
      <text x="0" y="0" fill="${palette.muted}" font-family="'Fira Code',Consolas,monospace" font-size="10" font-weight="800">03 / DATA + WORKFLOW</text>
      <g transform="translate(0 12)">
        <rect width="92" height="28" rx="6" fill="${palette.surface}" stroke="${palette.blue}" /><text x="46" y="19" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="700" text-anchor="middle">Supabase</text>
        <rect x="100" width="104" height="28" rx="6" fill="${palette.surface}" stroke="${palette.line}" /><text x="152" y="19" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="700" text-anchor="middle">PostgreSQL</text>
        <rect x="212" width="82" height="28" rx="6" fill="${palette.surface}" stroke="${palette.line}" /><text x="253" y="19" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="700" text-anchor="middle">PL/pgSQL</text>
        <rect x="302" width="92" height="28" rx="6" fill="${palette.surface}" stroke="${palette.line}" /><text x="348" y="19" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="700" text-anchor="middle">GitHub Actions</text>
      </g>
    </g>
    <rect y="310" width="486" height="30" rx="7" fill="#080D18" stroke="${palette.line}" />
    <text x="16" y="330" fill="${palette.green}" font-family="'Fira Code',Consolas,monospace" font-size="10.5" font-weight="800">SOURCE &gt; public repositories + supplied profile playbook</text>
  </g>
</svg>`;
}

function idDashboardSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 440" width="1200" height="440" role="img" aria-labelledby="id-title id-desc">
  <title id="id-title">Sawan017 developer identity card</title>
  <desc id="id-desc">A hanging developer identity card with portrait, barcode, and subtle pendulum animation.</desc>
  <defs>
    <linearGradient id="id-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${palette.navy}" /><stop offset="1" stop-color="#0B1120" /></linearGradient>
    <linearGradient id="id-card" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#111B2E" /><stop offset="1" stop-color="#0A1020" /></linearGradient>
    <linearGradient id="id-metal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5B6C86" /><stop offset="0.5" stop-color="#E5ECF5" /><stop offset="1" stop-color="#5B6C86" /></linearGradient>
    <linearGradient id="id-foil" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${palette.blue}" stop-opacity="0" /><stop offset="0.45" stop-color="${palette.blue}" stop-opacity="0.03" /><stop offset="0.5" stop-color="#FFFFFF" stop-opacity="0.2" /><stop offset="0.55" stop-color="${palette.crimson}" stop-opacity="0.04" /><stop offset="1" stop-color="${palette.crimson}" stop-opacity="0" /></linearGradient>
    <clipPath id="id-photo-clip"><rect width="220" height="150" rx="10" /></clipPath>
    <clipPath id="id-card-clip"><rect width="282" height="336" rx="16" /></clipPath>
    <style>
      @keyframes idDrop { 0% { transform: translateY(-58px); } 72% { transform: translateY(5px); } 100% { transform: translateY(0); } }
      @keyframes idSwing { 0%, 100% { transform: rotate(0deg); } 20% { transform: rotate(1.7deg); } 50% { transform: rotate(0deg); } 75% { transform: rotate(-1.7deg); } }
      @keyframes idFoil { 0% { transform: translateX(-250px); } 100% { transform: translateX(360px); } }
      .id-drop { transform-origin: 960px 0; animation: idDrop 1.4s cubic-bezier(.16,1,.3,1) both; }
      .id-swing { transform-origin: 960px 0; animation: idSwing 8s 1.4s ease-in-out infinite; }
      .id-foil { animation: idFoil 6.5s ease-in-out infinite; }
      @media (prefers-reduced-motion: reduce) { .id-drop, .id-swing, .id-foil { animation: none !important; } }
    </style>
  </defs>
  <rect x="0.6" y="0.6" width="1198.8" height="438.8" rx="20" fill="url(#id-bg)" stroke="${palette.line}" stroke-width="1.2" />
  <line x1="24" y1="1.5" x2="254" y2="1.5" stroke="${palette.blue}" stroke-width="2" />

  <g transform="translate(54 52)">
    <text x="0" y="0" fill="${palette.blue}" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="800" letter-spacing="1.4">DEVELOPER ID / PUBLIC PROFILE</text>
    <text x="0" y="44" fill="${palette.text}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="38" font-weight="900">Sawan Sahani</text>
    <text x="0" y="70" fill="${palette.blue}" font-family="'Fira Code',Consolas,monospace" font-size="14" font-weight="800">@SAWAN017</text>
    <text x="0" y="112" fill="${palette.muted}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="14">
      <tspan x="0" dy="0">Computer Science &amp; Engineering undergraduate.</tspan>
      <tspan x="0" dy="23">Building useful software, strengthening DSA, and learning</tspan>
      <tspan x="0" dy="23">full-stack engineering through public repositories.</tspan>
    </text>

    <g transform="translate(0 192)">
      <g><rect width="246" height="64" rx="10" fill="${palette.surface}" stroke="${palette.line}" /><text x="16" y="23" fill="${palette.blue}" font-family="'Fira Code',Consolas,monospace" font-size="9.5" font-weight="800">PRIMARY FOCUS</text><text x="16" y="46" fill="${palette.text}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="13" font-weight="800">Systems + DSA</text></g>
      <g transform="translate(264 0)"><rect width="246" height="64" rx="10" fill="${palette.surface}" stroke="${palette.line}" /><text x="16" y="23" fill="${palette.crimson}" font-family="'Fira Code',Consolas,monospace" font-size="9.5" font-weight="800">PROFILE REPOSITORY</text><text x="16" y="46" fill="${palette.text}" font-family="'Fira Code',Consolas,monospace" font-size="13" font-weight="800">Sawan017 / main</text></g>
      <g transform="translate(0 78)"><rect width="246" height="64" rx="10" fill="${palette.surface}" stroke="${palette.line}" /><text x="16" y="23" fill="${palette.blue}" font-family="'Fira Code',Consolas,monospace" font-size="9.5" font-weight="800">PUBLIC SIGNAL</text><text x="16" y="46" fill="${palette.text}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="13" font-weight="800">6 public repositories</text></g>
      <g transform="translate(264 78)"><rect width="246" height="64" rx="10" fill="${palette.surface}" stroke="${palette.line}" /><text x="16" y="23" fill="${palette.green}" font-family="'Fira Code',Consolas,monospace" font-size="9.5" font-weight="800">DATA DISCIPLINE</text><text x="16" y="46" fill="${palette.text}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="13" font-weight="800">Verify first · omit unknowns</text></g>
    </g>
  </g>

  <line x1="682" y1="32" x2="682" y2="408" stroke="${palette.line}" stroke-dasharray="3 5" />

  <g class="id-swing">
    <g class="id-drop">
      <path d="M 930 0 L 950 42" stroke="${palette.line}" stroke-width="4" />
      <path d="M 990 0 L 970 42" stroke="${palette.line}" stroke-width="4" />
      <rect x="949" y="40" width="22" height="12" rx="3" fill="url(#id-metal)" />
      <circle cx="960" cy="59" r="8" fill="none" stroke="url(#id-metal)" stroke-width="3" />
      <rect x="957" y="66" width="6" height="12" fill="url(#id-metal)" />

      <g transform="translate(819 84)">
        <rect x="8" y="8" width="282" height="336" rx="16" fill="#000000" opacity="0.4" />
        <g clip-path="url(#id-card-clip)">
          <rect width="282" height="336" rx="16" fill="url(#id-card)" stroke="${palette.line}" stroke-width="1.2" />
          <rect x="0" y="24" width="282" height="4" fill="${palette.blue}" /><rect x="0" y="24" width="82" height="4" fill="${palette.crimson}" />
          <rect x="119" y="9" width="44" height="7" rx="3.5" fill="${palette.navy}" stroke="${palette.line}" />
          <text x="141" y="50" fill="${palette.muted}" font-family="'Fira Code',Consolas,monospace" font-size="9" font-weight="800" text-anchor="middle">CSE UNDERGRADUATE / DEV</text>
          <g transform="translate(31 65)">
            <rect width="220" height="150" rx="10" fill="${palette.navy}" stroke="${palette.blue}" />
            <g clip-path="url(#id-photo-clip)"><image href="${idAsset}" x="0" y="0" width="220" height="150" preserveAspectRatio="xMidYMid slice" /></g>
          </g>
          <text x="141" y="246" fill="${palette.text}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="17" font-weight="900" text-anchor="middle">SAWAN SAHANI</text>
          <text x="141" y="264" fill="${palette.blue}" font-family="'Fira Code',Consolas,monospace" font-size="10.5" font-weight="800" text-anchor="middle">@SAWAN017</text>
          <g transform="translate(42 282)" fill="${palette.text}">
            <rect x="0" y="0" width="2" height="20" /><rect x="5" width="1" height="20" /><rect x="9" width="3" height="20" /><rect x="16" width="1" height="20" /><rect x="21" width="4" height="20" /><rect x="29" width="1" height="20" /><rect x="34" width="2" height="20" /><rect x="41" width="3" height="20" /><rect x="49" width="1" height="20" /><rect x="54" width="4" height="20" /><rect x="63" width="2" height="20" /><rect x="70" width="1" height="20" /><rect x="75" width="3" height="20" /><rect x="83" width="2" height="20" /><rect x="90" width="4" height="20" /><rect x="99" width="1" height="20" /><rect x="104" width="3" height="20" /><rect x="112" width="1" height="20" /><rect x="117" width="4" height="20" /><rect x="126" width="2" height="20" /><rect x="133" width="1" height="20" /><rect x="138" width="3" height="20" /><rect x="146" width="2" height="20" /><rect x="153" width="4" height="20" /><rect x="162" width="1" height="20" /><rect x="167" width="3" height="20" />
            <text x="84" y="34" fill="${palette.muted}" font-family="'Fira Code',Consolas,monospace" font-size="8.5" text-anchor="middle">PROFILE / VERIFIED</text>
          </g>
          <g class="id-foil"><rect x="-80" y="0" width="140" height="336" fill="url(#id-foil)" transform="skewX(-18)" /></g>
        </g>
        <rect x="0.6" y="0.6" width="280.8" height="334.8" rx="16" fill="none" stroke="${palette.blue}" stroke-opacity="0.6" />
      </g>
    </g>
  </g>
</svg>`;
}

function connectSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 390" width="1200" height="390" role="img" aria-labelledby="connect-title connect-desc">
  <title id="connect-title">Connect with Sawan017</title>
  <desc id="connect-desc">A right-pointing character beside social cards for GitHub, LeetCode, and Codeforces.</desc>
  <defs>
    <linearGradient id="connect-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${palette.navy}" /><stop offset="1" stop-color="#0B1120" /></linearGradient>
    <radialGradient id="connect-glow" cx="50%" cy="50%" r="58%"><stop offset="0" stop-color="${palette.blue}" stop-opacity="0.22" /><stop offset="1" stop-color="${palette.blue}" stop-opacity="0" /></radialGradient>
    <style>
      @keyframes connectFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
      @keyframes connectNudge { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(5px); } }
      .connect-character { animation: connectFloat 4s ease-in-out infinite; }
      .connect-arrow { animation: connectNudge 2s ease-in-out infinite; }
      @media (prefers-reduced-motion: reduce) { .connect-character, .connect-arrow { animation: none !important; } }
    </style>
  </defs>
  <rect x="0.6" y="0.6" width="1198.8" height="388.8" rx="20" fill="url(#connect-bg)" stroke="${palette.line}" stroke-width="1.2" />
  <line x1="24" y1="1.5" x2="254" y2="1.5" stroke="${palette.blue}" stroke-width="2" />
  <line x1="254" y1="1.5" x2="354" y2="1.5" stroke="${palette.crimson}" stroke-width="2" />

  <g class="connect-character" transform="translate(30 36)">
    <ellipse cx="205" cy="268" rx="190" ry="76" fill="url(#connect-glow)" />
    <image href="${pointingAsset}" x="0" y="0" width="445" height="340" preserveAspectRatio="xMidYMid meet" />
  </g>

  <g transform="translate(500 40)">
    <text x="0" y="0" fill="${palette.blue}" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="800" letter-spacing="1.4">CONNECT / LINKS LIVE BELOW</text>
    <text x="0" y="34" fill="${palette.text}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="26" font-weight="900">Find me where I build.</text>
    <text x="0" y="59" fill="${palette.muted}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="12.5">The graphic stays visual; the clickable URLs stay in Markdown.</text>

    <g transform="translate(0 82)">
      <g><rect width="302" height="92" rx="12" fill="${palette.surface}" stroke="${palette.line}" /><circle cx="27" cy="30" r="16" fill="${palette.navy}" stroke="${palette.blue}" /><path d="M27 18c-7 0-12 5-12 12 0 5.2 3.3 9.6 7.9 11.1.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.1-4-1.1-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.7-.8 2-1.2.1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.7-5.5 6 .4.4.7 1.1.7 2.2v3.3c0 .4.2.7.8.6A12.02 12.02 0 0 0 39 30c0-7-5-12-12-12z" fill="${palette.blue}" /><text x="57" y="31" fill="${palette.text}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="15" font-weight="800">GitHub</text><text x="57" y="53" fill="${palette.blue}" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="700">@Sawan017</text><text x="57" y="72" fill="${palette.muted}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="10.5">repositories · open source</text><g class="connect-arrow" transform="translate(268 40)"><path d="M0 6h14M9 1l5 5-5 5" fill="none" stroke="${palette.blue}" stroke-width="1.8" /></g></g>
      <g transform="translate(318 0)"><rect width="302" height="92" rx="12" fill="${palette.surface}" stroke="${palette.line}" /><circle cx="27" cy="30" r="16" fill="${palette.navy}" stroke="#FFA116" /><path d="M31 19c-5-1-8 2-10 4l-4 5c-1 2-1 4 1 6l6 6c2 2 5 2 7 0l4-4c1-1 1-3 0-4-1-1-3-1-4 0l-3 3-5-5 3-3c2-2 2-4 1-6-1-1-2-2-3-2z" fill="#FFA116" /><text x="57" y="31" fill="${palette.text}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="15" font-weight="800">LeetCode</text><text x="57" y="53" fill="#FFA116" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="700">Sawan017</text><text x="57" y="72" fill="${palette.muted}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="10.5">algorithm practice</text><g class="connect-arrow" transform="translate(268 40)"><path d="M0 6h14M9 1l5 5-5 5" fill="none" stroke="#FFA116" stroke-width="1.8" /></g></g>
      <g transform="translate(0 108)"><rect width="302" height="92" rx="12" fill="${palette.surface}" stroke="${palette.line}" /><circle cx="27" cy="30" r="16" fill="${palette.navy}" stroke="#1F8ACB" /><rect x="19" y="28" width="4" height="12" fill="#FFD400" /><rect x="26" y="21" width="4" height="19" fill="#1F8ACB" /><rect x="33" y="25" width="4" height="15" fill="#ED1C24" /><text x="57" y="31" fill="${palette.text}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="15" font-weight="800">Codeforces</text><text x="57" y="53" fill="#1F8ACB" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="700">Sawan017</text><text x="57" y="72" fill="${palette.muted}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="10.5">contests · problem solving</text><g class="connect-arrow" transform="translate(268 40)"><path d="M0 6h14M9 1l5 5-5 5" fill="none" stroke="#1F8ACB" stroke-width="1.8" /></g></g>
      <g transform="translate(318 108)"><rect width="302" height="92" rx="12" fill="${palette.surface}" stroke="${palette.line}" /><circle cx="27" cy="30" r="16" fill="${palette.navy}" stroke="${palette.crimson}" /><path d="M18 23h18v14H18zM18 24l9 7 9-7" fill="none" stroke="${palette.crimson}" stroke-width="1.8" /><text x="57" y="31" fill="${palette.text}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="15" font-weight="800">Profile repo</text><text x="57" y="53" fill="${palette.crimson}" font-family="'Fira Code',Consolas,monospace" font-size="11" font-weight="700">Sawan017 / main</text><text x="57" y="72" fill="${palette.muted}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="10.5">this README lives here</text><g class="connect-arrow" transform="translate(268 40)"><path d="M0 6h14M9 1l5 5-5 5" fill="none" stroke="${palette.crimson}" stroke-width="1.8" /></g></g>
    </g>
  </g>
</svg>`;
}

writeAsset('hero.svg', heroSvg());
writeAsset('about-life.svg', aboutSvg());
writeAsset('stack.svg', stackSvg());
writeAsset('id-dashboard.svg', idDashboardSvg());
writeAsset('connect.svg', connectSvg());
