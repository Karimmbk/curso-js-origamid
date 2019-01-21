// // ---------------0311--------------------------
// function initScroll() {
//   const sections = document.querySelectorAll('.js-scroll');
//   const windowHeight = window.innerHeight * 0.6;

//   function animaScroll() {
//     sections.forEach((section) => {
//       const sectionTop = section.getBoundingClientRect().top - windowHeight;
//       if (sectionTop < 0) {
//         section.classList.add('ativo');
//       } else {
//         section.classList.remove('ativo');
//       }
//     });
//   }

//   if (sections.length) {
//     animaScroll();
//     window.addEventListener('scroll', animaScroll);
//   }
// }

// initScroll();
