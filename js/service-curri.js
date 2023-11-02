const $classList = document.querySelectorAll(".head");

$classList.forEach((item) => {
  let $MoreBtn = item.querySelector(".more-btn");

  item.addEventListener("click", function () {
    let $Info = this.nextElementSibling;

    if ($Info.style.maxHeight != 0) {
      $Info.style.maxHeight = null;
    } else {
      $Info.style.maxHeight = $Info.scrollHeight + "px";
    }
    this.classList.toggle("show");
    $MoreBtn.classList.toggle("show");
  });
});
