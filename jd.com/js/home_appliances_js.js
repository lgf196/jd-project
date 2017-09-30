/**
 * Created by 为你存在 on 2017/8/2.
 */
window.onload = function () {
    //字幕
    var info_list1 = document.querySelector(".info-list1");
    var list_news1 = document.querySelector(".list-news1");
    var newlis1 = list_news1.children;

    var info_list2 = document.querySelector(".info-list2");
    var list_news2 = document.querySelector(".list-news2");
    var newlis2 = list_news2.children;

    var info_list3 = document.querySelector(".info-list3");
    var list_news3 = document.querySelector(".list-news3");
    var newlis3 = list_news3.children;

    var info_list4 = document.querySelector(".info-list4");
    var list_news4 = document.querySelector(".list-news4");
    var newlis4 = list_news4.children;
    /*var timer = null;
    timer = setInterval(play, 2000);
    var num = 0;
    function play() {
        if (num === newlis.length - 6) {
            list_news.style.top = 0;
            num = 0;
        }
        num++;
        animate(list_news, {"top": -26 * num});
    }
    info_list.onmouseover = function () {
        clearInterval(timer);
    };
    info_list.onmouseout = function () {
        timer = setInterval(play, 2000);
    };*/


    textPlay(info_list1,list_news1,newlis1,2000);
    textPlay(info_list2,list_news2,newlis2,2500);
    textPlay(info_list3,list_news3,newlis3,2500);
    textPlay(info_list4,list_news4,newlis4,2000);

    function textPlay(list,news,newlis,playTime){
        var timer = null;
        timer = setInterval(play, playTime);
        var num = 0;
        function play() {
            if (num === newlis.length - 6) {
                news.style.top = 0;
                num = 0;
            }
            num++;
            animate(news, {"top": -26 * num});
        }
        list.onmouseover = function () {
            clearInterval(timer);
        };
        list.onmouseout = function () {
            timer = setInterval(play, playTime);
        };
    }


    function animate(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                if (k === "opacity") {//特殊处理
                    //var leader = parseInt(getStyle(obj, k)) || 0;
                    var leader = getStyle(obj, k) * 100;//1
                    // 0 || 1 结果是1 那么如果透明度当前的值是0 就会变成1
                    //所以这里不能给默认值 而且也没有必要
                    //透明度没有单位px 所以也不用parseInt 参与运算自动变为数字
                    var target = json[k] * 100;//0.5
                    var step = (target - leader) / 10;//0.5-1=-0.5
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);//-1
                    leader = leader + step;
                    //obj.style[k] = leader + "px";
                    obj.style[k] = leader / 100;//opacity没有单位
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k];//无需渐变 直接设置即可
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader + "px";
                }
                if (leader !== target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {//如果有才调用
                    fn();//动画执行完成后执行
                }
            }
        }, 15);
    }

    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }




};