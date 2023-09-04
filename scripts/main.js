// Christina Forbes 4/5/2021

function toggleMenu() {
  const menu = document.querySelector('.nav__menu');
  menu.classList.toggle('nav__menu_is-open');
}

document.querySelector('.nav__button').addEventListener('click', toggleMenu);