/**
 * Created by 为你存在 on 2017/8/3.
 */
$(function () {
    //家电首页二级菜单
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
    //全部分类下拉菜单
    $(".all-categorys").mouseover(function () {
        $(".cate-inner").show().css("zIndex", 5);
    }).mouseout(function () {
        $(".cate-inner").hide();
    });

    //二维码
    $(".qrcode").mouseover(function () {
        $(".qrcode-big").show();
    }).mouseout(function () {
        $(".qrcode-big").hide();
    });

    //定位栏
    /*$(document).scroll(function(){
        if($(document).scrollTop()>=$(".jiadian-category").height()){
            $(".location").fadeIn(1000).css({"position":"fixed","right":295,"bottom":20});
        }else{
            $(".location").fadeOut(1000);
        }
    });*/
    //北京
    $(".beijing").mouseover(function(){
        $(this).css("backgroundColor","#fff");
        $(".beijing-drop").show();
    }).mouseout(function(){
        $(this).css("backgroundColor","");
        $(".beijing-drop").hide();
    });
    $(".beijing-drop>.beijing-item").mouseover(function(){
        $(this).css({"backgroundColor":"rgba(130,130,130,.2)"}).find("a").css("color","#C60C1B");
    }).mouseout(function(){
        $(this).css({"backgroundColor":""}).find("a").css("color","");
    });/*.click(function(){
        $(this).css("backgroundColor","#f40").find("a").css("color","#fff");
    })*/

    //我的京东
    $(".myjd").mouseover(function(){
        $(".myjd-drop").show();
        $(this).css({"backgroundColor":"#fff"});
    }).mouseout(function(){
        $(".myjd-drop").hide();
        $(this).css({"backgroundColor":""});
    });
    //去广告
    $(".advance-close").click(function(){
        $(".advance").hide();
    });
    //购物车
    $(".car").mouseover(function(){
        $(this).css({"backgroundColor":"#fff","box-shadow":"0 0 5px rgba(0, 0, 0, 0.2)"});//box-shadow: 0 0 5px rgba(0, 0, 0, 0.2)
        $(".car-drop").show().css("box-shadow","0 0 7px rgba(0, 0, 0, 0.2)");
    }).mouseout(function(){
        $(this).css({"backgroundColor":"","box-shadow":"0 0 0px rgba(0, 0, 0, 0.2)"});
        $(".car-drop").hide().css("box-shadow","0 0 0px rgba(0, 0, 0, 0.2)");
    });
    //客户服务
    $(".custom").mouseover(function(){
        $(".custom-drop").show();
        $(this).css({"backgroundColor":"#fff"});
    }).mouseout(function(){
        $(".custom-drop").hide();
        $(this).css({"backgroundColor":""});
    });
    //网站导航
    $(".webnav").mouseover(function(){
        $(".webnav-drop").show();
        $(this).css({"backgroundColor":"#fff"});
    }).mouseout(function(){
        $(".webnav-drop").hide();
        $(this).css({"backgroundColor":""});
    });
});

