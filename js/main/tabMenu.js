// // // ---------------0309--------------------------
// function initTabNav() {
//   const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
//   const tabContent = document.querySelectorAll('[data-tab="content"] section');

//   function activeTab(index) {
//     tabContent.forEach((element) => {
//       element.classList.remove('ativo');
//     });
//     const direcao = tabContent[index].dataset.anime;
//     tabContent[index].classList.add('ativo', direcao);
//   }

//   if (tabMenu.length && tabContent.length) {
//     tabContent[0].classList.add('ativo');
//     tabMenu.forEach((img, index) => {
//       img.addEventListener('click', () => {
//         activeTab(index);
//       });
//     });
//   }
// }

// initTabNav();
