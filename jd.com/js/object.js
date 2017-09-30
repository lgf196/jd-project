//对象开发插件，用的是最多的，一定要会
//对象开发插件的模板：
/*;(function($){
    $.fn.xxxx=function(opt){  //opt可以接受对象，函数，字符串等参数，用于更新下面的opt属性值和参数值
    	var default={
    		//里面是各类参数，和属性值
    	}
    	var option=$.extend(default,opt); //表示将default里面的所以属性，和参数值给了opt,此时opt
    	                                  //和default里面的值相等
    	this.each(function(){   //这句话也可以不用写，看个人情况
    		//用于写功能的代码
    	});
    }
})(jQuery);*/
if(window.jQuery===undefined){
    throw new Error("此插件依赖于jQuery,请引入jQuery库");
}
;(function($){
   $.fn.blacktop=function(opt){   //返回顶部插件开始
	   	 var defaults={
	        spend:600,
	        position:'true',
	        right:30,
	       	bottom:30,
	        autohide:'true',
	        offset:$(window).height()
	   	 };
	   	 var option=$.extend(defaults,opt);
        //this.each(function(){
                 //var  _this=$(this);  //如果用this.each（)的话此时this要写成$(this)
            var  _this=this;
             var win = $(window);
             if(option.autohide){
                  _this.css({
                    'display':'none',
                    'cursor':'pointer'
                });
             }
            if(option.position){
                 _this.css({
                    'position': 'fixed',
                    'right': option.right+'px',
                    'bottom': option.bottom+'px',
                });
            }
             _this.click(function(){
                $('html, body').animate({scrollTop: 0}, option.spend);
            }); 
            win.scroll(function(){
                var scrolling = win.scrollTop();
                if(option.autohide){
                    if(scrolling > option.offset){
                        _this.fadeIn(option.spend);
                    }
                    else _this.fadeOut(option.spend);
                }   
            }); 
         //});
        
         return this;
   }; //返回顶部插件结束
   $.fn.tab=function(opt){   //选项卡插件
        var defaults={
            tabname:"",
            tabdiv:"",
            addclass:"",
            bind:"click",
            animatetime:10
        };
        var option=$.extend(defaults,opt);
        var tabname= $(option.tabname);
           tabname.eq(0).addClass(option.addclass);
           tabname.bind(option.bind,function(){
                var index=$(this).index();
                $(this).addClass(option.addclass).siblings().removeClass(option.addclass);
                $(option.tabdiv).eq(index).show(option.animatetime).siblings().hide(option.animatetime);
            });
           return this;
   }; //选项卡插件结束
})(jQuery);


