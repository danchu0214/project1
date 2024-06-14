

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

  // 스크롤이 내려가면 헤더가 사라지고, 스크롤이 올라가면 헤더가 내려옴
    // addEventListener('scroll', () => {})

    // 브라우저를 열면 바로 읽음. 보통은 0
    let prevScroll = window.scrollY;
    console.log('prevScroll ', prevScroll);

    $(window).on('scroll', () => {
      // 스크롤을 하면, scrollY의 값 반환
      let currentScroll = window.scrollY;
      console.log('currentScroll ', currentScroll);

      if(prevScroll > currentScroll) {// 스크롤을 올리면 헤더가 보임
        // $('header').show();
        // $('header').slideDown();
        $('header').css({ top: 0 });
      } else {// 스크롤을 내리면 헤더가 숨김
        // $('header').hide();
        // $('header').slideUp();
        $('header').css({ top: -80 });
      }

      // prev에 현재 스크롤 값 재할당
      prevScroll = currentScroll;
      console.log('재할당 된 prevScroll ', prevScroll);
    })

// 가로스크롤

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".slide-wrap");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".main",
    pin: ".main",
    scrub: 1,
    // snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".portfolio-slide-container").offsetWidth,
  }
});


// video paralax

window.addEventListener('scroll', function () {
  // 스크롤 이벤트 리스너 등록
  const sections = document.querySelectorAll('.video'); // 모든 섹션을 가져옴

  sections.forEach(function (section) {
    // 각 섹션에 대해 반복
    let bounds = section.getBoundingClientRect(); // 섹션의 위치와 크기 정보를 가져옴
    const background = section.querySelector('.youtube'); // 배경 요소

    if (bounds.top < window.innerHeight && bounds.bottom >= 0) {
      // 섹션이 뷰포트 내에 있을 때
      var scrolled = window.pageYOffset - section.offsetTop; // 섹션의 시작점에서 스크롤된 거리를 계산
      background.style.transform = `translateY(${scrolled * 0.7}px)`; // 제목을 스크롤 속도의 80%(빠르게)로 이동
    }
  });
});

// window.addEventListener('scroll', function () {
//   // 스크롤 이벤트 리스너 등록
//   const sections = document.querySelectorAll('.category'); // 모든 섹션을 가져옴

//   sections.forEach(function (section) {
//     // 각 섹션에 대해 반복
//     let bounds = section.getBoundingClientRect(); // 섹션의 위치와 크기 정보를 가져옴
//     const background = section.querySelector('.category'); // 배경 요소

//     if (bounds.top < window.innerHeight && bounds.bottom >= 0) {
//       // 섹션이 뷰포트 내에 있을 때
//       var scrolled = window.pageYOffset - section.offsetTop; // 섹션의 시작점에서 스크롤된 거리를 계산
//       background.style.transform = `translateY(${scrolled * 0.8}px)`; // 제목을 스크롤 속도의 80%(빠르게)로 이동
//     }
//   });
// });
// aos
AOS.init();