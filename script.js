// ===============================
// MENU MOBILE & POMMES TOMBANTES
// ===============================
const menu = document.getElementById('menu');
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const appleContainer = document.querySelector('.falling-apples');

function createFallingApples() {
  appleContainer.innerHTML = '';
  const numberOfApples = 30; // même nombre desktop & mobile

  for (let i = 0; i < numberOfApples; i++) {
    const apple = document.createElement('div');
    apple.classList.add('apple', Math.random() > 0.5 ? 'red' : 'green');

    // taille aléatoire en pixels (desktop & mobile cohérent)
    const size = Math.random() * 30 + 30; // 30px à 60px
    apple.style.width = size + 'px';
    apple.style.height = size + 'px';

    // position horizontale aléatoire
    apple.style.left = Math.random() * (window.innerWidth - size) + 'px';

    // durée et délai aléatoire
    apple.style.animationDuration = (4 + Math.random() * 3) + 's';
    apple.style.animationDelay = Math.random() * 2 + 's';
    apple.style.setProperty('--wind', (Math.random() * 80 - 40) + 'px');

    appleContainer.appendChild(apple);

    // ⚡️ Force le reflow pour que l'animation démarre correctement sur mobile
    apple.getBoundingClientRect();
  }
}

openBtn.addEventListener('click', () => {
  menu.classList.add('active');
  menu.setAttribute('aria-hidden', 'false');
  openBtn.setAttribute('aria-expanded', 'true');
  createFallingApples();
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  menu.setAttribute('aria-hidden', 'true');
  openBtn.setAttribute('aria-expanded', 'false');
});

document.querySelectorAll('.menu-links a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    menu.setAttribute('aria-hidden', 'true');
    openBtn.setAttribute('aria-expanded', 'false');
  });
});

// ===============================
// REVEAL SECTIONS AU SCROLL
// ===============================
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});

// ===============================
// CONTACT - VISUEL UNIQUEMENT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form-premium");

  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Merci pour votre message 🌿");
    });
  }
});

// ===============================
// CARROUSEL PHOTOS
// ===============================
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');
let currentIndex = 0;

function updateCarousel() {
  track.style.transform = 'translateX(-' + currentIndex * 100 + '%)';
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});
