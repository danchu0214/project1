//  헤더 배경 블러
$(document).ready(function() {
  $(window).scroll(function() {
      if ($(window).scrollTop() != 0) {
          $('header').css('backdrop-filter', 'blur(3px)');
      } else {
          $('header').css('backdrop-filter', 'none');
      }
  });
});


// 가로스크롤

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".main_wrap");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".portfolio-slide-container",
    pin: true,
    scrub: 1,
    // snap: 1 / (sections.length - 1),s
    end: () => "+=" + document.querySelector(".portfolio-slide-container").offsetWidth
  }
});

/*
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".slide-wrap");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".portfolio-slide-container",
    pin: true,
    scrub: 1,
    // snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".portfolio-slide-container").offsetWidth,
    onEnter: () => {
      // 스크롤이 시작되면 세로 스크롤을 막습니다.
      document.body.style.overflowY = 'hidden';
    },
    onLeaveBack: () => {
      // 스크롤이 끝날 때 세로 스크롤을 다시 활성화합니다.
      document.body.style.overflowY = 'auto';
    }
  }
});
*/

// swiper 방식
/*
const swiper = new Swiper('.portfolio-slide-container', {
  slidesPerView: 3,
  spaceBetween: 0,
  mousewheel: true,
  loop: false,
  centeredSlides: true
});
*/


// video paralax
/*
const timeline03 = gsap.timeline({
  scrollTrigger: {
    trigger: '.video',
    scroller: '#main_wrap', // neccessary setting for smooth-scrollbar on body
    pinType: 'transform', // neccessary setting for smooth-scrollbar on body
    start: "-100% top",
    end: "0% top",
    pin: false,
    anticipatePin: 1,
    scrub: true,
    // markers: true,
    invalidateOnRefresh: true // to make it responsive
  }
});
timeline03.to('.parallax .video-bg', {   
    y: 0,
    ease: "none"
});
*/
// aos
AOS.init();