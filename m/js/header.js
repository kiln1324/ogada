//header.js


$(function () {
    var winh = $(window).height();
    $('.menu-wrap,.menu-box').height(winh);
    $('#gnb > ul').height(winh - 160);

    $('#gnb > ul > li> a').append('<div class="view-arrow">0</div>');

    $('#gnb > ul > li> a').click(function (e) {

        e.preventDefault();
        var set;

        $(this).next().stop().slideToggle(400, 'easeOutExpo').parent().siblings().find('ul').slideUp(800, 'easeOutExpo');



        set = parseInt($(this).find('.view-arrow').text());
        console.log(set);

        if (set) {
            $('.view-arrow').text('0').removeClass('on');
        } else {
            $(this).find('.view-arrow').text('1').addClass('on')
                $(this).parent().siblings().find('.view-arrow').removeClass('on').text('0');

        }

    }); //click

    $('#btn-m').click(function () {

        var mpos = parseInt($('.menu-wrap').css('right'));
        console.log(mpos);

        if (mpos === 0) {
            
            $('#btn-m').removeClass('active').css({
                left: '-50px'
            });

            $('.menu-wrap').animate({
                right: '-100%'
            },600);
            
        } else {
            $('#btn-m').addClass('active').css({
                left: '8%'
            });
            
            $('.menu-wrap').animate({
                right: '0'
            });
        }
    });

}); //jQuery
