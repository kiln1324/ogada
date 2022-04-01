//product.js


$(function () {
    $('.img-box').hover(function () {
        $(this).find('img').last().stop().fadeTo(600, 0);
    }, function () {
        $(this).find('img').last().stop().fadeTo(600, 1);
    });
    
    
    var secIdx = 0;
    var prot = 0;
    

    $('#tit-tab ul li').click(function (e) {

        e.preventDefault();

        secIdx = $(this).index();
        console.log(secIdx);

        if (prot == 1) return false;
        prot = 1;
        if(secIdx === 0){
            $('.list').show();
        } else {
            $('.list').eq(secIdx-1).show().siblings('.list').hide();
        }
        

        $(this).addClass('on').siblings().removeClass('on');
        prot = 0;
        
        
        /* 클릭하면 스크롤다운 */
        $('html,body').animate({
            scrollTop: $('section').offset().top-120
        })

    }); //click

    
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
        }, 300);
    });


}); //jQuery
