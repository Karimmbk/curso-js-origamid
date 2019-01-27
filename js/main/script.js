// const animais = document.getElementById('animais');
// console.log(animais);

// const gridSection = document.getElementsByClassName('grid-section');
// console.log(gridSection);

// ---------------0303--------------------------
// // Retorne no console todas as imagens do site
// const img = document.querySelectorAll('img');
// console.log(img);
// // Retorne no console apenas as imagens que começaram com a palavra imagem
// const img1 = document.querySelectorAll('img[src^="img/content/imagem"]');
// console.log(img1);

// // Selecione todos os links internos (onde o href começa com #)
// const linksInternos = document.querySelectorAll('[href^="#"]');
// console.log(linksInternos);
// // Selecione o primeiro h2 dentro de .animais-descricao
// const firstH2 = document.querySelector('.animais-descricao h2');
// console.log(firstH2);
// // Selecione o último p do site
// const allP = document.querySelectorAll('p');
// const lastP = allP[allP.length - 1];
// console.log(lastP);

// ---------------0304--------------------------
// const imgs = document.querySelectorAll('img');
// console.log(imgs);

// imgs.forEach((e, index) => {
//   console.log(index, e);
// });

// const a = document.getElementsByClassName('grid-section');
// console.log(a);
// const test = Array.from(a);
// console.log(test);

// test.forEach((e) => {
//   console.log(e);
// });

// Mostre no console cada parágrado do site
// const parags = document.querySelectorAll('p');
// parags.forEach((e) => {
//   console.log(e);
// });
// // Mostre o texto dos parágrafos no console
// parags.forEach((e) => {
//   console.log(e.innerText);
// });

// Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll('img');

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach(() => {
//   console.log((i += 1));
// });

// imgs.forEach(() => {
//   i += 1;
// });

// ---------------0305--------------------------
// Adicione a classe ativo a todos os itens do menu
// const m = document.querySelectorAll('.menu a');

// m.forEach((element) => {
//   element.classList.add('ativo');
//   // console.log(element);
// });

// // Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// m.forEach((element, index) => {
//   if (index !== 0) {
//     element.classList.remove('ativo');
//   }
//   // console.log(element);
// });

// // Verifique se as imagens possuem o atributo alt
// const img = document.querySelectorAll('img');

// img.forEach((element) => {
//   if (element.hasAttribute('alt')) {
//     console.log('tem o atributo alt');
//   } else {
//     console.log('nao tem o atributo alt');
//   }
// });
// // Modifique o href do link externo no menu
// const hr = document.querySelector('a[href^="https"]');
// hr.setAttribute('href', 'https://facebook.com');
// console.log(hr);

// ---------------0306--------------------------
// Verifique a distância da primeira imagem
// em relação ao topo da página
// const firstImg = document.querySelector('img').offsetTop;
// console.log(firstImg);

// // Retorne a soma da largura de todas as imagens
// function somaImagens() {
//   const imgs = document.querySelectorAll('img');
//   let total = 0;
//   imgs.forEach((img) => {
//     total += img.offsetWidth;
//     console.log(img.offsetWidth);
//   });
//   return total;
// }

// window.onload = () => {
//   const total = somaImagens();
//   console.log(`total = ${total}`);
// };

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// // com o dedo. (48px/48px de acordo com o google)
// const links = document.querySelectorAll('a');
// links.forEach((link) => {
//   if (link.getBoundingClientRect().width >= 48 && link.getBoundingClientRect().height >= 48) {
//     console.log('ok');
//   } else {
//     console.log('n ok');
//   }
// });

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
// const tela = window.matchMedia('(max-width:720px)');
// const menu = document.querySelector('.menu');

// if (tela.matches) {
//   menu.classList.add('menu-mobile');
// }

// ---------------0307--------------------------
// const imgs = document.querySelectorAll('img');

// function imgSrc(event) {
//   const src = event.currentTarget.getAttribute('src');
//   console.log(src);
// }

// imgs.forEach((img) => {
//   img.addEventListener('click', imgSrc);
// });

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
// const links = document.querySelectorAll('a[href^="#"]');

// function handleAtive(event) {
//   event.preventDefault();
//   links.forEach((link) => {
//     link.classList.remove('ativo');
//   });
//   event.currentTarget.classList.add('ativo');
// }

// links.forEach((link) => {
//   link.addEventListener('click', handleAtive);
// });

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

// const allElements = document.querySelectorAll('body *');

// function handleClick(event) {
//   console.log(event.currentTarget);
// }

// allElements.forEach((element) => {
//   element.addEventListener('click', handleClick);
// });

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
// function handleClick2(event) {
//   event.currentTarget.remove();
// }

// allElements.forEach((element) => {
//   element.addEventListener('click', handleClick2);
// });

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

// function handleClickT(event) {
//   if (event.key === 't') {
// document.documentElement.classList.toggle('textomaior');
//   }
// }

// window.addEventListener('keydown', handleClickT);

// // ---------------0308--------------------------
// // const cont = document.querySelector('.contato');
// // const titulo = cont.querySelector('.titulo');
// // const test = document.createElement('h1');
// // test.innerText = 'test';
// // test.classList.add('titulo');

// // cont.replaceChild(test, titulo);
// // // console.log(test);

// // const h1 = document.querySelector('h1').cloneNode(true);
// // console.log(h1);

// // Duplique o menu e adicione ele em copy
// const menuCopy = document.querySelector('.menu').cloneNode(true);
// const copy = document.querySelector('.copy');
// // console.log(copy);
// // console.log(menuCopy);

// copy.appendChild(menuCopy);
// // Selecione o primeiro DT da dl de Faq
// const firstDt = document.querySelector('.faq-lista dt:first-child');

// // Selecione o DD referente ao primeiro DT
// const nextElement = firstDt.nextElementSibling;
// console.log(nextElement);

// // Substitua o conteúdo html de .faq pelo de .animais
// const animais = document.querySelector('.animais');
// const faq = document.querySelector('.faq');

// faq.innerHTML = animais.innerHTML;

// // ---------------0309--------------------------
function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    tabContent.forEach((element) => {
      element.classList.remove('ativo');
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', direcao);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');
    tabMenu.forEach((img, index) => {
      img.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

// ---------------0310--------------------------
function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'show';
  function showOnClick() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    accordionList.forEach((element) => {
      element.addEventListener('click', showOnClick);
    });
  }
}
initAccordion();

// // ---------------0311--------------------------

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

// // ---------------0311--------------------------
function initScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowHeight = window.innerHeight * 0.7;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowHeight;
      if (sectionTop < 0) {
        section.classList.add('ativo');
      } else {
        section.classList.remove('ativo');
      }
    });
  }

  if (sections.length) {
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}

initScroll();

// // ---------------0401--------------------------

// Transforme o objeto abaixo em uma Constructor Function
// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
//   // eslint-disable-next-line func-names
//   this.andar = function () {
//     console.log(`${nome} andou`);
//   };
// }

// // Crie 3 pessoas, João - 20 anos,
// // Maria - 25 anos, Bruno - 15 anos
// const joao = new Pessoa('João', 20);
// const maria = new Pessoa('Maria', 25);
// const bruno = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

// function Dom(seletor) {
//   const elementList = document.querySelectorAll(seletor);
//   this.elements = elementList;
//   console.log(elementList);
//   this.addClass = function addClass(classe) {
//     elementList.forEach((element) => {
//       element.classList.add(classe);
//     });
//   };
//   this.removeClass = function removeClass(classe) {
//     elementList.forEach((element) => {
//       element.classList.remove(classe);
//     });
//   };
// }

// const test = new Dom('li');

// ---------------0402--------------------------
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
// function Pessoa(nome, sobrenome, idade) {
//   this.nome = nome;
//   this.sobrenome = sobrenome;
//   this.idade = idade;
// }

// Pessoa.prototype.nomeCompleto = function nomeCompleto() {
//   return `${this.nome} ${this.sobrenome}`;
// };
// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

// // Liste os construtores dos dados abaixo
// const li = document.querySelector('li');

// li;
// li.click;
// li.innerText;
// li.value;
// li.hidden;
// li.offsetLeft;
// li.click();

// // Qual o construtor do dado abaixo:
// li.hidden.constructor.name;

// // ---------------0404--------------------------

// const list = ['R$90', 'R$99', 'R$1200'];

// list.forEach((element) => {
//   console.log(element.padStart(6, '.'));
// });

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

// const transacoes = [
//   {
//     descricao: 'Taxa do Pão',
//     valor: 'R$ 39',
//   },
//   {
//     descricao: 'Taxa do Mercado',
//     valor: 'R$ 129',
//   },
//   {
//     descricao: 'Recebimento de Cliente',
//     valor: 'R$ 99',
//   },
//   {
//     descricao: 'Taxa do Banco',
//     valor: 'R$ 129',
//   },
//   {
//     descricao: 'Recebimento de Cliente',
//     valor: 'R$ 49',
//   },
// ];
// let totalTaxa = 0;
// let totalRecebimento = 0;
// let i = 0;
// for (i = 0; i < transacoes.length; i += 1) {
//   if (transacoes[i].descricao.includes('Taxa')) {
// eslint-disable-next-line max-len
//     totalTaxa += +transacoes[i].valor.slice(3); // obs: se eu tiver uma string so com numero e colocar o + na frente ele vira numero.
//   } else if (transacoes[i].descricao.includes('Recebimento')) {
//     totalRecebimento += parseFloat(transacoes[i].valor.slice(3));
//   }
// }

// console.log(`total de Taxa = R$${totalTaxa}`);
// console.log(`total de Recebimento = R$${totalRecebimento}`);

// // Retorne uma array com a lista abaixo
// const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

// const arrayTransportes = transportes.split(';');

// console.log(arrayTransportes);

// Substitua todos os span's por a's
// const html = `<ul>
//                 <li><span>Sobre</span></li>
//                 <li><span>Produtos</span></li>
//                 <li><span>Contato</span></li>
//               </ul>`;

// const newHtml = html.replace(/[span]+/g, 'a');
// console.log(newHtml);

// const newHtml2 = html.split('span').join('a');
// console.log(newHtml2);

// // Retorne o último caracter da frase
// const frase = 'Melhor do ano!';
// console.log(frase.slice(-1));
// console.log(frase.charAt(frase.length - 1));

// // Retorne o total de taxas
// const transacoes = [
//   'Taxa do Banco',
//   '   TAXA DO PÃO',
//   '  taxa do mercado',
//   'depósito Bancário',
//   'TARIFA especial',
// ];

// let cont = 0;
// for (let i = 0; i < transacoes.length; i += 1) {
//   if (transacoes[i].toLowerCase().includes('taxa')) {
//     cont += 1;
//   }
// }

// console.log(cont);

// ---------------0405--------------------------
// // Retorne um número aleatório
// // entre 1050 e 2000
// console.log(Math.random() * (2000 - 1050 + 1) + 1500);

// // // Retorne o maior número da lista abaixo
// let numeros = '4, 5, 20, 8, 9';
// numeros = numeros.split(', ');
// console.log(Math.max(...numeros));

// // // Crie uma função para limpar os preços
// // // e retornar os números com centavos arredondados
// // // depois retorne a soma total
// // const listaPrecos = ['R$ 59,99', ' R$ 100,222',
// //                      'R$ 230  ', 'r$  200'];

// ---------------0406--------------------------
// const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// // Remova o primeiro valor de comidas e coloque em uma variável
// // Remova o último valor de comidas e coloque em uma variável
// // Adicione 'Arroz' ao final da array
// // Adicione 'Peixe' e 'Batata' ao início da array
// const first = comidas.shift();
// const last = comidas.pop();
// comidas.push('Arroz');
// comidas.unshift('Peixe', 'Batata');

// const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// // Arrume os estudantes em ordem alfabética
// // Inverta a ordem dos estudantes
// // Verifique se Joana faz parte dos estudantes
// // Verifique se Juliana faz parte dos estudantes
// estudantes.sort();
// estudantes.reverse();
// estudantes.includes('Joana');
// estudantes.includes('Juliana');

// let html = `<section>
//               <div>Sobre</div>
//               <div>Produtos</div>
//               <div>Contato</div>
//             </section>`;
// // Substitua section por ul e div com li,
// // utilizando split e join
// html = html.split('section').join('ul');
// html = html.split('div').join('li');
// // console.log(html);

// const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// // Remova o último carro, mas antes de remover
// // salve a array original em outra variável

// const aux = carros.slice();
// carros.pop();

// // ---------------0407--------------------------

// const list = [1, 2, 30, 4, 5, 6];

// const max = list.reduce((aux, item) => (aux > item ? aux : item));
// console.log(max);

// ---------------0408--------------------------
// // Retorne a soma total de caracteres dos
// // parágrafos acima utilizando reduce
// const parag = document.querySelectorAll('p');
// console.log(parag);

// const total = Array.prototype.reduce.call(parag, (aux, item) => aux + item.innerText.length, 0);
// console.log(total);

// // Crie uma função que retorne novos elementos
// // html, com os seguintes parâmetros
// // tag, classe e conteudo.
// function elementHtml(tag, classe, conteudo) {
//   const element = document.createElement(tag);
//   // eslint-disable-next-line no-unused-expressions
//   classe ? element.classList.add(classe) : '';
//   // eslint-disable-next-line no-unused-expressions
//   conteudo ? (element.innerHTML = conteudo) : '';
//   return element;
// }

// console.log(elementHtml('body', 'ativo', 'teste'));

// // Crie uma nova função utilizando a anterior como base
// // essa nova função deverá sempre criar h1 com a
// // classe titulo. Porém o parâmetro conteudo continuará dinâmico

// const elementH1 = elementHtml.bind(null, 'h1', 'titulo');

// console.log(elementH1('teste'));

// // ---------------0501--------------------------
