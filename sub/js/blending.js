//blending.js

$(function () {

    /*var mh = $('.list .list-content>ul>li').last().innerHeight();
    console.log(mh);

    $('.list-content>ul>li.point').css('height', mh);*/

    $('.intro .sub-tit').fadeTo(800, 1, function () {
        $(this).next().fadeTo(800, 1);
    });


    var i = 0;
    var sc_top = 0;

    $(window).on('scroll', function () {
        sc_top = $(this).scrollTop();
    });

    var reply = setInterval(function () {

        if (sc_top > 20) {
            $('.purpose li').eq(i).fadeTo(800, 1);
            i++;
        }
    }, 400);

    if (i > 4) clearInterval(reply);




    /*-----------------------------------리스트 포인트-------*/

    var inum;

    $('.list-content li').hover(function () {
        inum = $(this).index();

        if (inum) {
            $(this).siblings('.point').find('img').eq(inum).stop().fadeIn(600).siblings().stop().fadeOut(600);
        } else {
            $(this).find('img').eq(inum).stop().fadeIn(600).siblings().stop().fadeOut(600);
        }

    }, function () {
        $(this).siblings('.point').find('img').first().stop().fadeIn(600).siblings().stop().fadeOut(600);
    });



});
