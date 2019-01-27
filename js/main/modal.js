// ---------------0503--------------------------
function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"');
  const botaoFechar = document.querySelector('[data-modal="fechar"');
  const containerModal = document.querySelector('[data-modal="container"]');

  // funcao para abrir/fechar o modal quando clicado no botao login
  function toogleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  // funcao para verificar onde esta sendo clicado para fechar o modal
  function fecharContainerModal(event) {
    event.preventDefault();
    // eslint-disable-next-line max-len
    // o 'event.target' vai pegar exatamente onde to clicando e o 'this' sempre vai ser a section q eh o objeto sendo         mandado para a funcao
    if (event.target === this) {
      toogleModal(event);
    }
  }

  // funcao caso aperte a tecla esc tire o modal tb
  function escContainerModal(event) {
    const modalAtivo = containerModal.classList.contains('ativo');
    if (modalAtivo && event.key === 'Escape') {
      toogleModal(event);
    }
  }

  // verificando se as variaveis sao verdadeiras para chamar as funcoes
  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener('click', toogleModal);
    botaoFechar.addEventListener('click', toogleModal);
    containerModal.addEventListener('click', fecharContainerModal);
    window.addEventListener('keyup', escContainerModal);
  }
}

initModal();
