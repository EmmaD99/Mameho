// ===============================
// MENU MOBILE & POMMES TOMBANTES
// ===============================
const menu = document.getElementById('menu');
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const appleContainer = document.querySelector('.falling-apples');

// Fonction pour créer les pommes
function createFallingApples() {
  appleContainer.innerHTML = ''; // Supprime les anciennes pommes

  const numberOfApples = 30; // nombre de pommes à générer

  for (let i = 0; i < numberOfApples; i++) {
    const apple = document.createElement('div');
    apple.classList.add('apple');

    // Position horizontale aléatoire
    apple.style.left = Math.random() * 90 + 'vw';

    // Taille aléatoire (50px à 90px)
    const size = 50 + Math.random() * 40;
    apple.style.width = size + 'px';
    apple.style.height = size + 'px';

    // Durée de chute aléatoire (3 à 6s) et délai (0 à 1.5s)
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

  createFallingApples(); // Génère les pommes à chaque ouverture
});

// Fermer le menu
closeBtn.addEventListener('click', () => {
  closeMenu();
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.menu-links a').forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

// Fonction de fermeture du menu
function closeMenu() {
  menu.classList.remove('active');
  menu.setAttribute('aria-hidden', 'true');
  openBtn.setAttribute('aria-expanded', 'false');
}

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

// Initialisation de l'observation
revealElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});
