================================================================================
ARINOVA-STYLE PERSONAL BRAND — GITHUB PROFILE README SYSTEM
Developer: Sawan Sahani (@Sawan017)
System Palette: Graphite (#171B19) | Forest Green (#263C31) | Antique Gold (#B39A61)
================================================================================

TABLE OF CONTENTS
1. Overview & Architecture
2. Root Cause Audit of Previous Image Failures
3. Deliverables & Directory Structure (SVG + PNG Dual Assets)
4. Local Preview Instructions (preview.html)
5. Character Asset Specifications (id.png & right_pointing.png)
6. Custom SVG Graphics & Animations Guide
7. GitHub Actions Automation (Contribution Snake)
8. Deployment & Git Push Instructions

--------------------------------------------------------------------------------
1. OVERVIEW & ARCHITECTURE
--------------------------------------------------------------------------------
This profile system replaces generic GitHub templates with an editorial, mature,
and restrained visual identity inspired by "The GitHub Profile Playbook". It adheres
to a strict organic forest-green and graphite palette with warm off-white and
antique-gold typography.

Design Rules Followed:
- Zero neon glows, pinks, magentas, burgundies, or generic AI abstract blobs.
- Pure XML-compliant SVG vector illustrations that scale crisply on mobile and retina screens.
- Standard CSS @keyframes animations (infinite linear orbits, masked text reveal,
  damped pendulum swing) that render reliably inside GitHub's Markdown <img> sanitizer.
- Reduced-motion accessibility (@media prefers-reduced-motion) included across all SVGs.
- Real developer identity and verified projects: ARINOVA, SourCa, CodeAscend,
  and LeetCode/Codeforces C++20 algorithmic solutions.

--------------------------------------------------------------------------------
2. ROOT CAUSE AUDIT OF PREVIOUS IMAGE FAILURES
--------------------------------------------------------------------------------
Previous image breakdowns (broken icons & blue underlined links) were caused by:

1. Invalid XML Entities inside SVG text elements:
   In standard XML (unlike HTML), named entities like "&bull;" are undefined and
   cause browsers and GitHub's SVG image decoders to crash with a fatal XML
   Parsing Error ("Unexpected entity: bull"). All entities have been replaced with
   valid Unicode glyphs ("•", "—", "→", etc.).

2. Invalid SVG Root Attributes:
   SVGs had 'width="100%" height="auto"'. "auto" is an invalid attribute in the
   SVG presentation specification. All SVGs now specify exact explicit dimensions
   matching their viewBox (e.g., width="1200" height="360").

3. Sub-resource Reference in id-dashboard.svg:
   An '<image href="assets/id.png">' tag inside id-dashboard.svg violated browser
   secure sub-resource policies for standalone <img> tags. This was replaced with
   a self-contained vector silhouette path.

4. Path Resolution Syntax in README.md:
   References have been normalized to relative Markdown paths ("./assets/...")
   matching standard GitHub Flavored Markdown repository resolution.

5. High-Resolution PNG Fallbacks Generated:
   For environments or network policies that restrict SVG execution, matching
   high-resolution PNG assets have been generated and bundled in "assets/*.png".

--------------------------------------------------------------------------------
3. DELIVERABLES & DIRECTORY STRUCTURE
--------------------------------------------------------------------------------
Your repository contains:

  ├── README.md                      # Primary GitHub Profile entrypoint
  ├── preview.html                   # Offline local visual previewer
  ├── README-SETUP.txt               # This setup and asset replacement guide
  ├── sawan-github-profile.zip       # Complete backup archive of all profile assets
  │
  ├── assets/
  │   ├── hero.svg / hero.png        # Animated hero banner & PNG fallback
  │   ├── about-life.svg / .png      # Developer background card & PNG fallback
  │   ├── id-dashboard.svg / .png    # Hanging developer ID card & PNG fallback
  │   ├── stack.svg / stack.png      # Three-orbital rotating tech system & PNG
  │   ├── connect.svg / connect.png  # 2x2 featured projects architectural display
  │   ├── id.png                     # Character portrait (transparent 32-bit RGBA)
  │   ├── right_pointing.png         # Full-body character pointing right
  │   ├── divider.svg / divider.png  # Section divider
  │   ├── footer.svg / footer.png    # Terminal signature footer
  │   ├── project-arinova.svg / .png # ARINOVA project card graphic
  │   ├── project-sourca.svg / .png  # SourCa project card graphic
  │   ├── project-codeascend.svg/.png# CodeAscend project card graphic
  │   └── project-dsa.svg / .png     # Algorithmic Solutions project card graphic
  │
  └── .github/workflows/
      └── snake.yml                  # GitHub Actions workflow for contribution snake
                                     # (Customized with #171A18, #24382F, #454C35, #69735A, #A8B59E)

--------------------------------------------------------------------------------
4. LOCAL PREVIEW INSTRUCTIONS (preview.html)
--------------------------------------------------------------------------------
To inspect the profile layout locally without pushing to GitHub:
1. Double-click "preview.html" in File Explorer, or open it in Chrome / Edge / Firefox.
2. The page renders with GitHub dark theme styling (#0d1117 container, max-width 980px).
3. All local SVGs, animations, typography, and tables render immediately offline.

--------------------------------------------------------------------------------
5. CHARACTER ASSET SPECIFICATIONS (id.png & right_pointing.png)
--------------------------------------------------------------------------------
Per the design playbook, placeholder 32-bit transparent RGBA PNG assets are
currently bundled. If you have personal portrait photos, you can generate or illustrate
custom character assets using the following exact specifications:

Asset A: assets/id.png
- Purpose: Displayed inside the hanging ID badge (assets/id-dashboard.svg).
- Style: Polished, semi-realistic illustrated portrait or stylized bust.
- Subject: Sawan Sahani (chest-up composition, full head visible, natural hairstyle,
  glasses, natural skin tone, understated dark green or charcoal attire).
- Expression: Confident, calm, approachable.
- Format: PNG with true 32-bit alpha transparency (RGBA).
  IMPORTANT: No background color, no white square, no baked-in checkerboard pattern.
- Resolution: Recommended 600x600px up to 1000x1000px square.

Asset B: assets/right_pointing.png
- Purpose: Illustrated guide standing on the left pointing towards featured content.
- Style: Identical illustrated person, consistent attire, art style, and proportions.
- Pose: Full-body, standing naturally on the left, gesturing/pointing towards the RIGHT.
- Format: PNG with true 32-bit alpha transparency (RGBA).
  Transparent margins around the character. No text, logos, or background objects.
- Resolution: Recommended 800x1200px.

--------------------------------------------------------------------------------
6. CUSTOM SVG GRAPHICS & ANIMATIONS GUIDE
--------------------------------------------------------------------------------
1. assets/hero.svg (1200x360)
   - Left side: Masked upward transition for "SAWAN SAHANI" title, dynamic cycling
     role subtitles ("Systems Architect", "Algorithmic Engineer", "3D Web Builder",
     "CSE Undergraduate"), and an animated gold scanning bar.
   - Right side: Architectural system telemetry badge with live coordinate marks.
   - Reduced motion: Displays static text "Full-Stack Systems Architect & Algorithmic Engineer".

2. assets/id-dashboard.svg (540x430)
   - Features a brushed metallic lanyard clip, security ribbon, verified hologram badge,
     barcode vector, and a subtle pendulum oscillation (+/- 1.7 degrees, 6.5s damped cycle).
   - Clean vector silhouette fallback included.

3. assets/stack.svg (1200x370)
   - Left side: 3 orbital rings with planetary nodes (Core Languages, Frontend/3D,
     Cloud/Tooling) spinning at harmonic periods (20s, 32s, 44s).
   - Right side: Clean, high-contrast categorized taxonomy breakdown.

4. assets/connect.svg (1200x540)
   - 2x2 architectural showcase featuring ARINOVA, SourCa, CodeAscend, and
     Algorithmic Solutions with tech badges and subsystem descriptions.

--------------------------------------------------------------------------------
7. GITHUB ACTIONS AUTOMATION (CONTRIBUTION SNAKE)
--------------------------------------------------------------------------------
The repository includes ".github/workflows/snake.yml", preconfigured to run every 24
hours and on every push to main. It generates the contribution snake SVG animation in the
"output" branch using our custom forest-green palette:
  - Background: #171A18
  - Grid dots:   #24382F
  - Level 1:     #454C35
  - Level 2:     #69735A
  - Level 3:     #A8B59E

To enable:
Go to your repository Settings > Actions > General > Workflow permissions,
and ensure "Read and write permissions" is selected.

--------------------------------------------------------------------------------
8. DEPLOYMENT & GIT PUSH INSTRUCTIONS
--------------------------------------------------------------------------------
When you are ready to publish the profile live to your GitHub account:

1. Review modified files:
   git status

2. Stage and commit:
   git add -A
   git commit -m "Fix broken SVG image references, XML entities, and add PNG fallbacks"

3. Push to GitHub:
   git push origin main
================================================================================
