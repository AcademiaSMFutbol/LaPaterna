// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Signature counter seed — update manually as real responses arrive
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('signature-count').textContent = '1';
});
