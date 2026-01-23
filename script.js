// ===============================
// MENU MOBILE & POMMES TOMBANTES
// ===============================
const menu = document.getElementById('menu');
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');

// Fonction pour créer les pommes
function createFallingApples() {
  const appleContainer = document.querySelector('.falling-apples');
  appleContainer.innerHTML = ''; // vider les anciennes pommes

  for (let i = 0; i < 30; i++) { // 30 pommes
    const apple = document.createElement('div');
    apple.classList.add('apple');

    // Position horizontale aléatoire
    apple.style.left = Math.random() * 90 + 'vw';

    // Taille aléatoire plus grande (50-90px)
    const size = 50 + Math.random() * 40;
    apple.style.width = size + 'px';
    apple.style.height = size + 'px';

    // Durée et délai aléatoires
    apple.style.animationDuration = (3 + Math.random() * 3) + 's';
    apple.style.animationDelay = Math.random() * 1.5 + 's';

    // Rotation initiale aléatoire
    apple.style.transform = `rotate(${Math.random() * 360}deg)`;

    appleContainer.appendChild(apple);
  }
}

// Ouvrir le menu
openBtn.addEventListener('click', () => {
  menu.classList.add('active');
  menu.setAttribute('aria-hidden', 'false');
  openBtn.setAttribute('aria-expanded', 'true');

  createFallingApples(); // créer les pommes à chaque ouverture
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

revealElements.forEach(el => revealObserver.observe(el));
