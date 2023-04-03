$(document).ready(function(){
    $('.occupation_days_wrapper').not(".january_cards").slideUp();
    $('.words_child button').click(function () {
        let attr = $(this).attr('data-filter');
        $('.words_child button').not(this).removeClass('month_active_btn');
        $(this).addClass('month_active_btn');
        $('.occupation_days_wrapper').not("."+attr).slideUp();
        $('.'+attr).slideDown();
    });
    $(".how_congratulate_right .congratulate_list_title").each(function(index, cardItemRight){ 
      $(cardItemRight).click(function(){
        $(".how_congratulate_right .congratulate_list_title").removeClass("congratulate_list_title_active")
        $(this).addClass("congratulate_list_title_active");
      });
    });

    $('.header_bottom_hide .header__hide').slideUp();
    $('.header_bottom .header_bottom_dropdown').click(function () {
        let attr = $(this).attr('data-filter');
        $('.header_bottom .header_bottom_dropdown').removeClass('header_bottom_dropdown_active');
        $(this).toggleClass('header_bottom_dropdown_active');
        $('.header__hide').not('.'+attr).slideUp();
        $('.'+attr).slideToggle();
        $(this).click(function(){
          $(this).toggleClass('header_bottom_dropdown_active');
        })
    });
    $('.header__hide_top .exit').click(function(){
      $('.header_bottom_hide .header__hide').slideUp();
      $('.header_bottom_dropdown').removeClass('header_bottom_dropdown_active');
    })
    // useful_words start
    var useful_words = new Swiper(".useful_words .useful_words_carousel", {
        slidesPerView: 1,
        centeredSlides: true,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        spaceBetween: 15,
        loop:true,
        keyboard: {
          enabled: true,
        },
        breakpoints: {
            0:{
                slidesPerView: 3,
            },
            768:{
              slidesPerView: 4,
            },
            900:{
              slidesPerView: 5,
            },
            1200:{
              slidesPerView: 6,
            },
          1600: {
            slidesPerView: 8,
            slidesPerGroup: 2,
          },
        },
        scrollbar: {
          el: ".useful_words_carousel .swiper-scrollbar",
        },
      });
      // useful_words end

      // congratulations_verse_left start
      var congratulations_verse_left = new Swiper(".congratulations_verse .congratulations_verse_carousel_left", {
        slidesPerView: 1,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        spaceBetween:30,
        loop:true,
        keyboard: {
          enabled: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
        },
        scrollbar: {
          el: ".congratulations_verse_carousel_left .swiper-scrollbar",
        },
      });
      // congratulations_verse_left end

      $(".popular_musical .more_button").click(function(){
        $(".popular_musical .popular_link").toggleClass("popular_link_active") 
      })
      $(".mobile_burger .menuClose").hide();
      $(".mobile_burger .menuAdd").show(100);
        
      $(".mobile_burger").click(function(){
        $(".mobile_burger .menuClose").toggle();
        $(".mobile_burger .menuAdd").toggle();
        $(".header .header_bottom").toggleClass("header_bottom_active");

      })
});