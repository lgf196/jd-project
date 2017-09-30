$(function(){
    var index=0,timer,focusindex=0;
    $('.yd>ul>li').mouseover(function(){
        focusindex=$(this).index();
        index=focusindex;
        ato();
    });
    $('.right').click(function(){
        if(index==2){
            index=0;
        }
        else{
            index++;
        }
        ato();

    })
    $('.left').click(function(){
        if(index==0){
            index=2;
        }
        else{
            index--;
        }
        ato();
    })
    timer=setInterval(function(){
        $('.right').click();
    },3000);
    $('.imges').hover(function(){
        clearInterval(timer);

    },function(){
        timer=setInterval(function(){
            $('.right').click();
        },3000);
    })
    function ato(){
        $('.yd>ul>li').eq(index).addClass('on').siblings().removeClass('on');
        $('.banner>li').eq(index).fadeIn().siblings().fadeOut();
    }

});







