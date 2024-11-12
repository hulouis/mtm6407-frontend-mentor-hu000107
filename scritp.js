document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelector('.navbar-toggler');
  const overlay = document.querySelector('.overlay');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const closeButton = document.querySelector('.menu-close-btn');


  function isMobile() {
    return window.innerWidth < 768;
  }


  toggler.addEventListener('click', () => {
    if (isMobile()) {
      overlay.classList.toggle('show');
      navbarCollapse.classList.toggle('show');
    }
  });


  overlay.addEventListener('click', () => {
    overlay.classList.remove('show');
    navbarCollapse.classList.remove('show');
  });


  closeButton.addEventListener('click', () => {
    overlay.classList.remove('show');
    navbarCollapse.classList.remove('show');
  });


  navbarCollapse.addEventListener('click', (e) => {
    if (isMobile()) {
      e.stopPropagation();
    }
  });


  window.addEventListener('resize', () => {
    if (!isMobile()) {
      overlay.classList.remove('show');
      navbarCollapse.classList.remove('show');
    }
  });
});
