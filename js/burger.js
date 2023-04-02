"use strict";

document.addEventListener("click", documentClick);

function documentClick(e) {
  const targetItem = e.target;

  if (targetItem.closest(".icon-menu")) {
    document.documentElement.classList.toggle("menu-open");

    document.addEventListener("click", (e) => {
      if (e.target.closest(".menu__link")) {
        document.documentElement.classList.remove("menu-open");
      }
    });
  }
}
