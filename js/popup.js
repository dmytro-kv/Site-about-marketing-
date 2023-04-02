"use strict";
const popupLinks = document.querySelectorAll(".popup-link");
const popupPush = document.querySelectorAll(".popup-push");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");
let unlock = true;
const timeout = 400;

if (popupLinks.length > 0) {
  for (let item of popupLinks) {
    const popupLink = item;
    popupLink.addEventListener("click", (e) => {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

if (popupPush.length > 0) {
  for (let item of popupPush) {
    const popupLink = item;
    popupLink.addEventListener("submit", (e) => {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0) {
  for (let item of popupCloseIcon) {
    const el = item;
    el.addEventListener("click", (e) => {
      popupClose(el.closest(".popup"));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add("open");
    curentPopup.addEventListener("click", (e) => {
      if (!e.target.closest(".popup__content")) {
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("open");
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

  if (lockPadding.length > 0) {
    for (let item of lockPadding) {
      const el = item;
      el.style.paddingRight = lockPaddingValue;
    }
  }

  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let item of lockPadding) {
        const el = item;
        el.style.paddingRight = "0px";
      }
    }
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener("keydown", (e) => {
  if (e.which === 27) {
    const popupActive = document.querySelector(".popup.open");
    popupClose(popupActive);
  }
});

const form = document.querySelectorAll("form");
for (let item of form) {
  const el = item;
  el.addEventListener("submit", (e) => {
    let curentForm = e.target;
    let curentInput = curentForm.firstElementChild;
    curentInput.value = "";
    e.preventDefault();
  });
}
