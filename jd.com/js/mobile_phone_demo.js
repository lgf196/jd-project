/**
 * Created by forever on 2017/8/1.
 */
window.onload = function () {

    //主页轮播图开始
    $(function () {
        var index = 0, timer, focusindex = 0;
        var color = ["#EAC6C6", "#0F0705", "#002258", "#060606", "#7256FF", "#4378FF"];

        $('#box>span').mouseover(function () {
            focusindex = $(this).index();
            index = focusindex;
            $("#banner").css("background", color[index]);
            autoPlay();
        });
        $('.arr-r').click(function () {
            if (index == 5) {
                index = 0;
            }
            else {
                index++;
            }
            $("#banner").css("background", color[index]);
            autoPlay();
        })
        $('.arr-l').click(function () {
            if (index == 0) {
                index = 5;
            }
            else {
                index--;
            }
            $("#banner").css("background", color[index]);
            autoPlay();
        })
        timer = setInterval(function () {
            $('.arr-r').click();
        }, 3000);
        $('#banner').hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(function () {
                $('.arr-r').click();
            }, 3000);
        })

        function autoPlay() {
            $('#box>span').eq(index).addClass('cur').siblings().removeClass('cur');
            $('.imges>li').eq(index)

                .fadeIn()
                .siblings()
                .fadeOut();
        }
    });


//小轮播图(高性价比)
//    var index = 0, timer, focusindex = 0;
//
//    $('.btn>li').mouseover(function () {
//        focusindex = $(this).index();
//        index = focusindex;
//        ato();
//    });
//    $('.arr-1').click(function () {
//        if (index == 1) {
//            index = 0;
//        }
//        else {
//            index++;
//        }
//        ato();
//
//    })
//    $('.arr-2').click(function () {
//        if (index == 0) {
//            index = 1;
//        }
//        else {
//            index--;
//        }
//        ato();
//    })
//    timer = setInterval(function () {
//        $('.arr-1').click();
//    }, 3000);
//    $('.btn').hover(function () {
//        clearInterval(timer);
//
//    }, function () {
//        timer = setInterval(function () {
//            $('.arr-2').click();
//        }, 3000);
//    })
//    function ato() {
//        $('.btn>li').eq(index).addClass('cur').siblings().removeClass('cur');
//        $('.recommendation>li').eq(index).fadeIn().siblings().fadeOut();
//    }


    //小轮播图(主题购)
    $('.bigimgs').fadebanner({
        animatetime: 400,
        playtime: 3000,     //表示自动播放动画的时间间隔
        liimgeles: '.ol>li',      //全部img的li
        focuseles: '.ul>li',      //全部的小焦点
        createli: 'li',      //创建小焦点的标签
        bigfocusul: '.ul',    //包含所有小焦点的父盒子
        focusclass: 'aut',     //小焦点的class
        outerdiv: '.bigimgs',      //包含整个banner区的大盒子
        bind: 'mouseover',     //事件类型
        leftbtn: '.btn1',      //左按钮
        rightbtn: '.btn2'      //右按钮
    });
    //小轮播图(高性价比)
    $('.bigimg').fadebanner({
        animatetime: 400,
        playtime: 3000,     //表示自动播放动画的时间间隔
        liimgeles: '.recommendation>li',      //全部img的li
        focuseles: '.btn>li',      //全部的小焦点
        createli: 'li',      //创建小焦点的标签
        bigfocusul: '.btn',    //包含所有小焦点的父盒子
        focusclass: 'cur',     //小焦点的class
        outerdiv: '.bigimg',      //包含整个banner区的大盒子
        bind: 'mouseover',     //事件类型
        leftbtn: '.btn3',      //左按钮
        rightbtn: '.btn4'      //右按钮
    });


    //高性价比切换栏
    $(function () {
        $(".more").tab({
                tabname: ".lis>ul>li",//顶部切换栏目
                tabdiv: ".mob>ul",//底下对应内容
                addclass: "current",
                bind: "mouseover",//事件类型
                animatetime: 10  //更具需求更改他,最好不要写这个属性
            }
        );
    });
    var tis = document.querySelectorAll(".lis s");
    var dls = document.querySelectorAll(".lis li");
    for (var i = 0; i < dls.length; i++) {
        dls[i].index = i;
        dls[i].onmouseover = function () {
            for (var i = 0; i < dls.length; i++) {
                dls[i].style.backgroundColor = "#4D4B4C";
            }
            for (var i = 0; i < tis.length; i++) {
                tis[i].style.display = "none";
            }
            this.style.backgroundColor = "#f40";
            tis[this.index].style.display = "block";

        };
    }

    //潮机推荐轮播图
    $('.arrival').fadebanner({
        animatetime: 400,
        playtime: 3000,     //表示自动播放动画的时间间隔
        liimgeles: '.jpgs>li',      //全部img的li
        focuseles: '.knob>li',      //全部的小焦点
        createli: 'li',      //创建小焦点的标签
        bigfocusul: '.knob',    //包含所有小焦点的父盒子
        focusclass: 'red',     //小焦点的class
        outerdiv: '.arrival',      //包含整个banner区的大盒子
        bind: 'mouseover',     //事件类型
        leftbtn: '.span-l',      //左按钮
        rightbtn: '.span-r'      //右按钮
    });

    //点击顶部按钮关闭广告
    var gg = document.querySelector("#gg");
    var ggin = document.querySelector("#ggin")
    var closebtn = document.querySelector("#ggin span");
    closebtn.onclick = function () {
        gg.style.display = "none";
        ggin.style.display = "none";
    };

    //二维码显示与隐藏
    var erweima = document.querySelector(".erweima");
    var pic = document.querySelector(".pic");
    erweima.onmouseover = function () {
        pic.style.display = "block";
    };
    erweima.onmouseout = function () {
        pic.style.display = "none";
    };


    //$(function () {
    //    $(".dd>ul>li").mouseover(function () {
    //        $(this).siblings("li").css("backgroundColor", "");
    //        $(this).css("backgroundColor", "skyblue");
    //        $(".item").css("display", "block");
    //    });
    //    $(".dd>ul>li").mouseout(function () {
    //        $(".dd>ul>li").css("backgroundColor", "");
    //        $(".item").css("display", "none");
    //    });
    //});

    //左侧导航栏切换
    var lis = document.querySelectorAll(".dd>ul>li");
    var items = document.querySelectorAll(".item");
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onmouseover = function () {
            for (var i = 0; i < items.length; i++) {
                items[i].style.display = "none";
            }
            items[this.index].style.display = "block";
            items[this.index].style.backgroundColor = "#FCF6F6";
        };
        lis[i].onmouseout = function () {
            items[this.index].style.display = "none";
        };
    }

    //固定导航栏
    $(function () {
        $(window).scroll(function () {
            if ($(document).scrollTop() > 1100) {
                $(".seek").css({"position": "fixed", "top": 0, "display": "block"});
            } else {
                $(".seek").css({"position": "static", "display": "none"})
            }
        });
    });

}




