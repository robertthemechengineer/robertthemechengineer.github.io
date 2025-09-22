# Mini Preview Bars (CAD, Personal, Resume)
This update adds a horizontally scrollable "mini preview bar" to CAD, Personal, and Resume pages.

Files:
- cad.html       — updated with preview bar linking to anchors on the page
- personal.html  — updated with preview bar linking to project sections
- resume.html    — updated with preview bar linking to resume sections + PDF
- style-additions-previews.css — new styles for the preview ribbon

How to install:
1) Upload **cad.html**, **personal.html**, **resume.html** to your repo root (replace existing files).
2) Open **style.css** → **Edit** → paste the contents of **style-additions-previews.css** at the end → Save.
3) (Optional) Add thumbnails in **images/** and update the `src` in the preview cards.
   - Example: images/cad_assembly_thumb.jpg, images/personal_tracker_thumb.jpg

Notes:
- The preview chips use anchors like #cad-assembly-1 or #exp — clicking a chip scrolls users directly to that section.
- Works with your existing forest-green theme and AOS animations.
