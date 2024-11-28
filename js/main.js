$(function(){


  let he =$(window).height();
  $(window).scroll(function(){
    let st = $(this).scrollTop();
    if(st>=he){
      $('header').addClass('on');
    }else{
      $('header').removeClass('on');
    }
  });


  let swiper = new Swiper(".slide_all", {
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



})