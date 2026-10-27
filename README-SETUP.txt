================================================================================
SAWAN017 / PROFILE README — SETUP & PUBLISH GUIDE
================================================================================

This package is a GitHub profile README, not a separate website. It follows the
attached Profile Playbook: deep navy, electric blue, crimson accents, large type,
rounded cards, five custom SVG sections, a real-alpha portrait pair, and one
contribution visualization.

PACKAGE CONTENTS
----------------
README.md
assets/hero.svg
assets/about-life.svg
assets/stack.svg
assets/id-dashboard.svg
assets/connect.svg
assets/id.png
assets/right_pointing.png
preview.html
README-SETUP.txt
.github/workflows/snake.yml

The two PNG files are true-alpha character assets. The SVGs embed the required
PNG data directly, so the five profile graphics do not request external image
files when GitHub renders them.

FACT-CHECKING RULE
------------------
The public GitHub profile was checked on October 26, 2026. The README uses:

- Sawan Sahani / @Sawan017, from the public profile.
- 6 public repositories, 1 follower, 0 following, and an April 3, 2026 profile
  creation date, from the public profile snapshot.
- CodeAscend, leetcode-solutions, and codeforces-solutions, because those public
  repositories are present under @Sawan017.
- ARINOVA only as the project documented inside the public CodeAscend README.
- SourCa as unverified because no public repository with that name was found.

No awards, certifications, commit totals, streaks, project metrics, or private
email address were invented. LeetCode and Codeforces links are retained from the
existing profile links, but those platforms returned anti-bot challenge pages in
the local HTTP check; review those links after publishing.

LOCAL PREVIEW
-------------
Open preview.html in a browser. For a local HTTP preview, run a static server
from this repository root, then open /preview.html. The file is intentionally
dependency-free and responsive.

This workspace also includes a tiny local preview server:

  node preview-server.js

Then open http://127.0.0.1:4173/preview.html. It serves only the local preview
files and is not part of the GitHub profile or upload ZIP.

REBUILD THE FIVE SVGs
---------------------
The reproducible generator is build-profile.js. It reads assets/id.png and
assets/right_pointing.png, embeds them as data URIs, and writes:

  node build-profile.js

The generated SVGs use CSS animations with readable default states and a
prefers-reduced-motion fallback. They contain no JavaScript, foreignObject, or
external asset request.

VERIFY BEFORE UPLOAD
--------------------
Run the focused audit:

  node verify-profile.js

The audit checks required files, local README wiring, embedded image data,
transparent PNG corners, SVG structure, unsupported external image references,
and duplicate contribution visualizations.

The intended render checks are:

  - hero.svg, about-life.svg, stack.svg, id-dashboard.svg, connect.svg
  - 0s, 2s, 5s, 9s, and 13s animation snapshots
  - reduced-motion / static fallback state
  - an img-element render, not only an inline-SVG preview
  - mobile-width readability and clipping

The browser preview is evidence for local rendering only. GitHub may sanitize
some SVG features, so the final check must still be done on the live profile.

PUBLISH TO THE PROFILE REPOSITORY
---------------------------------
1. Open https://github.com/Sawan017/Sawan017.
2. Replace the old README.md with the new README.md.
3. Upload the complete assets/ folder, preserving filenames and case.
4. Keep .github/workflows/snake.yml if the contribution snake should refresh.
5. Commit with a clear message such as “Build animated profile README”.
6. Visit https://github.com/Sawan017 and check all five graphics, project links,
   transparency, mobile width, and the contribution image.

Do not upload only the ZIP archive. GitHub needs README.md and the actual
assets/ files in the profile repository.

UPLOAD-READY ZIP
----------------
The repository-level archive is:

  sawan-github-profile-upload.zip

It contains the README, five SVGs, both PNG character assets, preview.html,
README-SETUP.txt, and the contribution workflow. It intentionally excludes the
local build and audit scripts.

No push or publish action was performed by this build.
