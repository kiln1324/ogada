// identity.js



$(function () {
    $('main .txt-box').hide().delay(500).fadeIn(1000);
    $('.round-logo .txt-box').css({
        opacity: 0
    }).delay(2400).fadeTo(1000, 1);

    $('.color-system li .color-box').hover(function () {
        $(this).stop().fadeTo(400, 0);
    }, function () {
        $(this).stop().fadeTo(400, 1);
    });

    /*var scrTop;
    var colorBox = $('.color-system').offset().top;
    console.log('컬러박스값' + colorBox);
    var stop = 0;
    $(window).scroll(function () {

        if (stop == 1) return false;

        scrTop = $('html,body').scrollTop();
        console.log('스크롤값' + scrTop);

        if (scrTop > colorBox - 200) {
            for (var idx = 0; idx < 3; idx++) {
                $('.color-system li').eq(idx).find('.color-box').delay(200).triggerHandler('hover');
                console.log('반복중' + idx);
                stop = 1;
            }
        }
    });//scroll*/
    
    
    

    
    //하단 인테리어 갤러리 버튼

    var sNum = 0;
    var limit = $('.photo-wrap li').length;
    var prot = 0;

    $('.arrow').click(function (e) {

        e.preventDefault();
        if (prot == 1) return false;
        prot = 1;
        if (!$(this).index()) {
            sNum--;
            if (sNum === -1) sNum = 0;
            $('.photo-wrap ul').animate({
                left: -1200 * sNum + 'px'
            }, 600, function () {
                prot = 0;
            });
        } else {
            sNum++;
            if (sNum === limit) sNum = limit - 1;

            $('.photo-wrap ul').animate({
                left: -1200 * sNum + 'px'
            }, 600, function () {
                prot = 0;
            });
        }

    }); //click

    $('.arrow').hover(function () {
        if (!$(this).index()) {
            $(this).animate({
                left: -65
            });
        } else {
            $(this).animate({
                right: -65
            });
        }
    }, function () {
        if (!$(this).index()) {
            $(this).animate({
                left: -60
            });
        } else {
            $(this).animate({
                right: -60
            });
        }
    }); //hover

    
    
    
    // 모달 기능
    $('.photo-wrap li').click(function (e) {

        e.preventDefault();
        var imgSrc = $(this).find('img').attr('src');
        console.log(imgSrc);

        $('#gallery').show();
        $('#Photo').show().html('<img src="' + imgSrc + '" alt="인테리어 이미지">');

    });

    $('#Photo').click(function () {
        $(this).hide();
        $('#gallery').hide();
        $('#Photo').empty();
    });


}); //jQuery
