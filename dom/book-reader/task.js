const fontSize = Array.from(document.querySelectorAll(".font-size"));
const bookSize = document.querySelector(".book");

function toggleActive() {
  fontSize.forEach((font_size) => {
    fontSize.classList.remove("font-size_active");
  });
}

fontSize.forEach((font_size) => {
  fontSize.addEventListener("click", (e) => {
    e.preventDefault();

    bookSize.classList.remove("book_fs-big");
    bookSize.classList.remove("book_fs-small");

    if (font_size.classList.contains("font-size_small")) {
      bookSize.classList.add("book_fs-small");
    }

    if (font_size.classList.contains("font-size_big")) {
      bookSize.classList.add("book_fs-big");
    }
    toggleActive();
    fontSize.classList.add("font-size_active");
  });
});
