================================================================================
ROYAL SAPPHIRE PERSONAL BRAND — GITHUB PROFILE README SYSTEM
Developer: Sawan Sahani (@Sawan017)
System Palette:
  MAIN BACKGROUND:    #101B35 (Deep Midnight Blue)
  SECTION BACKGROUND: #142441
  CARD BACKGROUND:    #1B3155
  ELEVATED SURFACE:   #223B63
  ROYAL BLUE ACCENT:  #4169C1
  SAPPHIRE HIGHLIGHT: #6289E8
  SILVER TEXT:        #DCE4F0
  SECONDARY TEXT:     #AAB8CE
  BORDER:             #30486D
================================================================================

TABLE OF CONTENTS
1. Overview & Royal Sapphire Design System
2. Color Token Architecture
3. Deliverables & Directory Structure
4. Local Preview Instructions (preview.html)
5. Character Asset Specifications (id.png & right_pointing.png)
6. Custom SVG Graphics & Animations Guide
7. GitHub Actions Automation (Contribution Snake)
8. Deployment & Git Push Instructions

--------------------------------------------------------------------------------
1. OVERVIEW & ROYAL SAPPHIRE DESIGN SYSTEM
--------------------------------------------------------------------------------
This profile system transforms the developer profile into an editorial, high-contrast,
and distinctly midnight-blue personal brand.

Design Rules Followed:
- Strict midnight-blue foundation (#101B35) with elevated navy surfaces (#142441 / #1B3155).
- Restrained royal-blue (#4169C1) and sapphire highlights (#6289E8).
- High-contrast silver (#DCE4F0) and slate-silver secondary (#AAB8CE) typography.
- Zero green, olive, gold, burgundy, pink, magenta, or neon glows.
- Pure XML-compliant SVG vector illustrations with explicit width/height dimensions.
- Standard CSS @keyframes animations with @media (prefers-reduced-motion) fallbacks.
- Verified developer projects: ARINOVA, SourCa, CodeAscend, and C++20 Algorithmic Solutions.

--------------------------------------------------------------------------------
2. COLOR TOKEN ARCHITECTURE
--------------------------------------------------------------------------------
- Canvas Foundation:    #101B35  (Visibly deep midnight blue, never black or charcoal)
- Section Surfaces:     #142441  (Navy panels with clean separation)
- Card Surfaces:        #1B3155  (Distinct interactive cards)
- Elevated Surface:     #223B63  (Interactive pills, badges, active states)
- Primary Accent:       #4169C1  (Royal Blue structural borders and highlights)
- Core Highlight:       #6289E8  (Vibrant Sapphire focus accents and status dots)
- Primary Typography:   #DCE4F0  (Crisp Silver text)
- Secondary Typography: #AAB8CE  (Muted Silver-Slate descriptions)
- Precision Borders:    #30486D  (Subtle structural lines)

--------------------------------------------------------------------------------
3. DELIVERABLES & DIRECTORY STRUCTURE
--------------------------------------------------------------------------------
Your repository contains:

  ├── README.md                      # Primary GitHub Profile entrypoint
  ├── preview.html                   # Offline local visual previewer
  ├── README-SETUP.txt               # This setup and color reference guide
  ├── sawan-github-profile.zip       # Complete backup archive of all profile assets
  │
  ├── assets/
  │   ├── hero.svg / hero.png        # Animated hero banner & PNG fallback
  │   ├── about-life.svg / .png      # Developer background card & PNG fallback
  │   ├── id-dashboard.svg / .png    # Hanging developer ID card & PNG fallback
  │   ├── stack.svg / stack.png      # Three-orbital rotating tech system & PNG
  │   ├── connect.svg / connect.png  # 2x2 featured projects architectural display
  │   ├── id.png                     # Character portrait placeholder
  │   ├── right_pointing.png         # Full-body character pointing right
  │   ├── divider.svg / divider.png  # Section divider
  │   ├── footer.svg / footer.png    # Terminal signature footer
  │   ├── project-arinova.svg / .png # ARINOVA project card graphic
  │   ├── project-sourca.svg / .png  # SourCa project card graphic
  │   ├── project-codeascend.svg/.png# CodeAscend project card graphic
  │   └── project-dsa.svg / .png     # Algorithmic Solutions project card graphic
  │
  └── .github/workflows/
      └── snake.yml                  # Contribution snake workflow (#101B35 to #6289E8)

--------------------------------------------------------------------------------
4. LOCAL PREVIEW INSTRUCTIONS (preview.html)
--------------------------------------------------------------------------------
To inspect the profile layout locally without pushing to GitHub:
1. Double-click "preview.html" in File Explorer, or open it in Chrome / Edge / Firefox.
2. The page renders with the complete Royal Sapphire theme (#101B35 container, max-width 980px).
3. All local SVGs, animations, typography, and tables render immediately offline.

--------------------------------------------------------------------------------
5. CHARACTER ASSET SPECIFICATIONS (id.png & right_pointing.png)
--------------------------------------------------------------------------------
If you have personal portrait photos, you can generate or illustrate custom character
assets using the following specifications:

Asset A: assets/id.png
- Purpose: Displayed inside the hanging ID badge (assets/id-dashboard.svg).
- Style: Polished, semi-realistic illustrated portrait or stylized bust.
- Attire: Midnight-blue or dark navy apparel with sapphire accents.
- Format: PNG with true 32-bit alpha transparency (RGBA, no background).
- Resolution: Recommended 600x600px up to 1000x1000px square.

Asset B: assets/right_pointing.png
- Purpose: Illustrated guide standing on the left pointing towards featured content.
- Style: Identical illustrated person in consistent attire and art style.
- Pose: Full-body, standing naturally on the left, gesturing towards the RIGHT.
- Format: PNG with true 32-bit alpha transparency (RGBA).
- Resolution: Recommended 800x1200px.

--------------------------------------------------------------------------------
6. GITHUB ACTIONS AUTOMATION (CONTRIBUTION SNAKE)
--------------------------------------------------------------------------------
The workflow ".github/workflows/snake.yml" generates the contribution snake SVG in the
"output" branch using the Royal Sapphire palette:
  - Background: #101B35
  - Grid dots:   #1B3155
  - Level 1:     #30486D
  - Level 2:     #4169C1
  - Level 3:     #6289E8

--------------------------------------------------------------------------------
7. DEPLOYMENT & GIT PUSH INSTRUCTIONS
--------------------------------------------------------------------------------
To publish the profile live:
1. git add -A
2. git commit -m "Redesign GitHub profile system with Royal Sapphire palette"
3. git push origin main
================================================================================
