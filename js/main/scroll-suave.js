// ---------------0311--------------------------

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollSuave(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const sectionTop = document.querySelector(href);

    sectionTop.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    //   // forma alternativa e mais nova de se fazer
    //   const topo = sectionTop.offsetTop;
    //   window.scrollTo({
    //     top: topo,
    //     behavior: 'smooth',
    //   });
  }

  linksInternos.forEach((element) => {
    element.addEventListener('click', scrollSuave);
  });
}

initScrollSuave();
