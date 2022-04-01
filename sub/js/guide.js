// guide.js



$(function () {

    var secIdx = 0;
    var prot = 0;

    $('section').not(':first').hide();

    $('#tit-tab ul li').click(function (e) {

        e.preventDefault();

        secIdx = $(this).index();
        /*console.log(secIdx);*/

        if (prot == 1) return false;
        prot = 1;

        $('section').eq(secIdx).fadeIn(600).siblings('section').hide();

        $(this).addClass('on').siblings().removeClass('on');
        prot = 0;

    }); //click


    /*---------------------table hover */

    /*$('.coast table tbody tr td').hover(function () {
        $(this).parent().css({
            backgroundColor: '#f4f1f1'
        });

        if ($(this).attr('rowspan') > 1) {
            $(this).parent().next().css({
                backgroundColor: '#f4f1f1'
            });
        }
        
        if($(this).parent().find('td').first().attr('rowspan') > 1) {
            $(this).parent().find('td').first().css({
                backgroundColor: 'transparent'
            });
        }
    }, function () {
        $('.coast table tbody tr').css({
            backgroundColor: 'transparent'
        });
    });*/



    /*-------------------//table hover */





    $('.process .fran-step').slideDown(1000);

    var i = 0;

    setTimeout(function () {

        var stepLoca = $('.process').offset().top;

        $('html,body').stop().animate({
            scrollTop: stepLoca - 120
        }, 1000);
    }, 1000);







}); //jquery
