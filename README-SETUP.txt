================================================================================
ARINOVA-STYLE PERSONAL BRAND — GITHUB PROFILE README SYSTEM
Developer: Sawan Sahani (@Sawan017)
System Palette: Graphite (#171B19) | Forest Green (#263C31) | Antique Gold (#B39A61)
================================================================================

TABLE OF CONTENTS
1. Overview & Architecture
2. Deliverables & Directory Structure
3. Local Preview Instructions (preview.html)
4. Character Asset Specifications (id.png & right_pointing.png)
5. Custom SVG Graphics & Animations Guide
6. GitHub Actions Automation (Contribution Snake)
7. Deployment & Git Push Instructions

--------------------------------------------------------------------------------
1. OVERVIEW & ARCHITECTURE
--------------------------------------------------------------------------------
This profile system replaces generic GitHub templates with an editorial, mature,
and restrained visual identity inspired by "The GitHub Profile Playbook". It adheres
to a strict organic forest-green and graphite palette with warm off-white and
antique-gold typography.

Design Rules Followed:
- Zero neon glows, pinks, magentas, burgundies, or generic AI abstract blobs.
- Self-contained SVG vector illustrations that scale crisply on mobile and retina screens.
- Standard CSS @keyframes animations (infinite linear orbits, masked text reveal,
  damped pendulum swing) that render reliably inside GitHub's Markdown <img> sanitizer.
- Reduced-motion accessibility (@media prefers-reduced-motion) included across all SVGs.
- Real developer identity and verified projects: ARINOVA, SourCa, CodeAscend,
  and LeetCode/Codeforces C++20 algorithmic solutions.

--------------------------------------------------------------------------------
2. DELIVERABLES & DIRECTORY STRUCTURE
--------------------------------------------------------------------------------
Your repository contains:

  ├── README.md                      # Primary GitHub Profile entrypoint
  ├── preview.html                   # Offline local visual previewer
  ├── README-SETUP.txt               # This setup and asset replacement guide
  ├── sawan-github-profile.zip       # Complete backup archive of all profile assets
  │
  ├── assets/
  │   ├── hero.svg                   # Animated hero banner (typing roles & gold coordinates)
  │   ├── about-life.svg             # Narrative developer background & disciplines card
  │   ├── id-dashboard.svg           # Hanging developer ID card with pendulum animation
  │   ├── stack.svg                  # Three-orbital rotating technology system
  │   ├── connect.svg                # 2x2 featured projects architectural display
  │   ├── id.png                     # Character portrait (transparent 32-bit RGBA)
  │   ├── right_pointing.png         # Full-body character pointing right (transparent)
  │   ├── divider.svg                # Understated section divider
  │   ├── footer.svg                 # Terminal-inspired signature footer
  │   ├── project-arinova.svg        # ARINOVA project card graphic
  │   ├── project-sourca.svg         # SourCa project card graphic
  │   ├── project-codeascend.svg     # CodeAscend project card graphic
  │   └── project-dsa.svg            # Algorithmic Solutions project card graphic
  │
  └── .github/workflows/
      └── snake.yml                  # GitHub Actions workflow for contribution snake
                                     # (Customized with #171A18, #24382F, #454C35, #69735A, #A8B59E)

--------------------------------------------------------------------------------
3. LOCAL PREVIEW INSTRUCTIONS (preview.html)
--------------------------------------------------------------------------------
To inspect the profile layout locally without pushing to GitHub:
1. Double-click "preview.html" in File Explorer, or open it in Chrome / Edge / Firefox.
2. The page renders with GitHub dark theme styling (#0d1117 container, max-width 980px).
3. All local SVGs, animations, typography, and tables render immediately offline.

--------------------------------------------------------------------------------
4. CHARACTER ASSET SPECIFICATIONS (id.png & right_pointing.png)
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

How to replace:
Simply save your exported PNG files over "assets/id.png" and "assets/right_pointing.png".
The SVGs and HTML preview will automatically pick up your new files.

--------------------------------------------------------------------------------
5. CUSTOM SVG GRAPHICS & ANIMATIONS GUIDE
--------------------------------------------------------------------------------
1. assets/hero.svg (1200x380)
   - Left side: Masked upward transition for "SAWAN SAHANI" title, dynamic cycling
     role subtitles ("Systems Architect", "Algorithmic Engineer", "3D Web Builder",
     "CSE Undergraduate"), and an animated gold scanning bar.
   - Right side: Architectural system telemetry badge with live coordinate marks.
   - Reduced motion: Displays static text "Full-Stack Systems Architect & Algorithmic Engineer".

2. assets/id-dashboard.svg (540x580)
   - Features a brushed metallic lanyard clip, security ribbon, verified hologram badge,
     barcode vector, and a subtle pendulum oscillation (+/- 1.7 degrees, 6.5s damped cycle).
   - Dynamically references "assets/id.png" with a styled silhouette fallback.

3. assets/stack.svg (1100x420)
   - Left side: 3 orbital rings with planetary nodes (Core Languages, Frontend/3D,
     Cloud/Tooling) spinning at harmonic periods (20s, 32s, 44s).
   - Right side: Clean, high-contrast categorized taxonomy breakdown.

4. assets/connect.svg (1100x480)
   - 2x2 architectural showcase featuring ARINOVA, SourCa, CodeAscend, and
     Algorithmic Solutions with tech badges and subsystem descriptions.

--------------------------------------------------------------------------------
6. GITHUB ACTIONS AUTOMATION (CONTRIBUTION SNAKE)
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
7. DEPLOYMENT & GIT PUSH INSTRUCTIONS
--------------------------------------------------------------------------------
When you are ready to publish the profile live to your GitHub account:

1. Open PowerShell or Terminal in "d:\classroom\git prof".
2. Review modified files:
   git status

3. Stage files:
   git add README.md assets/ preview.html README-SETUP.txt .github/

4. Commit the changes:
   git commit -m "Deploy ARINOVA-style animated GitHub profile README"

5. Push to GitHub:
   git push origin main

6. Visit https://github.com/Sawan017 to view your live profile!
================================================================================
