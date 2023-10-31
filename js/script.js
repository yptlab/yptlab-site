// (시작) 서비스 준비중 알림창
const $alert = document.querySelectorAll(".alert");

$alert.forEach((item) => {
  item.addEventListener("click", function () {
    alert("🚧서비스 준비중입니다. 빠른 시일 내에 준비하여 찾아뵙겠습니다.")
  })
})

// (끝) 서비스 준비중 알림창

// (시작) 햄버거 버튼 열림/닫힘
const $hamBtn = document.querySelector(".hamburger");
const $hamSpan = document.querySelector(".hamburger_box");
const $menu = document.querySelector(".menu");
// const $linkArea = document.querySelectorAll(".fullscreen_menu > .link_area a");

$hamBtn.addEventListener("click", toggleMenu);

// $linkArea.forEach((item) => {
//   item.addEventListener("click", function () {
//     toggleMenu();
//   });
// });

function toggleMenu() {
  $hamSpan.classList.toggle("active");
  $menu.classList.toggle("on");
}

// (끝) 햄버거 버튼 열림/닫힘
