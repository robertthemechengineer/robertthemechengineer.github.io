// Optional extra micro-animations
document.addEventListener('DOMContentLoaded', () => {
  // Add a tiny tilt on link-cards when moving mouse
  const cards = document.querySelectorAll('.link-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rx = ((y / rect.height) - 0.5) * -3;
      const ry = ((x / rect.width) - 0.5) * 3;
      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'none';
    });
  });
});
