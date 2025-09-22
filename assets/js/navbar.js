document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-toggle');
  const links = document.getElementById('nav-links');
  if (btn && links) {
    btn.addEventListener('click', () => {
      const show = links.classList.toggle('show');
      btn.setAttribute('aria-expanded', show ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('show');
      btn.setAttribute('aria-expanded', 'false');
    }));
  }
  const onScroll = () => {
    if (window.scrollY > 4) document.body.classList.add('scrolled');
    else document.body.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});
});