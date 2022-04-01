// compete.js


var pno = 0;
var totp = $('.page').length; //푸터 포함한 페이지 수
var prot = 0;
/*var pagepos;*/

$(function () {


    $(document).on('mousewheel DOMMouseScroll', function (e) {

        e.preventDefault();
        if (prot === 1) return false;
        prot = 1;

        var evt = window.event || e;

        var delta = evt.detail ? evt.detail : evt.wheelDelta;
        console.log(delta);

        if (/Firefox/i.test(navigator.userAgent)) {
            delta = -evt.orginalEvent.detail;
        }

        if(delta>0){
            pno--;
            if(pno === -1) pno = 0;
        } else {
            pno++;
            /*if(pno === totp) pno = totp+1;*/
            if(pno === totp) pno = totp-1;
        }
        /*console.log('pno값 : '+ pno);*/
        
        /*pagepos = $('#compete'+pno).offset().top;*/
        pagepos = $('.page').eq(pno).offset().top;
        /*console.log('페이지위치 : '+pagepos);*/
        
        $('html,body').animate({
            scrollTop : pagepos+'px'
        },800,function(){
            prot = 0;
        });
    }); //on




}); //jquery
