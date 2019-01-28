// ---------------0507--------------------------
// recebe como parametro duas variaveis e uma funcao de callback
// eslint-disable-next-line no-unused-vars
function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutsideClick(event) {
    // verifica se onde to clicando pertence ao menu
    if (!element.contains(event.target)) {
      // se nao pertencer executa o callback q remove a classe active
      callback();
      // remove o data-outside
      element.removeAttribute(outside);
      // remove o evento do html
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
    }
  }
  if (!element.hasAttribute(outside)) {
    // set o data-outside
    element.setAttribute(outside, '');
    // e chama a funcao para executar as verificacoes
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
    });
  }
}
