//m-index.js


//플러그인
$(function(){
});//jQuery



$(function () {
    /* var tick=0;
$('body').prepend('<div id="tick">'+tick+'</div>');
    
    $('#tick').css({
       position:'fixed',
        bottom:0,
        left:0,
        width:'100px',
        height:'100px',
        zIndex:99999999,
        textAlign: 'center',
        fontSize: '40px',
        backgroundColor: 'pink'
    });
    
 var st = setInterval(function(){
     tick++;
      $('#tick').text(tick);
 },1000);*/

    var mainh = $('#visual0 img').height();
    $('.main').height(mainh);

    $('#pager').css('top', mainh - 42);

    /*----------------------- main --*/

    var seq = 0;

    //메인 함수

    function moveImg() {
        seq++;
        if (seq == 3) seq = 0;
        $('.container .visual-box').eq(seq).fadeIn(1000).siblings().fadeOut(1000);


        $('#pager .page').text(seq + 1);
    }

    var autoMain; //메인 인터벌

    function autoSlide() {
        //메인 자동실행
        autoMain = setInterval(moveImg, 7000);
    }

    //메인비주얼 멈춤, 다시시작
    $('.container').hover(function () {
        clearInterval(autoMain);
        /*console.log('메인비주얼에 호버함');*/
    }, function () {
        autoSlide();
    });

    autoSlide();


    //메인 페이저 클릭
    $('#pager ul li').click(function (e) {

        e.preventDefault();
        var i = $(this).index();
        $('.container .visual-box').eq(i).fadeIn(1000).siblings().fadeOut(1000);
        $(this).addClass('active').siblings().removeClass('active');
    });



    /*----------------------- tea tab --*/

    $('#listHanbang').show().find('li').show();

    $('.tea .tab-menu li').click(function (evt) {
        evt.preventDefault();

        //탭버튼 디자인
        $(this).addClass('on').siblings().removeClass('on');

        var idx = $(this).index();

        $('.tea-list ul').eq(idx).fadeIn(500).siblings().fadeOut(500, function () {
            $('.tea-list ul').eq(idx).find('li').fadeIn(1000);
        });
    }); //tab.click

    $('.tea-list ul:visible').draggable({
        axis: 'x' //x축 고정
    });
    
    $('.tea-list ul').css({
        transition: 'all 0.1s ease-out'
    });

    /* $('.tea-list').on('mouseup mousemove', function () {
        //1) 움직이는 박스(#move)의 현재 left값 알아오기
        var mpos = $('.tea-list ul').offset().left;
        console.log('현재 이동박스 left값 : ' + mpos);

        //2) 화면 절반크기 계산(첫 번째 한계점)
        var fpoint = $(window).width() / 2;
        //var fpoint = ($(window).width() / 2)-150;        console.log('현재화면 가로너비의 절반' + fpoint);

        //3) 마지막 이미지의 한계점
        var lpoint = $('#move').width() - fpoint;
        console.log('마지막 한계값 : ' + lpoint);

        //4) 처음과 마지막 위치값 강제 설정하기
        if (mpos > fpoint) {
            $('#move').css({
                left: fpoint - 150 + 'px'
            });
        } else if (mpos < -lpoint) {
            $('#move').css({
                left: -lpoint + 150 + 'px'
            });
        }

    }); */



    /*----------------------- video --*/
    /*var ck =0;*/
    var myVideo = $('.about-video video').get(0);
    /*console.log(myVideo);*/

    $('.about-video video').click(function () {
        if (myVideo.paused) {
            $('#play span').addClass('play').parent().fadeOut(600);
            /*ck = 0;*/
        } else {
            $('#play').fadeIn(600);
            $('#play span').removeClass('play');
            /*ck=1;*/
        }
    });

    $('.about-video video').hover(function () {
        $('#play').stop().fadeIn();
    }, function () {
        if (!myVideo.paused) {
            $('#play').stop().fadeOut();
        }
    });




    /*----------------------- prod ------*/


    $('.best-prod .prod-box a').hover(function () {
        $(this).find('img:last').stop().fadeOut(800).siblings().stop().fadeIn(800);

    }, function () {
        $(this).find('img:first').stop().fadeOut(800).siblings().stop().fadeIn(800);
    });



    /*----------------------- news new ------*/

    var rNum = Math.ceil(Math.random() * 2);

    $('.news a').eq(rNum - 1).show().siblings().hide();


    /*----------------------- event-slide ------*/


    var page = 0;

    //이벤트 슬라이드 함수
    function evtMove() {

        page++;

        $('#evtGrp').animate({
            left: (page * -784) + "px"
        }, 800, function () {
            if (page === 3) {
                $('#evtGrp').css({
                    left: 0
                });

                page = 0;
            }
            $('#evtPager ul li').eq(page).addClass('active').siblings().removeClass('active');
        });
    }

    var evtInt; //이벤트슬라이드 인터벌

    function autoEvt() {
        //이벤트 슬라이드 자동실행
        evtInt = setInterval(evtMove, 4000);
    }

    autoEvt(); //자동실행 호출

    $('#evtGrp').hover(function () {
        clearInterval(evtInt);
        console.log('이벤트슬라이더에 호버함');
    }, function () {
        autoEvt();
    });


    $('#evtPager ul li').click(function (e) {

        e.preventDefault();
        page = $(this).index() - 1;
        evtMove();
    });


    /*----------------------- notice ------*/


    function noticeAuto() {
        var trg = $('#notice .list-wrap ul');
        trg.animate({
            marginTop: '-60px'
        }, 800, function () {
            trg.append(trg.find('li').first());
            trg.css({
                marginTop: 0
            });
        });
    }

    var notiInt; //공지사항 인터벌 변수

    function notiAuto() {
        //공지사항 자동 슬라이드함수
        notiInt = setInterval(noticeAuto, 5000)
    }

    notiAuto(); //자동슬라이드 호출

    $('#notice').hover(function () {
        clearInterval(notiInt);
        console.log('공지사항에 호버함');
    }, function () {
        notiAuto();
    });


}); //jQuery
