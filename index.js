// 가로스크롤
// gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".slide-wrap");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".portfolio-slide-wrap",
//     pin: true,
//     scrub: 1,
//     // snap: 1 / (sections.length - 1),s
//     end: () => "+=" + document.querySelector(".portfolio-slide-wrap").offsetWidth
//   }
// });

// gsap.registerPlugin(ScrollTrigger);
// const pinnedImageWrappers = document.querySelectorAll('.main');
// if (pinnedImageWrappers) {
//     pinnedImageWrappers.forEach((wrapper) => {
//         const inner = wrapper.querySelector('.main .slide-wrap');
//         gsap.to(inner, {
//             x: () => -(inner.scrollWidth - document.documentElement.clientWidth) + 'px',            
//             ease: 'none',
//             scrollTrigger: {
//                 start: 'top',
//                 trigger: wrapper,
//                 pin: true,
//                 scrub: 1,
//                 invalidateOnRefresh: true,
//                 end: () => `+=${inner.offsetWidth}`            
//             }
//         });
//     });
// }

function scroll() {
  const parallaxCont = document.querySelector(".portfolio-slide-wrap");
  const scrollAnchor = document.querySelector(".scroll a");

  if (parallaxCont && scrollAnchor) {
      let scrollTop = window.pageYOffset;
      let parallaxWidth = parallaxCont.offsetWidth;

      document.body.style.height = parallaxWidth + 'px';
      let viewWidth = parallaxWidth - window.innerWidth;
      let viewHeight = parallaxWidth - window.innerHeight;
      let goLeft = scrollTop * (viewWidth / viewHeight);

      gsap.to(parallaxCont, {left: -goLeft, ease: "power2.out"});
      scrollAnchor.innerText = Math.round(scrollTop);
  }

  requestAnimationFrame(scroll);
}

window.addEventListener('load', scroll);

// video paralax

