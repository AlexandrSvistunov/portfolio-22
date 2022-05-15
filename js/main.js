$(document).ready(function() {

// ************* Анимация*************
  AOS.init({
    disable: "mobile"
  });
  
// ********Мобильное меню**********

let menuButton = document.querySelector(".header__burger");
let menuClose = document.querySelector(".header__close");
let menuNav = document.querySelector(".header-nav__list");


 //Кликаем на бургер
  menuButton.addEventListener("click", function () {
    $(menuNav).addClass("header-nav__list--mobile");
    $(menuClose).addClass("header__close--active");
  });

// Кликаем на крестик
menuClose.addEventListener("click", function () {
  $(menuNav).removeClass('header-nav__list--mobile');
  $(menuClose).removeClass("header__close--active");
});


});


