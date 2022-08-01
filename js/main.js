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
  $(menuNav).removeClass("header-nav__list--mobile");
  $(menuClose).removeClass("header__close--active");
});

// Плавная прокрутка
$('a[href^="#"]').click(function () {
  elementClick = $(this).attr('href')
  destination = $(elementClick).offset().top;
  $('html:not(:animated),body:not(:animated)').animate({scrollTop: destination}, 800);
  return false;
  });

// *************Слайдер****************
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    
    loop: false,
  
    // Pagination
    pagination: {
      el: ".swiper-pagination",
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".portfolio__slider-button--next",
      prevEl: ".portfolio__slider-button--prev",
    },

    keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
  
  });
  


  // *************Валидация форм*************

    // Валидация модального окна-формы
    $('.validate-form').each(function() {
      $(this).validate({

          errorClass: "invalid",

          messages: {
            
              phone: {
                  required: "Напишите Ваш номер телефона",
              },
              email: {
                  required: "Напишите свою почту",
                  email: "Ваш почтовый адрес должен быть в формате: name@domain.com"
              }
          }
      })

  });


  // *************Валидация телефона*************
  $(".mask-phone").inputmask("+7(999)999-9999");

  // добавляем правило для валидации телефона
  $.validator.addMethod("checkMaskPhone", function(value, element) {
      return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
  }, "Ваш номер должен содержать 10 цифр");


  // Вешаем валидацию на поле с телефоном по классу
  $.validator.addClassRules({
      'mask-phone': {
          checkMaskPhone: true,
      }
  });


});


