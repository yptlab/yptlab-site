// (시작) 메인비주얼 swiper
let swVisual = new Swiper(".swvisual", {
  effect: "fade",
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.pagination',
    clickable : true,  // 버튼 클릭 여부
    type : 'bullets',
  }
});


// (끝) 메인비주얼 swiper

// (시작) 파트너사 로고 json 가져오기
const $partnersWrapper = document.querySelector(".partners-logo");

let partnersList = null;
function getPartnersData() {
  fetch("../data/data.json")
    .then((res) => res.json())
    .then((result) => {
      partnersList = result;
      makeParntersList(result.logo);
    })
  .catch(err => console.log("파트너사 로고 가져오기 실패", err))
  
}

function makeParntersList(items) {
  $partnersWrapper.innerHTML = null;
  items.forEach(item => {
    const result = makePartersItem(item);
    $partnersWrapper.appendChild(result);
  });
}

function makePartersItem(item) {
  const div = document.createElement("div");
  div.classList.add("logo-item")

  div.innerHTML = `
    <img class="logo-img" src="${item.img}" alt="${item.alt}">
  `;

  return div;
}

getPartnersData();

// (끝) 파트너사 로고 json 가져오기