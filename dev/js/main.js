var navBtn = document.getElementById('main-nav-btn'),
    navCloseBtn = document.getElementById('close-btn-main-nav'),
    nav = document.getElementById('main-nav');

navBtn.addEventListener('click',popUpNav);
function popUpNav() {
  nav.style.display = 'block';
}
navCloseBtn.addEventListener('click',closeNav);
function closeNav() {
  nav.style.display = 'none';
}
