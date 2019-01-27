function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  // funcao para criar a tooltip e add a classe e o texto
  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerHTML = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  /* ao inves de criar uma funcao para chamar o parametro, pode-se criar
     um objeto no lugar e passa-lo como callback */
  // objeto para pegar as coordenadas do mouse
  const onMouseMove = {
    // so funciona passar o objeto como callback se existir esse metodo aqui
    handleEvent(event) {
      // pegando os valores das coordenadas do mouse
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      // remover a funcao depois de ser executada
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  // funcao para fazer aparecer/remover a tooltip
  function onMouseOuver() {
    const tooltipBox = criarTooltipBox(this);

    // mudando os falores dos parametros dentro do objeto
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    // mudando os falores dos parametros dentro do objeto
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    // passando como callback o objeto para executar o metodo handleEvent
    this.addEventListener('mouseleave', onMouseLeave);
  }

  // a cada elemento q tenha tooltip fazer chamar a funcao
  tooltips.forEach((element) => {
    element.addEventListener('mouseover', onMouseOuver);
  });
}

initTooltip();
