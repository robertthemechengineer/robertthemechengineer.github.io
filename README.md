# Cleaned Structure + Consistent Pages

## New structure
- index.html
- pages/
  - projects.html
  - cad.html
  - personal.html
  - resume.html
  - contact.html
- assets/
  - css/style.css
  - js/navbar.js
  - img/  (put images here: featured_placeholder.jpg, lb_*.jpg, etc.)
  - pdf/  (put resume.pdf here)

## How to migrate your repo
1. Upload everything from this ZIP to your repo root.
2. Move any existing images into **assets/img/** and update the file names if different.
3. Put your resume file in **assets/pdf/resume.pdf**.
4. Keep favicon files in the **repo root** (favicon.ico, 16/32 pngs, apple-touch-icon).
5. Verify all pages load and links work. Hard refresh (Ctrl/Cmd+Shift+R) if styles look cached.

## Optional: Git commands
```bash
git clone https://github.com/robertthemechengineer/robertthemechengineer.github.io.git
cd robertthemechengineer.github.io
git checkout -b restructure
# Copy the files from this ZIP into the repo, then:
git add .
git commit -m "Restructure: move to /assets and /pages; unify styles; fix home link blocks"
git push -u origin restructure
# Open a PR on GitHub and merge when happy.
```
