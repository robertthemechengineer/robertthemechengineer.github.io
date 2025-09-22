# Merged Home + Navbar (Forest Green)
This package replaces your home page and consolidates styles into ONE file (style.css).

Files:
- index.html  — home page with sticky navbar + all upgrades
- style.css   — forest green theme + navbar + homepage sections (single file)
- navbar.js   — mobile menu + scroll shadow
- images/logo.svg — RS logo used in the navbar

How to deploy:
1) Upload all files to your repo root. Overwrite existing index.html and style.css.
2) Remove any older "style-additions.css" or "style-additions-navbar.css" to avoid conflicts.
3) Ensure you still have your other pages (projects.html, cad.html, personal.html, resume.html, contact.html).
4) Optional: add a real image at images/featured_placeholder.jpg and update the src if needed.
5) Optional: add favicon.ico at repo root and keep <link rel="icon" href="favicon.ico"> in <head>.

Common fixes if something looks off:
- Clear cache (Ctrl+F5). GitHub Pages can cache CSS.
- Make sure index.html references only "style.css" (remove extra style-additions links).
- Ensure navbar.js is present and loaded at the bottom of index.html.
- Confirm "images/logo.svg" path is correct and case matches exactly.
