/*
auther:LGF;
date:2017-3;
blog:lgf196.top;
plug-in:slidebanner;
direction:只需引用到项目中即可,用法:$('xxx').banner({属性：值});
attention：liimgeles,bigul,focuseles,outerdiv,leftbtn,rightbtn这几个属性不需要写不能省略
 */
if(window.jQuery===undefined){
    throw new Error("此插件依赖于jQuery,请引入jQuery库");
}
;(function($){
   $.fn.slidebanner=function(opt){
	   	 var defaults={
	        animatetime:400,  //表示动画每秒运行位移时间
            playtime:4000,     //表示自动播放动画的时间间隔	      
	        liimgeles:'',      //全部img的li
	       	bigul:'',         //包含img的父盒子
            focuseles:'',      //全部的小焦点
            createli:'',      //创建小焦点的标签
            bigfocusul:'',    //包含所有小焦点的父盒子
            focusclass:'',     //小焦点的class
	        outerdiv:'',      //包含整个banner区的大盒子
	        bind:'click',     //事件类型
            leftbtn:'',      //左按钮
            rightbtn:''      //右按钮
	   	 };
          
         var option,screenwidth,index,moveindex,timer=null,clonefirstimg,on=true; //集体定义变量     
         option=$.extend(defaults,opt); //实现复制的转换
         this.each(function(){
		         	 screenwidth=$(option.outerdiv).width(); //获取的宽

		         if($(option.bigfocusul).children().length===0){ //如果有小焦点我就不创建
		            for (var i = 0; i <$(option.liimgeles).children().length; i++) { //创建小焦点
		                var li = $(option.createli);
		                $(option.bigfocusul).append(li);
		            }
		             $(option.bigfocusul).children().first().addClass(option.focusclass);
		         }

		         clonefirstimg=$(option.bigul).children().first().clone(true);//克隆第一个图片实现无缝轮播
		         $(option.bigul).append(clonefirstimg); //将克隆的图片添加到末尾
		         index=0;
		         moveindex=0;
		        
		         //小焦点移动
		       $(option.focuseles).bind(option.bind,function(){
		            index=$(this).index();
		            moveindex=index;
		            move(index,moveindex);
		       })
		         
		    
		     //右箭头
		     $(option.rightbtn).click(function(){
		     	if(on){ //用于防止动画平凡被点击而造成的效率问题
		     		on=false;
		     		if(moveindex===$(option.liimgeles).length-1){
			           $(option.bigul).css('left', '0px');
			            moveindex=0;
		        	}
		            moveindex++;
		         	index<$(option.focuseles).length-1?index++:index=0;//用于控制小按钮的索引      
		         	move(index,moveindex);
		     	}
		        
		     }); 


		     //左箭头
		     $(option.leftbtn).click(function(){
		     	if(on){
		     		on=false;
		     		if(moveindex===0){
			            $(option.bigul).css('left',-($(option.liimgeles).length-1)*screenwidth);
			            moveindex=$(option.liimgeles).length-1;
		        	}
		         	moveindex--;
		         	index>0?index--:index=$(option.focuseles).length-1;
		          	move(index,moveindex);
		      }		        
		     });


		     //自动播放函数
		     //timer=setInterval(function(){$(option.rightbtn).click()},option.playtime);

		    //鼠标移上banner区时停止动画，离开时接着动画
		   /* $(option.outerdiv).hover(function() {
		        clearInterval(timer);
		    }, function() {
		        timer=setInterval(function(){$(option.rightbtn).click()},option.playtime);
		    });*/

		     //公共函数部分
		     function move(focusindex,moveindex){
		         $(option.focuseles).eq(focusindex).addClass('current').siblings().removeClass('current');
		        $(option.bigul).stop(true).animate({"left":-moveindex*screenwidth},option.animatetime,function(){on=true;});
		     }

         });
        
     return this;            
   };
})(jQuery);