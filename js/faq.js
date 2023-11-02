// (시작) 질문리스트 가져오기
const $FaqWrapper = document.querySelector(".faq-area");
const $FaqItem = document.querySelector(".faq-item");

let FaqList = null;
function getListData() {
  fetch("../../data/data.json")
    .then((res) => res.json())
    .then((result) => {
      FaqList = result;
      makeFaqList(result.faq);
    })
    .catch((err) => console.log("faq 리스트 가져오기 실패", err));
}

function makeFaqList(items) {
  $FaqWrapper.innerHTML = null;
  items.forEach((item) => {
    const result = makeFaqItem(item);
    $FaqWrapper.appendChild(result);
  });

  //  (시작) 질문리스트 접고 펼치기
  const $faqList = document.querySelectorAll(".question");

  $faqList.forEach((item) => {
    let $MoreBtn = item.querySelector(".more-btn");

    item.addEventListener("click", function () {
      let $Answer = this.nextElementSibling;

      if ($Answer.style.maxHeight != 0) {
        $Answer.style.maxHeight = null;
      } else {
        $Answer.style.maxHeight = $Answer.scrollHeight + "px";
      }
      $MoreBtn.classList.toggle("show");
    });
  });
  // (끝) 질문리스트 접고 펼치기
}

function makeFaqItem(item) {
  const div = document.createElement("div");
  div.classList.add("faq-item");

  // text 각각 p 태그로 가져오기
  const text = item.text
    .map((text) => (text ? `<p class="text">${text}</p>` : ""))
    .join("");

  // subtext 각각 p 태그로 가져오기
  const subText = item.subText
    .map((subText) => (subText ? `<p class="sub-text">${subText}</p>` : ""))
    .join("");

  // desc.bold 각각 p 태그로 가져오기
  let desc = item.desc;
  const descBold = desc.bold
    .map((bold) => (bold ? `<p class="bold">${bold}</p>` : ""))
    .join("");

  // desc.descText 각각 p 태그로 가져오기
  const descText = desc.descText
    .map((descText) => (descText ? `<p class="list">${descText}</p>` : ""))
    .join("");

  // desc에 bold, desctext 모두 없다면 출력하지 않는다.
  desc =
    descBold || descText
      ? `<div class="desc">${descBold}${descText}</div>`
      : "";

  div.innerHTML = `
    <div class="question">
      <span class="type">Q</span>
      <span class="title">${item.title}</span>
      <button class="more-btn">
        <img src="../../img/button-arrow.png" alt="더보기" />
      </button>
    </div>
    <div class="answer">
      <span class="type">A</span>
      <div class="text-wrap">
        ${text}
        ${desc}
        ${subText}
      </div>
    </div>
  `;
  return div;
}

getListData();
// (끝) 질문리스트 가져오기

// (시작) 질문리스트 필터
const $filterBtn = document.querySelectorAll(".filter-item");
$filterBtn.forEach((button) => {
  button.addEventListener("click", function () {
    const filter = button.getAttribute("data-filter");

    $filterBtn.forEach((item, idx) => {
      $filterBtn[idx].classList.remove("active");
    });

    button.classList.add("active");
    filterFaqList(filter);
  });
});

function filterFaqList(filter) {
  if (!FaqList) {
    return;
  }

  // 모든 faq 아이템
  const faqItems = FaqList.faq;

  // 필터링된 질문리스트를 저장할 배열
  const filteredFaqLists = [];

  if (filter === "all") {
    filteredFaqLists.push(...faqItems);
  } else {
    filteredFaqLists.push(
      ...faqItems.filter((item) => {
        // item.type 배열에 filter가 포함되어 있는지 확인
        return item.type.includes(filter);
      })
    );
  }

  // 필터링된 프로젝트를 화면에 출력
  makeFaqList(filteredFaqLists);
  
}

// 초기 필터링
filterFaqList("all");
// (끝) 질문리스트 필터
