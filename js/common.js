// (시작) 서비스 준비중 알림창
const $alert = document.querySelectorAll(".alert");

$alert.forEach((item) => {
  item.addEventListener("click", function () {
    alert("🚧서비스 준비중입니다. 빠른 시일 내에 준비하여 찾아뵙겠습니다🚧");
  });
});

// (끝) 서비스 준비중 알림창

// (시작) 헤더 보임/숨김
const $header = document.querySelector("header .inner");

let prevScrollPos = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    $header.classList.remove("hide");
  } else {
    $header.classList.add("hide");
  }

  prevScrollPos = currentScrollPos;
});

// (끝) 헤더 보임/숨김



// (시작) 햄버거 버튼 열림/닫힘
const $hamBtn = document.querySelector(".hamburger");
const $hamSpan = document.querySelector(".hamburger_box");
const $menu = document.querySelector(".menu");
const $logo = document.querySelector("header .logo");
const $body = document.querySelector("body");

$hamBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  $hamSpan.classList.toggle("active");
  $menu.classList.toggle("on");

  // 조건 1: $menu의 class가 on인 경우, $hamBtn의 class도 on으로 설정
  if ($menu.classList.contains("on")) {
    $header.classList.remove("white");
    $body.classList.add("no-scroll")
  }
  else {
    $body.classList.remove("no-scroll")
    // $header.classList.add("white");
  }
}
// (끝) 햄버거 버튼 열림/닫힘

// (시작) gotop 버튼 클릭 이벤트
const $goTopBtn = document.querySelector(".goTop");
$goTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// (끝) gotop 버튼 클릭 이벤트
