$(function () {
    var timer = null, focusindex = 0;
    $('.banner-focus>li').mouseover(function () {
        focusindex = $(this).index();

        ato();
    });

    function auto() {
        focusindex++;
        if (focusindex > 8) focusindex = 0;
        ato();
    }

    $('.banner').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(auto, 3000);
    })
    timer = setInterval(auto, 3000);
    function ato() {
        $('.banner-focus>li').eq(focusindex).addClass('on').siblings().removeClass('on');
        $('.banner-tab>li').eq(focusindex).stop(true,true).fadeIn(1000).siblings().stop(true,true).fadeOut(1000);
    }

/*ÍÆ¼ö²¿·Ö*/
$(function () {
    $(".item>a>img").mousemove(function () {
        $(this).stop().animate({"width": "230px", "height": "153px"}), 500
    }).mouseout(function () {
        $(this).stop().animate({"width": "240px", "height": "160px"}), 500
})

});
/*1F²¿·Ö*/
$(function () {
    $(".in-img-cat>a>img").mousemove(function () {
        $(this).stop().animate({"width": "260px", "height": "116px"}), 500
    }).mouseout(function () {
        $(this).stop().animate({"width": "270px", "height": "121px"}), 500
    })

});
/*È«²¿³µÐÍ¿ò*/
$(function () {
    $(".l3").mousemove(function () {
        //Ò»ÃëÖÓ Í¸Ã÷¶È´ïµ½ ¶àÉÙ
        $(this).stop().fadeTo(500,1);
    }).mouseout(function () {
        $(this).stop().fadeTo(500,0.5);
    });

});

/*1FÂÖ²¥Í¼*/

var pic = 0;
var timeer = null;

// 2.0 ·â×°Ò»¸ö×Ô¶¯ÂÖ²¥µÄ¹¦ÄÜ
function changePic(index) {
    $("#lunbo-fl ol li:eq("+index+")").fadeIn(200).siblings("li").fadeOut(200);
    $("#lunbo-fl ul li:eq("+index+")").addClass("cur").siblings("li").removeClass();
}
function autoPlay() {
    pic++;
    if(pic === 5) {
        pic = 0;
    }
    changePic(pic);
}
    timeer = setInterval(autoPlay, 3000);
    /*$("#lunbo-fl").hover(function() {
        clearInterval(timer);
    }, function() {
      timer = setInterval(autoPlay, 2000);
    });*/
    $("#lunbo-fl").mouseover(function(){
       clearInterval(timeer);
    });

    $("#lunbo-fl").mouseout(function(){
        timeer = setInterval(autoPlay, 3000);
    });
});
