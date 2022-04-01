//sub-top-common.js


$(function(){
    $('#tit-tab li').click(function(e){
        e.preventDefault();
        var tabName = $(this).find('a').attr('href');
        console.log(tabName);
        
        var scrTop = Math.ceil($(tabName).offset().top);
        console.log(scrTop);
        
        $('html,body').animate({
            scrollTop : scrTop-120
        }, 800,'easeInOutExpo');
        
    });//click
});//jQuery