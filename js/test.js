$(document).ready(function() {

    $('.btn_menu').click(function() {
        $('.desctop_menu').addClass('active');
    });

    $('.close_menu').click(function() {
        $('.desctop_menu').removeClass('active');
    });

    $('.btn_menu_mobile').click(function() {
        $('.mobile_menu').addClass('active');
        $('.btn_menu_mobile').addClass('hide');
    });

    $('.close_menu_mobile').click(function() {
        $('.mobile_menu').removeClass('active');
        $('.btn_menu_mobile').removeClass('hide');
    });


  $('.filter_container div').find('input:checkbox').click(function () {
            if($('.filter_container div').find('input:checked').length == 1){
          $('.portfolio_container .item').hide();
          $('.filter_container div').find('input:checked').each(function () {
              $('.portfolio_container .item.' + $(this).attr('rel')).show();
          });
            } else {
                $('.portfolio_container .item').show();
            }
  });



    $("img, a").on("dragstart", function(event) { event.preventDefault(); });


    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });


    $('.img-link').magnificPopup({
        type  : 'image'
    });



    $('.gallerylink').magnificPopup({
        type  : 'image',
        gallery : {
            enabled: true
        }
    });


















    if($(window).width() < 992) {
        $(".main_news_container .slider.owl-carousel").removeClass('owl-carousel').trigger('destroy.owl.carousel');
    } else {
        $(".main_news_container .slider").addClass('owl-carousel');
    };
    $(window).resize(function(){
        if($(window).width() < 992){
            $(".main_news_container .slider.owl-carousel").removeClass('owl-carousel').trigger('destroy.owl.carousel');
        } else {
            $(".main_news_container .slider").addClass('owl-carousel');
        }
    });

    $(".main_news_container .slider.owl-carousel").owlCarousel({
        loop: false,
        autoplay: false,
        mouseDrag: false,
        nav: false,
        navText: false,
        dots: false,
        margin: 60,
        autoWidth: true,
        stageClass: 'owl-stage owl-stage-mobile',
        responsive : {
        768 : {
            items: 2
        },
            1200: {
            items: 3
        },
            1500: {
            items: 4
        }
        }
    });







    $(".main_news_container .left").click(function() {
        $(".main_news_container .slider.owl-carousel").trigger('prev.owl.carousel');
    });

    $(".main_news_container .right").click(function() {
        $(".main_news_container .slider.owl-carousel").trigger('next.owl.carousel');
    });

    $(".news_container .img_block .owl-carousel").owlCarousel({
        items: 1,
        loop: false,
        autoplay: false,
        mouseDrag: true,
        nav: false,
        navText: false,
        dots: true,
        stageClass: 'owl-stage owl-stage-imbblock',
    });



    $(".header_slider .owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        mouseDrag: true,
        nav: false,
        navText: false,
        dots: false
    });

    $(".header_slider .left").click(function() {
        $(".header_slider .owl-carousel").trigger('prev.owl.carousel');
    });

    $(".header_slider .right").click(function() {
        $(".header_slider .owl-carousel").trigger('next.owl.carousel');
    });




































    $(".awards_container .slider.owl-carousel").owlCarousel({
        loop: false,
        autoplay: false,
        mouseDrag: false,
        nav: false,
        navText: false,
        dots: true,
        items: 1,
        margin: 60,
        autoWidth: true,
        responsive : {
        576 : {
            items: 1,
            mouseDrag: true,
        },
            768 : {
            items: 2,
            dots: false,
            margin: 50,
        },
            1200: {
            items: 2,
        },
            1500: {
            items: 1,
            margin: 60,

        }
        }
    });


    $(".awards_container .left").click(function() {
        $(".awards_container .slider.owl-carousel").trigger('prev.owl.carousel');
    });

    $(".awards_container .right").click(function() {
        $(".awards_container .slider.owl-carousel").trigger('next.owl.carousel');
    });

    // $('select').styler();

    $("[name='phone']").mask("+7 (999) 999-99-99");




    function newsShortText(element) {
        let newsText = $(element).text();
        if (newsText.length >= 200) {

            newsText = newsText.substring(0, 200);
            var lastIndex = newsText.lastIndexOf(" ");
            newsText = newsText.substring(0, lastIndex) + '...';

            $(element).before('<div class="content shortText">'+ newsText + '</div>').parent().find('.shortText').append('<div class="more_btn"></div>');

            $(element).append('<div class="more_btn close"></div>').hide();
        }
        console.log(newsText.length);
    }

    $(".news_container .item .content").each(function(i) {
        newsShortText(this);
    });

    $(".news_container .item .more_btn").click(function(){
        if( $(this).hasClass('close') ) {
            $(this).parent().parent().find('.content').hide();
            $(this).parent().parent().find('.shortText').show();
            $(this).parent().parent().removeClass('active');
            console.log('true');
        } else {
            $(this).parent().parent().find('.content').show();
            $(this).parent().parent().find('.shortText').hide();
            $(this).parent().parent().addClass('active');
            console.log('false');
        }
    });





























    // if($(window).width() < 768) {
    //     $(".portfolio_galery .slider.owl-carousel").removeClass('owl-carousel').trigger('destroy.owl.carousel');
    // } else {
    //     $(".portfolio_galery .slider").addClass('owl-carousel');
    // };
    // $(window).resize(function(){
    //     if($(window).width() < 768){
    //         $(".portfolio_galery .slider.owl-carousel").removeClass('owl-carousel').trigger('destroy.owl.carousel');
    //     } else {
    //         $(".portfolio_galery .slider").addClass('owl-carousel');
    //     }
    // });

    $(".rewievs .slider.owl-carousel").owlCarousel({
        items: 1,
        loop: false,
        autoplay: false,
        mouseDrag: false,
        nav: false,
        navText: false,
        dots: true,
        autoWidth: true,
        stageClass: 'owl-stage owl-stage-imbblock',
        responsive : {
        768 : {
            items: 1,
            dots: false,
            stageClass: 'owl-stage owl-stage-mobile',
            margin: 60,

        },
            1200: {
            items: 3,
            dots: false,
            stageClass: 'owl-stage owl-stage-mobile',
            margin: 60,
        },
            1500: {
            items: 1,
            dots: false,
            stageClass: 'owl-stage owl-stage-mobile',
            margin: 68,
        }
        }
    });

    // $(".news_container .img_block .owl-carousel").owlCarousel({
    //     items: 1,
    //     loop: false,
    //     autoplay: false,
    //     mouseDrag: true,
    //     nav: false,
    //     navText: false,
    //     dots: true,
    //     stageClass: 'owl-stage owl-stage-imbblock',
    // });

    $(".rewievs .left").click(function() {
        $(".rewievs .owl-carousel").trigger('prev.owl.carousel');
    });

    $(".rewievs .right").click(function() {
        $(".rewievs .owl-carousel").trigger('next.owl.carousel');
    });








});