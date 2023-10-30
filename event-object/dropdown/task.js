const Dropdownvalue = document.querySelector(".dropdown__value");
const DropdownlIst = document.querySelector(".dropdown__list");
const Dropdownlink = document.querySelectorAll(".dropdown__link");

function clickon() {
  if (DropdownlIst.classList.contains("dropdown__list_active")) {
    DropdownlIst.classList.remove("dropdown__list_active");
  } else {
    DropdownlIst.classList.add("dropdown__list_active");
  }
}

Dropdownvalue.addEventListener("click", clickon);

Dropdownlink.forEach((element) => {
  element.onclick = () => {
    Dropdownvalue.textContent = element.textContent;
  };
  element.addEventListener("click", clickon);
});

