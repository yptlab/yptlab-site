const mobile = window.matchMedia('screen and (max-width: 768px)').matches;
const desktop = window.matchMedia('screen and (min-width: 1024px)').matches;
let priceElem = document.querySelectorAll('.price');

// 단위 변경 후, 콤마 삭제 
priceElem.forEach(elem => {
  if (mobile) {
    let replaceTxt = elem.innerHTML.replace(/0,000/g, '만');
    elem.innerHTML = replaceTxt.replace(/,/g, '');
  }
  return;
})

// window.onresize = function(){
//   document.location.reload();
// };