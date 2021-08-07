const toggle = document.getElementById('toggle');
const nav = document.querySelector('nav');

// toggle nav
toggle.addEventListener('click', () => {
  nav.classList.toggle('show');
  document.body.classList.toggle('show');
})