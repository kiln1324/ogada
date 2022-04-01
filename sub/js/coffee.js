/* coffee.js */



$(function () {


    $('.intro .coffee-step li').children().not('.img-wrap').hide();

    var stepNum = 0;
    var loadStep;

    function autoStep() {
        loadStep = setInterval(function () {

            $('.coffee-step ul li').eq(stepNum).find('.img-wrap').css({
                transform: 'rotateY(0)'
            }).siblings().fadeIn(600);
            stepNum++;
            console.log(stepNum);

            if (stepNum === 5) clearInterval(loadStep);
        }, 800);
    }

    $('.intro .coffee-step').css({
        transform: 'rotateX(0)'
    }).find('ul').css({
        transform: 'rotateX(0)'
    });
    
    autoStep();
    
    
    $('.intro .intro-des .right-box ul li')


}); //jQuery
