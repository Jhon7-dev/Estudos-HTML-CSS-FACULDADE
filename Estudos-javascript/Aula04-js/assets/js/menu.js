const btnMobile = document.getElementById("btn-mobile");

function toggleMenu() {
  const menu = document.getElementById("menu");
  const hamburger = document.getElementById("hamburger");

  menu.classList.toggle("active");
  hamburger.classList.toggle("active");

  const active = menu.classList.contains("active");
  btnMobile.setAttribute("aria-expanded", active);

  btnMobile.setAttribute("aria-label", active ? "Fechar Menu" : "Abrir Menu");
}

btnMobile.addEventListener("click", toggleMenu);
