const TabAll = document.querySelectorAll(".tab");
const tab__content = document.querySelectorAll(".tab__content");

console.log(tab__content);

function Active() {
  for (let i = 0; i < tab__content.length; i++) {
    tab__content[i].classList.toggle("tab__content_active", false);
  }
}

TabAll.forEach((tab) => {
  tab.addEventListener("click", function click() {
    TabAll.forEach((tab) => {
      tab.classList.toggle("tab_active", false);
    });
    tab.classList.toggle("tab_active", true);

    if (tab.textContent == TabAll[0].textContent) {
      Active();
      return tab__content[0].classList.toggle("tab__content_active", true);
    }
    if (tab.textContent == TabAll[1].textContent) {
      Active();
      return tab__content[1].classList.toggle("tab__content_active", true);
    }
    Active();
    return tab__content[2].classList.toggle("tab__content_active", true);
  });
});
