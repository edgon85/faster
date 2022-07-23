const hamburguerIcon = document.querySelector('.icon-hamburguer');
const navMenu = document.querySelector('.items');

const handleDrawer = () => {
  hamburguerIcon.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_visible');
  });
};

handleDrawer();
