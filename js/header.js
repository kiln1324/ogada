//header.js


$(function () {

    $('#gnb').mouseenter(function () {
        $('header,#gnb').stop().animate({
            paddingBottom: '260px'
        }, 800);

        $('#gnb>ul>li ul').stop().slideDown(800);
    });

    $('#gnb').mouseleave(function () {
        $('header,#gnb').stop().animate({
            paddingBottom: 0
        }, 600);

        $('#gnb>ul>li ul').stop().slideUp(600);
    });

    $('produt-link li').click(function (e) {
        e.preventDefault();
    });


    $('[class$=btn]').hover(function () {
        $(this).animate({
            backgroundColor: '#312727',
            color: '#fff',
            border: '2px solid #312727'
        });
    },function(){
        $(this).animate({
            backgroundColor: '#f4f1f1',
            color: '#312727',
            border: '2px solid #d2c6c6'
        });
    });
    
    
    $('footer .link a').click(function(e){
        if($(this).attr('href')=='#') e.preventDefault();
    });

}); //jQuery
