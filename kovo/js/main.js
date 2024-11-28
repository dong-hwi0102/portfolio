$(function () {
  let mainswiper = new Swiper(".main_visual", {

    loop: true,
    pagination: {
      el: ".main_visual .swiper-pagination",
      // type: "progressbar",
    },
    navigation: {
      nextEl: ".main_visual .swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  let con1swiper = new Swiper(".main_con1 .slide", {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 0,
    pagination: {
      el: ".main_con1 .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".main_con1 .swiper-button-next",
      prevEl: ".main_con1 .swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1300: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1680: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });

  let playswiper = new Swiper(".main_con2 .slide", {
    loop: true,
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      // shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".main_con2 .swiper-pagination",
    },
    navigation: {
      nextEl: ".main_con2 .right",
      prevEl: ".main_con2 .left",
    },
    on: {
      slideChange: function () {
        $('.con2_box .con2_r').removeClass('on')
        $('.con2_box .con2_r').eq(this.realIndex).addClass('on');
      }
    }
  });

  $('.notice_main .tab_menu li').click(function () {
    $('.notice_main .tab_menu li,.notice_main .kovo_news ul.contents>li').removeClass('on');
    $(this).addClass('on');
    let i = $(this).index();
    $('.kovo_news ul.contents>li').eq(i).addClass('on')
  });


});