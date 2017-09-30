window.onload=function(){
  //nav-top  点击span 以动画的形式隐藏
  var closeButton=document.getElementById("closeButton");
  var topBanner=document.getElementById("topBanner");

  closeButton.onclick=function(){
    topBanner.style.display="none";

  };

};
//banner-img 轮播图
$(function(){
  var index=0,timer,focusindex=0;
  var color=["rgb(12,201,255)","rgb(246,246,246)","rgb(253,241,208)","rgb(200,224,252)"  ];

  $('.lines>li').mouseover(function(){
    focusindex=$(this).index();
    index=focusindex;
    $(".main").css("background",color[index]);
    ato();
  });
  $('.right1').click(function(){
    if(index==3){
      index=0;
    }
    else{
      index++;
    }
    $(".main").css("background",color[index]);
    ato();
  })
  $('.left1').click(function(){
    if(index==0){
      index=3;
    }
    else{
      index--;
    }
    $(".main").css("background",color[index]);
    ato();
  })
  timer=setInterval(function(){
    $('.right1').click();
  },3000);
  $('.focus').hover(function(){
    clearInterval(timer);

  },function(){
    timer=setInterval(function(){
      $('.right1').click();
    },3000);
  })
  function ato(){
    $('.lines>li').eq(index).addClass('current').siblings().removeClass('current');
    $('.ul>li').eq(index)

        .fadeIn()
        .siblings()

        .fadeOut();
  }
});

//下面的轮播图
$(function(){
  $(".content").slidebanner({
    liimgeles:'.content-banner>li',
    bigul:'.content-banner',
    outerdiv:'.content',
    bind:'click',
    leftbtn:'.left',
    rightbtn:'.right'
  });
});
