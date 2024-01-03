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
  effect: "fade",
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".pagination",
    clickable: true, // 버튼 클릭 여부
    type: "bullets",
  },
});
// (끝) 메인비주얼 swiper