//about.js

$(function () {
    
    /*section 초기설정------------------------------*/
    $('.contents .wrapper>div').css({
        opacity: 0
    });

    $('.start .txt-box').hide();
    /*$('.instead .txt-box').children().hide();*/
    
    
    $('.open .img-box img').css({
        top: '-100%'    
    });
    
    
    /*//section 초기설정------------------------------*/
    
    
    
    
    /* --------------------------------스크롤 이벤트 */

    var pno = 0;
    const totcnt = $('.page').length;
    console.log(totcnt);
    var prot = 0;

    $(document).on('mousewheel DOMMouseScroll', function (e) {

        // 1. 스크롤 기본기능 막기
        e.preventDefault();

        if (prot == 1) return false;
        prot = 1;

        var evt = window.event || e;

        var delta = evt.detail ? evt.detail : evt.wheelDelta;
        /*console.log('마우스휠 델타값 : ' + delta);*/

        if (/Firefox/i.test(navigator.userAgent)) {
            delta = -evt.orginalEvent.detail;
        }

        if (delta > 0) { //양수 - 윗방향
            pno--;
            if (pno === -1) pno = 0;
        } else { //delta<0, 음수 - 아랫방향
            pno++;
            if (pno === totcnt) pno = totcnt-1;
        }
        

        var pagepos = $('.page').eq(pno).offset().top;

        //페이지 이동 애니메이션
        $('html,body').animate({
            scrollTop: pagepos + 'px'
        }, 800, function () {
            prot = 0; //잠금해제
        }); //animate
        
        if(pno==0){
            $('.location').slideDown(400);
        }
        
        
        if (pno == 1) {
            $('.location').slideUp(400);
            
            $('.contents .wrapper').find('.share').fadeTo(2000,1).next().delay(400).fadeTo(2000,1);
            
        } //pno1

        if (pno == 2) {
            $('.start .txt-box').fadeIn(1400);
        } //pno2
        
        if(pno == 3) {
            $('.instead .sub-tit').slideDown(1000).next().delay(400).fadeIn(1000);
        }
        
        if(pno == 4){
            $('.open .img-box img').animate({
                top:0
            },2000);
        }

    }); //scroll
    /* --------------------------------//스크롤 이벤트 */


    /* --------------------------------#main */
    /*$('#main').find('.box').css({
        opacity: 0,
        top: '-20px'
    });*/

    var bnum = 0;
    var showBox = setInterval(function () {
        $('.main .box-wrap .box').eq(bnum).animate({
            opacity: 1,
            top: '0'
        }, 800);
        bnum++;
    }, 400);

    if (bnum > 2) clearInterval(showBox);


}) //jQuery
