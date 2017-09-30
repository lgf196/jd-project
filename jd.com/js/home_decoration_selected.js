/**
 * Created by Administrator on 2017/8/2.
 */
var mt = document.getElementById("mt");
var mtlis = mt.children;

var mbbig = document.getElementById("mbbig");
var mblis = mbbig.children;

var mbl = document.getElementById("mb-l");
var mblLis = mbl.children[0].children;

for (var i = 0; i < mblLis.length; i++) {
    mblLis[i].n = i;
    mblLis[i].onmouseover = function () {
        for (var i = 0; i < mblLis.length; i++) {
            mtlis[i].className = "";
            mblLis[i].className = "";
            mblis[i].className = "hid";
        }
        mtlis[this.n].className = "style-o";
        this.className = "bgc";
        mblis[this.n].className = "show";
    }
}


for (var i = 0; i < mtlis.length; i++) {
    mtlis[i].index = i;
    mtlis[i].onmouseover = function () {
        for (var i = 0; i < mtlis.length; i++) {
            mtlis[i].className = "";
            mblLis[i].className = "";
            mblis[i].className = "hid";
        }
        this.className = "style-o";
        mblLis[this.index].className = "bgc";
        mblis[this.index].className = "show";


    }
}

var mbmtlis = mbbig.children[0].children[0].children[0].children[0].children;
var mbmtolLis = mbbig.children[0].children[0].children[0].children[1].children;
//var mbmtlis = $("#mbbig .show")[0].children[0].children[0].children[0].children;
//var mbmtolLis = $("#mbbig .show")[0].children[0].children[0].children[1].children;
var timer = null;
var pic1 = 0;
mbbig.children[0].children[0].children[0].onmouseover = function () {
    clearInterval(timer);
}
mbbig.children[0].children[0].children[0].onmouseout = function () {
    timer = setInterval(play, 2000);
}
function play() {
    pic1++;
    if (pic1 == 3) {
        pic1 = 0;
    }
    for (var i = 0; i < mbmtlis.length; i++) {
        animate(mbmtlis[i], {"opacity": 0});
        mbmtolLis[i].className = "";
    }
    animate(mbmtlis[pic1], {"opacity": 1})
    mbmtolLis[pic1].className = "style-w";
}
timer = setInterval(play, 2000);
for (var i = 0; i < mbmtolLis.length; i++) {
    mbmtolLis[i].index = i;
    mbmtolLis[i].onmouseover = function () {
        for (var i = 0; i < mbmtolLis.length; i++) {
            animate(mbmtlis[i], {"opacity": 0});
            mbmtolLis[i].className = ""
        }
        animate(mbmtlis[this.index], {"opacity": 1});
        this.className = "style-w";

        pic1 = this.index;
    }
}
/*
 $(function () {
 $("#mb-mt").fadebanner({
 animatetime:400,
 playtime:1000,
 liimgeles:'#mb-mt>ul>li',      //全部img的li
 focuseles:'#mb-mt>ol>li',      //全部的小焦点
 createli:'li',      //创建小焦点的标签
 bigfocusul:'ol',    //包含所有小焦点的父盒子
 focusclass:'.style-w',     //小焦点的class
 outerdiv:'#mb-mt',      //包含整个banner区的大盒子
 bind:'mouseover',     //事件类型
 });
 });*/

//轮播区开始
$(function () {
    $("#bighot-brbb").slidebanner({
        focuseles: '#bighot-brbb>ul>li',     //全部的小焦点
        liimgeles: '.bighot-brb>ul>li',      //全部img的li
        bigul: '.bighot-brb>ul',         //包含img的父盒子
        outerdiv: '.bighot-brb',      //包含整个banner区的大盒子
        bind: 'mouseover',     //事件类型
        //leftbtn: '#left',      //左按钮
        //rightbtn: '#right',
        focusclass: "curr"//右按钮
        /*createli:'<li></li>',
         bigfocusul:'.square',
         focusclass:'current'*/



    });
    $(".cw-icon").mouseover(function () {
        $("#icon").css("display","block");
    });
    $(".cw-icon").mouseout(function () {
        $("#icon").css("display","none");
    });


    $("#myjd").mouseover(function () {
        $("#myjd1").css("display","block");
        $(this).css("backgroundColor","white");
    });
    $("#myjd").mouseout(function () {
        $("#myjd1").css("display","none");
        $(this).css("backgroundColor","");
    });

    $("#cus").mouseover(function () {
        $("#cus1").css("display","block");
        $(this).css("backgroundColor","white");
    });
    $("#cus").mouseout(function () {
        $("#cus1").css("display","none");
        $(this).css("backgroundColor","");
    });

    $("#navg").mouseover(function () {
        $("#navg0").css("display","block");
        $(this).css("backgroundColor","white");
    });
    $("#navg").mouseout(function () {
        $("#navg0").css("display","none");
        $(this).css("backgroundColor","");
    });
})


var fb1 = document.getElementById("fb1");
var fb2 = document.getElementById("fb2");
var fb3 = document.getElementById("fb3");
var fb4 = document.getElementById("fb4");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
fb1.onmouseover = function () {
    box1.style.display = "block";
    box1.style.zIndex = 1;
}
fb1.onmouseout = function () {
    box1.style.display = "none";
    box1.style.zIndex = 0;
}

fb2.onmouseover = function () {
    box2.style.display = "block";
    box2.style.zIndex = 1;
}
fb2.onmouseout = function () {
    box2.style.display = "none";
    box2.style.zIndex = 0;
}

fb3.onmouseover = function () {
    box3.style.display = "block";
    box3.style.zIndex = 1;
}
fb3.onmouseout = function () {
    box3.style.display = "none";
    box3.style.zIndex = 0;
}

fb4.onmouseover = function () {
    box4.style.display = "block";
    box4.style.zIndex = 1;
}
fb4.onmouseout = function () {
    box4.style.display = "none";
    box4.style.zIndex = 0;
}

var dli = document.getElementById("dli");
var where = document.getElementById("where");
dli.onmouseover = function () {
    this.style.backgroundColor = "white";
    where.style.display = "block";
    where.style.zIndex = 1;
}
dli.onmouseout = function () {
    this.style.backgroundColor = "#e3e4e5";

    where.style.display = "none";
    where.style.zIndex = 0;
}

/*

 $(function () {
 $(".cw-icon").mouseover(function () {
 $("#icon").show();
 console.log(111);
 });
 $(".cw-icon").mouseout(function () {
 $("#icon").hide();
 });
 });*/
