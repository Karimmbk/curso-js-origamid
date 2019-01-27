// ---------------0503--------------------------
function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"');
  const botaoFechar = document.querySelector('[data-modal="fechar"');
  const containerModal = document.querySelector('[data-modal="container"]');

  // funcao para abrir o modal quando clicado no botao login
  function abrirModal(event) {
    event.preventDefault();
    containerModal.classList.add('ativo');
  }

  // funcao para fechar o modal
  function fecharModal(event) {
    event.preventDefault();
    containerModal.classList.remove('ativo');
  }

  // funcao para verificar onde esta sendo clicado para fechar o modal
  function fecharContainerModal(event) {
    event.preventDefault();
    // eslint-disable-next-line max-len
    // o 'event.target' vai pegar exatamente onde to clicando e o 'this' sempre vai ser a section q eh o objeto sendo         mandado para a funcao
    if (event.target === this) {
      fecharModal(event);
    }
  }

  function escContainerModal(event) {
    const modalAtivo = containerModal.classList.contains('ativo');
    if (modalAtivo && event.key === 'Escape') {
      fecharModal(event);
    }
  }

  // verificando se as variaveis sao verdadeiras para chamar as funcoes
  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener('click', abrirModal);
    botaoFechar.addEventListener('click', fecharModal);
    containerModal.addEventListener('click', fecharContainerModal);
    window.addEventListener('keyup', escContainerModal);
  }
}

initModal();
