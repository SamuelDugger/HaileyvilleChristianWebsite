"use strict";

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

let isNavbarActive = false; // Variable to track navbar state

const toggleNavbar = () => {
  if (
    window.getComputedStyle(navToggler).getPropertyValue("display") !== "none"
  ) {
    isNavbarActive = !isNavbarActive; // Toggle navbar state
    if (isNavbarActive) {
      navbar.classList.add("active");
    } else {
      navbar.classList.remove("active");
    }
  }
};

const closeNavbar = () => {
  if (isNavbarActive) {
    isNavbarActive = false; // Set navbar state to false
    navbar.classList.remove("active");
  }
};

addEventOnElem(navLinks, "click", closeNavbar);

addEventOnElem(navToggler, "click", toggleNavbar);
addEventOnElem(window, "resize", closeNavbar); // Close navbar on window resize

/**
 * header & back top btn active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", headerActive);
