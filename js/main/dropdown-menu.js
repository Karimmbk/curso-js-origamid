// ---------------0507--------------------------
// import outsideClick from './outsideclick.js'; //erro de duplicidade por causa do compilador

function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function handleCkick(event) {
    event.preventDefault();
    // ativo a classe no menu
    this.classList.add('active');
    // chamo a funcao q esta em outro arquivo (outsideclick.js)
    // manda como parametro o menu e uma funcao de callback
    // eslint-disable-next-line no-undef
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }
  // verifico se existe o dropdownMenus
  if (dropdownMenus.length) {
    // passo por cada menu para fazer o evento de click/touch
    dropdownMenus.forEach((menu) => {
      ['touchstart', 'click'].forEach((userEvent) => {
        menu.addEventListener(userEvent, handleCkick);
      });
    });
  }
}

initDropdownMenu();
