/* 대메뉴 메뉴 공통 js*/
/* menu-common.js */


$(function () {

    /* 호버시 메뉴 설정 */

    $('.list .list-content ul li').hover(function () {
        $(this).find('.menu-des').stop().slideDown();
    }, function () {
        $(this).find('.menu-des').stop().slideUp();
    });


    $(window).scroll(function () {

        if ($(this).scrollTop() > 120) {
            $('#toTop a').fadeIn();

        } else {
            $('#toTop a').fadeOut();
        }
        
    }); //window scroll

    $('#toTop a').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 800,'easeInOutExpo');
    });

});
