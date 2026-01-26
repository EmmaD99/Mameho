// ===============================
// MENU MOBILE & POMMES TOMBANTES
// ===============================
const menu = document.getElementById('menu');
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const appleContainer = document.querySelector('.falling-apples');

function createFallingApples() {
  appleContainer.innerHTML = '';
  const numberOfApples = window.innerWidth < 600 ? 15 : 30;

  for (let i = 0; i < numberOfApples; i++) {
    const apple = document.createElement('div');
    apple.classList.add('apple', Math.random() > 0.5 ? 'red' : 'green');

    const size = Math.random() * 5 + 5; // 5vw à 10vw
    apple.style.width = size + 'vw';

    apple.style.left = Math.random() * 100 + 'vw';
    apple.style.animationDuration = (4 + Math.random() * 3) + 's';
    apple.style.animationDelay = Math.random() * 2 + 's';
    apple.style.setProperty('--wind', (Math.random() * 80 - 40) + 'px');

    appleContainer.appendChild(apple);
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
