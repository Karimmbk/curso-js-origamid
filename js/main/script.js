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
