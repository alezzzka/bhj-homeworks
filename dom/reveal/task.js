const revealelement = document.querySelectorAll('.reveal');

function invisible(el) {
  const { top, bottom } = el.getBoundingClientRect();
  if (bottom < 0 || top > window.innerHeight)  {
      return false;
    }
  return true;
}
  
window.addEventListener('scroll', () => {
  for (let element of revealelement) {
    if (invisible(element)) {
      element.classList.add('reveal_active');
    }
  }
});
