//fnq.js


$(function () {
    $('.a-box').hide();
    $('.list-box li').prepend('<div class="view-arrow">0</div>');

    var prot = 0;
    /*var view;*/

    $('.q-box').click(function () {

        var set;

        $(this).next().stop().slideToggle(400, 'easeOutExpo').parent().siblings().find('.a-box').slideUp(800, 'easeOutExpo');



        set = parseInt($(this).prev().text());
        console.log(set);

        if (set) {
            /*$(this).prev().text('0').removeClass('on');*/
            $('.view-arrow').text('0').removeClass('on');
        } else {
            $(this).prev().text('1').addClass('on').parent().siblings().find('.view-arrow').removeClass('on').text('0');

        }

    }); //click
}); //jQuery
