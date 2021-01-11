"use strict";

const slides = document.querySelectorAll(".slide");
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");

slides.forEach(function (slide, index) {
  slide.style.transform = `translateX(${100 * index}%)`;
});

let curSlide = 0;
const maxSlide = slides.length;

btnRight.addEventListener("click", function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach(function (slide, index) {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  });
});

// transform: translateX %
// page start up - curSlide = 0 / 0%, 100%, 200%, 300%, 400%, 500%
// 1st click - curSlide = 1 / -100%, 0%, 100%, 200%, 300%, 400%

btnLeft.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  slides.forEach(function (slide, index) {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  });
});
