/**
 * Created by Administrator on 2017/8/3.
 */
/*送货地址*/
$(function(){
    $(".fl-1").mouseover(function(){
        $(this).css("backgroundColor","#fff");
        $(".fl-1 i s").css("top","0px");
        $(".beijing-drop").show();
    }).mouseout(function(){
        $(this).css("backgroundColor","");
        $(".fl-1 i s").css("top","-7px");
        $(".beijing-drop").hide();
    });
    $(".beijing-drop>.beijing-item").mouseover(function(){
        $(this).css({"backgroundColor":"rgba(130,130,130,.2)"}).find("a").css("color","#C60C1B");
    }).mouseout(function(){
        $(this).css("backgroundColor","").find("a").css("color","");
    })
})

/*广告栏*/
$(function(){
    $(".ch").click(function(){
        $(".datu").hide(400);
    })
})
/*全部分类*/
$(function(){
    $(".all-categorys").mouseover(function(){
        $(".cate-inner").show();
    }).mouseout(function(){
        $(".cate-inner").hide();
    })
})
/*电脑整机分类*/
$(function(){
    $(".dd>ul>li").mouseover(function () {
        $(this).css({"backgroundColor": "#D13030"}).siblings("li").css("backgroundColor", "");
        //$(this).find("a").css("color","#666").siblings().find("a").css("color","#fff");
        $(this).find(".dd-item").show();
    }).mouseout(function () {
        $(".dd>ul>li").css("backgroundColor", "");
        $(".dd-item").hide();
        //$(this).find("a").css("color","#fff").siblings().find("a").css("color","#fff");
    })

    $(".service-list>ul>li").mouseover(function () {

    });
})
/*焦点轮播图*/
$(function(){
    var pic=0;
    var timer=null;
    $(".focus").mouseover(function(){
        clearInterval(timer);
    }).mouseout(function(){
        timer=setInterval(autoPlay,2000);
    })
    function changePic(index){
        $(".focus ul li:eq("+index+")").fadeIn(200).siblings("li").fadeOut(200);
        $(".slider ul li:eq("+index+")").addClass("fo").siblings("li").removeClass();
    }
    function autoPlay(){
        pic++;
        if(pic===6){
            pic=0;
        }
        changePic(pic);
    }
    timer=setInterval(autoPlay,2000)
    $(".slider ul li").mouseover(function(){
        var eq=$(this).index();
        changePic(eq);
        pic=eq;
    })
})
/*小编推荐*/
$(function () {
    var pic=0;
    var timer = null;
   $(".finds").mouseover(function(){
      clearInterval(timer);
   }).mouseout(function(){
       timer=setInterval(autoPlay,2000);
   })
    function changePic(index){
        $(".img58 ul li:eq("+index+")").fadeIn(200).siblings("li").fadeOut(200);
        $(".word ul li:eq("+index+")").addClass("yo").siblings("li").removeClass();
    }
    function autoPlay(){
        pic++;
        if(pic===4){
            pic=0;
        }
        changePic(pic);
    }
    timer=setInterval(autoPlay,2000)
    $(".word ul li").mouseover(function(){
        var eq=$(this).index();
        changePic(eq);
        pic=eq;
    })
})
/*服务器/工作站*/
$(function(){
    var pic=0;
    var timer=null;
    $(".active").mouseover(function(){
        clearInterval(timer);
    }).mouseout(function(){
        timer=setInterval(autoPlay,2000);
    })
    function changePic(index){
        $(".active ul li:eq("+index+")").fadeIn(200).siblings("li").fadeOut(200);
        $(".active ol li:eq("+index+")").addClass("cur").siblings("li").removeClass();
    }
  function autoPlay(){
      pic++;
      if(pic===3){
          pic=0;
      }
      changePic(pic);
  }
    timer=setInterval(autoPlay,2000)
    $(".active ol li").mouseover(function(){
        var eq=$(this).index();
        changePic(eq);
        pic=eq;
    })
})




