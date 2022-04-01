//tea story.js


$(function () {

    $('main .txt-box').find('.title').fadeIn(800);

    setTimeout(function () {
        $('main .txt-box').find('p').fadeIn(800);
    }, 600);


    var num = 0;
    var scrTop;
    var step1 = $('.step.first').offset().top;
    var step2 = $('.step').eq(1).offset().top;
    /*console.log('step1값 : ' + step1);
    console.log('step2값 : ' + step2);*/


    function subUp() {
        $('.sub-box').eq(num).find('.img-box').css({
            transform: 'translateY(0)',
            opacity: 1
        }).next().css({
            transform: 'translateX(0)',
            opacity: 1
        });
        num++;
    }

    $(window).scroll(function () {
        
        scrTop = $(this).scrollTop();
        
        if (scrTop > step1) {
            $(window).off('scroll');
            subUp();
            setTimeout(subUp, 800);

            $(window).scroll(function () {

                scrTop = $('html,body').scrollTop();
                if (scrTop > step2) {
                    $(window).off('scroll');
                    subUp();
                }

            }); //scroll
        }//scroll if
    }); //scroll




}); //jQuery
