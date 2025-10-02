document.addEventListener('DOMContentLoaded', () => {
  /* AOS (safe init) */
  if (window.AOS) AOS.init({ once:true, duration:700, easing:'ease-out-cubic' });

  /* Mobile nav toggle */
  const toggle = document.querySelector('.menu-toggle');
  const links  = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('show');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* Header shadow on scroll */
  const header = document.querySelector('.site-header');
  const setShadow = () => header && header.classList.toggle('scrolled', window.scrollY > 8);
  setShadow(); window.addEventListener('scroll', setShadow, { passive:true });

  /* Home: count-up metrics (if present) */
  const metricSpans = document.querySelectorAll('.metric span[data-count-to]');
  if (metricSpans.length) {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fmt = (n, el) => {
      const orig = el.textContent.trim();
      if (orig.includes('+')) return Math.round(n) + '+';
      if (orig.includes('%')) return Math.round(n) + '%';
      return Math.round(n);
    };
    const animate = (el) => {
      const end = Number(el.getAttribute('data-count-to')) || 0;
      const start = 0;
      if (reduced || end === 0) { el.textContent = fmt(end, el); el.closest('.metric')?.classList.add('done'); return; }
      const dur = 5000, t0 = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - t0)/dur);
        el.textContent = fmt(start + (end - start) * (1 - Math.pow(1 - p, 3)), el);
        if (p < 1) requestAnimationFrame(tick); else el.closest('.metric')?.classList.add('done');
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting){ metricSpans.forEach(animate); io.disconnect(); } });
    }, {threshold: 0.4});
    const metrics = document.querySelector('.metrics');
    if (metrics) io.observe(metrics);
  }

  /* ===== Shared Gallery Lightbox (Personal & CAD) ===== */
  const dlg  = document.getElementById('lightbox');
  const img  = document.getElementById('lbImg');
  const cap  = document.getElementById('lbCaption');
  if (dlg && img && cap) {
    const btnX = dlg.querySelector('.lightbox-close');
    const btnP = dlg.querySelector('.lightbox-prev');
    const btnN = dlg.querySelector('.lightbox-next');
    let gallery = []; let idx = 0; let title = ''; let lastFocus = null;

    const preloadAround = (i) => {
      if (!gallery.length) return;
      const prev = (i - 1 + gallery.length) % gallery.length;
      const next = (i + 1) % gallery.length;
      [prev, next].forEach(n => { const im = new Image(); im.src = gallery[n].src; });
    };

    const openAt = (i) => {
      idx = (i + gallery.length) % gallery.length;
      const item = gallery[idx];
      img.src = item.src;
      img.alt = item.alt || title || 'Image';
      cap.textContent = (title ? title + ' — ' : '') + (idx + 1) + '/' + gallery.length;
      preloadAround(idx);
    };

    const openFromLink = (a) => {
      lastFocus = document.activeElement;
      const fig = a.closest('figure');
      title = fig ? (fig.querySelector('figcaption')?.textContent || fig.querySelector('h3')?.textContent || '') : '';
      try {
        const list = JSON.parse(a.getAttribute('data-gallery') || '[]');
        gallery = list.map((src, i) => ({ src, alt: a.querySelector('img')?.alt || (title ? `${title} ${i+1}` : 'Image') }));
      } catch {
        gallery = [{ src: a.href, alt: a.querySelector('img')?.alt || title || 'Image' }];
      }
      if (typeof dlg.showModal === 'function') dlg.showModal();
      openAt(0); btnX && btnX.focus();
    };

    document.querySelectorAll('.gallery-link').forEach((a, i) => {
      a.addEventListener('click', e => { e.preventDefault(); openFromLink(a); });
    });

    btnX && btnX.addEventListener('click', () => { dlg.close(); if (lastFocus && document.body.contains(lastFocus)) lastFocus.focus(); });
    btnP && btnP.addEventListener('click', () => openAt(idx - 1));
    btnN && btnN.addEventListener('click', () => openAt(idx + 1));
    dlg.addEventListener('click', e => { if (e.target === dlg) { dlg.close(); if (lastFocus && document.body.contains(lastFocus)) lastFocus.focus(); } });

    document.addEventListener('keydown', e => {
      if (!dlg.open) return;
      if (e.key === 'Escape') dlg.close();
      if (e.key === 'ArrowLeft')  openAt(idx - 1);
      if (e.key === 'ArrowRight') openAt(idx + 1);
    });

    // Touch swipe
    let startX = null;
    dlg.addEventListener('touchstart', e => { startX = e.changedTouches?.[0]?.clientX ?? null; }, { passive:true });
    dlg.addEventListener('touchend',   e => {
      if (startX == null) return;
      const dx = e.changedTouches?.[0]?.clientX - startX;
      if (Math.abs(dx) > 40) openAt(idx + (dx < 0 ? 1 : -1));
      startX = null;
    }, { passive:true });
  }

  /* Auto-count photo pills for any .gallery-link / .album-count */
  document.querySelectorAll('.gallery-link').forEach(link => {
    const wrap = link.querySelector('.thumb-wrap');
    if (!wrap) return;
    let n = 1;
    try {
      const arr = JSON.parse(link.getAttribute('data-gallery') || '[]');
      if (Array.isArray(arr) && arr.length) n = arr.length;
    } catch {}
    let badge = wrap.querySelector('.album-count');
    if (!badge) { badge = document.createElement('span'); badge.className = 'album-count'; wrap.appendChild(badge); }
    badge.textContent = `${n} photo${n === 1 ? '' : 's'}`;
  });
});
