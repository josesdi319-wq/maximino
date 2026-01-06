// Animación reveal al hacer scroll
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Efecto dinámico del rol
const roleText = document.querySelector(".role");

const roles = [
  "Licenciatura en Finanzas · Informática",
  "Perfil Administrativo y Tecnológico",
  "Análisis · Organización · Programación"
];

let current = 0;

setInterval(() => {
  roleText.style.opacity = 0;

  setTimeout(() => {
    current = (current + 1) % roles.length;
    roleText.textContent = roles[current];
    roleText.style.opacity = 1;
  }, 400);
}, 4500);
