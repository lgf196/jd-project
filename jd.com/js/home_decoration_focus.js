
$(function(){
	  var indexx =0;
      var timeer=null;
      var focusindex =0;
 
    //底部按钮功能
    $('.sliderBox>ol>li').mouseover(function () {
        focusindex = $(this).index();
        indexx = focusindex;     
        autoPlay();
    });
    //右箭头
    $('#right').click(function () {
        if (indexx ==7) {
            indexx = 0;
        }
        else {
            indexx++;
        }
        
        autoPlay();

    });
    //左箭头
    $('#left').click(function () {
        if (indexx==0) {
            indexx= 7;
        }
        else {
            indexx--;
        }       
        autoPlay();
    });
    //定时播放
    function auto(){
            indexx++;
            if(indexx>7) indexx=0; 
            autoPlay();
    } 
    timeer = setInterval(auto, 4000);
      $('#sliderBox').mouseover(function(event) {
            clearInterval(timeer);
      });
       $('#sliderBox').mouseout(function(event) {
             timeer = setInterval(auto, 4000);
      });
      function autoPlay() {   
        $('#sliderBox>ol>li').eq(indexx).addClass('cur').siblings().removeClass('cur');
        $('#sliderBox>ul>li').eq(indexx).fadeIn().siblings().fadeOut();
    }
    //箭头显示隐藏
    $("#box").css("display", "none");
    $(".focus").mouseover(function () {
            $("#box").css("display", "block");
    });
    $(".sliderBox").mouseout(function () {
            $("#box").css("display", "none");
    });
});
	    