// ---------------0509--------------------------
// import outsideClick from './outsideclick.js';

function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  function openMenu(event) {
    event.preventDefault();
    menuList.classList.toggle('active');
    menuButton.classList.toggle('active');
    // eslint-disable-next-line no-undef
    outsideClick(menuList, ['touchstart', 'click'], () => {
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
    });
  }
  if (menuButton && menuList) {
    ['touchstart', 'click'].forEach((userEvent) => {
      menuButton.addEventListener(userEvent, openMenu);
    });
  }
}

initMenuMobile();
