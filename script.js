/* ===============================
   MENU MOBILE
================================ */
const menu = document.getElementById('menu');
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');

// Ouvrir le menu
openBtn.addEventListener('click', () => {
  menu.classList.add('active');
  menu.setAttribute('aria-hidden', 'false');
  openBtn.setAttribute('aria-expanded', 'true');
});

// Fermer le menu
closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  menu.setAttribute('aria-hidden', 'true');
  openBtn.setAttribute('aria-expanded', 'false');
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.menu-links a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    menu.setAttribute('aria-hidden', 'true');
    openBtn.setAttribute('aria-expanded', 'false');
  });
});

/* ===============================
   REVEAL SECTIONS AU SCROLL
================================ */
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));
