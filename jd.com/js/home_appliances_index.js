/**
 * Created by 为你存在 on 2017/7/30.
 */
/*window.onload = function () {

 };*/


$(function () {
    $(".w").tab({
            tabname: ".sale-tab>ul>li",//顶部切换栏目
            tabdiv: ".tab-content-div>ul",//底下对应内容
            addclass: "current",
            bind: "mouseover",//事件类型
            animatetime: 0 //更具需求更改他,最好不要写这个属性
    });



    $(".main01").tab({
        tabname: ".main-tab01>li",//顶部切换栏目
        tabdiv: ".main-tab-content01>div",//底下对应内容
        addclass: "current",
        bind: "mouseover",//事件类型
        animatetime: 0
    });


    $(".main02").tab({
        tabname: ".main-tab02>li",
        tabdiv: ".main-tab-content02>div",
        addclass: "current",
        bind: "mouseover",
        animatetime: 0
    });

    $(".main03").tab({
        tabname: ".main-tab03>li",
        tabdiv: ".main-tab-content03>div",
        addclass: "current",
        bind: "mouseover",
        animatetime: 0
    });

    $(".main04").tab({
        tabname: ".main-tab04>li",
        tabdiv: ".main-tab-content04>div",
        addclass: "current",
        bind: "mouseover",
        animatetime: 0
    });

    $(".main05").tab({
        tabname: ".main-tab05>li",
        tabdiv: ".main-tab-content05>div",
        addclass: "current",
        bind: "mouseover",
        animatetime: 0
    });

    $(".main06").tab({
        tabname: ".main-tab06>li",
        tabdiv: ".main-tab-content06>div",
        addclass: "current",
        bind: "mouseover",
        animatetime: 0
    });

    $(".main07").tab({
        tabname: ".main-tab07>li",
        tabdiv: ".main-tab-content07>div",
        addclass: "current",
        bind: "mouseover",
        animatetime: 0
    });


    $(".rank01").tab({
        tabname: ".rank-tab01>li",//顶部切换栏目
        tabdiv: ".rank-tab-content01>div",//底下对应内容
        addclass: "current",
        bind: "mouseover",//事件类型
        animatetime: 0
    });

    $(".rank02").tab({
        tabname: ".rank-tab02>li",//顶部切换栏目
        tabdiv: ".rank-tab-content02>div",//底下对应内容
        addclass: "current",
        bind: "mouseover",//事件类型
        animatetime: 0
    });

    $(".rank03").tab({
        tabname: ".rank-tab03>li",//顶部切换栏目
        tabdiv: ".rank-tab-content03>div",//底下对应内容
        addclass: "current",
        bind: "mouseover",//事件类型
        animatetime: 0
    });

    $(".rank04").tab({
        tabname: ".rank-tab04>li",//顶部切换栏目
        tabdiv: ".rank-tab-content04>div",//底下对应内容
        addclass: "current",
        bind: "mouseover",//事件类型
        animatetime: 0
    });

    $(".rank05").tab({
        tabname: ".rank-tab05>li",//顶部切换栏目
        tabdiv: ".rank-tab-content05>div",//底下对应内容
        addclass: "current",
        bind: "mouseover",//事件类型
        animatetime: 0
    });

    $(".rank06").tab({
        tabname: ".rank-tab06>li",//顶部切换栏目
        tabdiv: ".rank-tab-content06>div",//底下对应内容
        addclass: "current",
        bind: "mouseover",//事件类型
        animatetime: 0
    });


    $(".rank07").tab({
        tabname: ".rank-tab07>li",//顶部切换栏目
        tabdiv: ".rank-tab-content07>div",//底下对应内容
        addclass: "current",
        bind: "mouseover",//事件类型
        animatetime: 0
    });


    //文本框获取焦点后 如果是默认文字 才要清除
    $("#txt").focus(function () {
            //txt.value = "";//这里 txt 和 this 指的都是文本框
            if (this.value === "电视") {
                this.value = "";
            }
        });

    //文本框失去焦点后 如果用户没有输入内容 默认文字要加上
    $("#txt").blur(function () {
            if (this.value === "") {
                this.value = "电视";
            }
        });



    //轮播图开始
     var index = 0, timer, focusindex = 0;
    var color = ["#BE4AE9", "#a8d9f7", "#521eaf", "#f79003", "#76bafb"];

    //底部按钮功能
    $('.banner-ol>li').mouseover(function () {
        focusindex = $(this).index();
        index = focusindex;
        $(".banner").css("background", color[index]);
        autoPlay();
    });
    //右箭头
    $('.arr-r').click(function () {
        if (index == 4) {
            index = 0;
        }
        else {
            index++;
        }
        $(".banner").css("background", color[index]);
        autoPlay();

    });
    //左箭头
    $('.arr-l').click(function () {
        if (index == 0) {
            index = 4;
        }
        else {
            index--;
        }
        $(".banner").css("background", color[index]);
        autoPlay();
    });

    //定时播放
    function auto(){
            index++;
            if(index>4) index=0;
             $(".banner").css("background", color[index]);
           autoPlay();
    }
    timer = setInterval(auto, 2000);

     function autoPlay() {   
        $('.banner-ol>li').eq(index).addClass('cur').siblings().removeClass('cur');
        $('.banner-ul>li').eq(index).fadeIn().siblings().fadeOut();
    }
    $('.banner').hover(function () {
        clearInterval(timer);

    }, function () {
        timer = setInterval(auto, 2000);
    });

    //箭头显示隐藏
    $(".arrow").css("display", "none");
    $(".focus").mouseover(function () {
            $(".arrow").css("display", "block");
    });


    $(".focus").mouseout(function () {
            $(".arrow").css("display", "none");
    });

    //自动播放函数




    //箭头显示隐藏
   /* $(".focus").mouseover(function () {
            $(".arrow").show();
    }).mouseout(function () {
            $(".arrow").hide();
    });*/

    //自动播放函数
   

   //floor轮播
    /*var pic = 0;
    var timer_f = null;
    // 1.0 完成鼠标经过盒子隐藏和显示盒子的功能
    $(".first-floor .f03").mouseover(function() {
        console.log(1);
        clearInterval(timer_f);
        //$(".arrow-f").show();
    }).mouseout(function() {
        timer_f = setInterval($(".arrow-f .arr-r").click, 3000);
        //$(".arrow-f").hide();
    })
    // 2.0 封装一个自动轮播的功能
    function changePic(index) {
        $(".focus-f ul li:eq("+index+")").fadeIn(300).siblings("li").fadeOut(300);
        $(".focus-f ol li:eq("+index+")").addClass("present").siblings("li").removeClass();
    }
    /!*function autoPlay_f() {

        if(pic === 2) {
            pic = 0;
        }else{
            pic++;
        }
        changePic(pic);
    }*!/

    timer_f = setInterval($(".arrow-f .arr-r").click, 3000)

    // 3.0 给左右箭头添加事件
    $(".arrow-f .arr-r").click(function() {
        if(pic === 2) {
            pic = 0;
        }else{
            pic++;
        }
        changePic(pic);
    })
    $(".arrow-f .arr-l").click(function() {

        if(pic === 0) {
            pic = 2;
        }else{
            pic--;
        }
        changePic(pic);
    })
    // 4.0 添加按钮事件
    $(".focus-f ol li").click(function() {
        var eq = $(this).index();
        changePic(eq);
        pic = eq;
    })*/


});






