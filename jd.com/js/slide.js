$(function(){
    var index=0,moveindexindex=0,clientw=$(".JDMSul-slide").width(),timer;
    $(".JDMSul-slide-right").click(function(){
        if(index==4){
            return;
        }
        else{
            index++;
            $(".JDMSul").animate({"left":-index*clientw},400);
        }
    });
    $(".JDMSul-slide-left").click(function(){
        if(index==0){
            return;
        }
        else{
            index--;
            $(".JDMSul").animate({"left":-index*clientw},400);
        }
    });

    //小轮播图
    $('.JDMSdiv-focus>li').mouseover(function(){
        moveindexindex=$(this).index();
        ato();
    });

    timer=setInterval(auto,3000);
    function auto(){
        moveindexindex++;
        if(moveindexindex>1) moveindexindex=0;
        ato();
    }
    function ato(){
        $('.JDMSdiv-focus>li').eq(moveindexindex).addClass('onn').siblings().removeClass('onn');
        $('.JDMSdiv-ul>li').eq(moveindexindex).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut();
    }
});