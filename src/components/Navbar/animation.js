
const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('nav-toggle'),
  closeMenu = document.getElementById('nav-close');

/* show */
toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
/* hidden */
closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

/* active and remove menu */

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  // Remove menu mobile
  navMenu.classList.remove('show');

}

navLink.forEach(n => n.addEventListener('click', linkAction));