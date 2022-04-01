//event.js


$(function () {


    var secIdx = 0;
    var prot = 0;

    var nowOn = $('#nowOn ul li');
    var finish = $('#finish ul li');

    nowOn.slice(0, 2).show();
    finish.slice(0, 4).show();

    $('#finish').hide();

    $('#tit-tab ul li').click(function (e) {

        e.preventDefault();

        secIdx = $(this).index();
        console.log(secIdx);

        if (prot == 1) return false;
        prot = 1;

        if (secIdx) {
            $('#finish').fadeIn(600).prev().hide();
            nowOn.hide().slice(0, 2).show();
            console.log('인덱스1');
        } else {
            $('#nowOn').fadeIn(600).next().hide();
            finish.hide().slice(0, 4).show();
            console.log('인덱스0');
        }

        $(this).addClass('on').siblings().removeClass('on');
        prot = 0;

    }); //click


    // secIdx=0 진행중이벤트가 보이고 있음
    // secIdx=1 종료된이벤트가 보이고 있음
    
    var count = 0;

    $('.more-btn').click(function (e) {
        e.preventDefault();
        
        if (prot == 1) return false;
        prot = 1;
        
        if(secIdx){
            count=4;
        }else{
            count=2;
        };

        $(this).prev().find('li:hidden').slice(0, count).slideDown(800);

        $('html,body').animate({
            scrollTop: $(this).offset().top-320
        }, 1500);
        
        if ($(this).prev().find('li:hidden').length === 0) {
            $(this).fadeOut(1000);
        }
        
        prot = 0;

    }); //더보기버튼 클릭


}); //jQuery
