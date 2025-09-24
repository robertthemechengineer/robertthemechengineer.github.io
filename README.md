# Portfolio Website – Development Checklist

This repository hosts my personal portfolio site.  
Below is the roadmap of improvements and polish tasks, broken down by page and general site considerations.

---

## 🏠 Home Page (`index.html`)
- [x] Reduce horizontal spacing (tighten container padding on wide screens).  
- [x] Fix cert logo sizing (consistent scaling inside cards).  
- [x] Add image to hero bar (background illustration or supporting graphic).  
- [x] Increase metric counter bars to 4 (balanced 2×2 grid on desktop, stacked on mobile).  

---

## 📂 Projects Page (`projects.html`)
- [ ] Convert to card/grid layout consistent with triplets.  
- [ ] Add `aria-label`s + hover/focus states for accessibility.  
- [ ] Use consistent overline labels (“Case Study”, “CAD Project”, etc.).  
- [ ] Consider filters/tags (RCM, CAD, RCA).  
- [ ] Responsive layout: 2-column on tablets, 1-column on phones.  

---

## 🛠 CAD Page (`cad.html`)
- [x] Showcase multiple CAD projects in card layout (thumbnails + short summaries).  
- [x] Add lightbox/gallery for detailed CAD images.  
- [x] Ensure images have descriptive `alt` text.  
- [x] Keep typography and spacing consistent with homepage.  
- [ ] Add download links for CAD/PDF files (if appropriate).  
- [ ] Add a single button to download full PDF CAD portfolio.  

---

## 📄 Resume Page (`resume.html`)
- [ ] Ensure inline PDF viewer works across devices.  
- [ ] Provide both inline view and clear download link.  
- [ ] Match styling with homepage feature card.  

---

## 👤 Personal Page (`personal.html`)
- [ ] Organize projects into themed sections (tools, utilities, experiments).  
- [ ] Add visuals/screenshots for each project.  
- [ ] Keep styling consistent with Projects and CAD pages.  

---

## 🌐 General Site Polish
- [ ] Add Open Graph/Twitter meta tags for better social link previews.  
- [ ] Check keyboard navigation (focus states, skip link usability).  
- [ ] Add performance tweaks (preload hero image, defer non-critical JS).  
- [ ] Verify mobile padding and scaling (reduce excess vertical whitespace).  
- [ ] Review all `alt` text and `aria-label`s once proper content/images are added.  

---

## 🔒 Security & Verification
- [ ] Ensure all links to external sites use `rel="noopener noreferrer"` when `target="_blank"`.  
- [ ] Verify all assets load over HTTPS (no mixed-content warnings).  
- [ ] Add a **Content Security Policy (CSP)** via `<meta http-equiv="Content-Security-Policy" ...>` if needed.  
- [ ] Check that forms (if added) use HTTPS and do not expose emails directly.  
- [ ] Confirm GitHub Pages is enforcing HTTPS (enabled in repo settings).  
- [ ] Optional: Add a `security.txt` file at `/.well-known/security.txt` to declare security contact info.  

---

### ✅ Progress
As tasks are completed, tick them off here to track the site’s evolution.
