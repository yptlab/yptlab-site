// (시작) waypoint 헤더 색상 변경
const $carousel = document.querySelector(".carousel-con");
const carouselRect = $carousel.offsetTop;

new Waypoint({
  element: $carousel,
  handler: function (dir) {
    if (dir === "down") {
      $header.classList.remove("white");
    } else {
      $header.classList.add("white");
    }
  },
  offset: "0%",
});
// (끝) waypoint 헤더 색상 변경

// (시작) 메인비주얼 swiper
let swVisual = new Swiper(".swAboutVisual", {
  // effect: "fade",
  loop: true,
  direction: "vertical",
  speed: 1000,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".pagination",
    type: "fraction",
  }
  
});
// (끝) 메인비주얼 swiper