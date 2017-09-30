/*
auther:LGF;
date:2017-3;
blog:lgf196.top;
plug-in:fadebanner;
direction:只需引用到项目中即可,用法:$('xxx').banner({属性：值});
attention：liimgeles,bigul,focuseles,outerdiv,leftbtn,rightbtn这几个属性不需要写不能省略
 */
if(window.jQuery===undefined){
    throw new Error("此插件依赖于jQuery,请引入jQuery库");
}
;(function($){
   $.fn.fadebanner=function(opt){
	   	 var defaults={
	   	 	animatetime:400,
            playtime:4000,     //表示自动播放动画的时间间隔	      
	        liimgeles:'',      //全部img的li	
            focuseles:'',      //全部的小焦点
            createli:'',      //创建小焦点的标签
            bigfocusul:'',    //包含所有小焦点的父盒子
            focusclass:'',     //小焦点的class
	        outerdiv:'',      //包含整个banner区的大盒子
	        bind:'click',     //事件类型
            leftbtn:'',      //左按钮
            rightbtn:''      //右按钮
	   	 };
          
         var option,index,moveindex,timer=null;      
         option=$.extend(defaults,opt); 
         this.each(function(){	      
		         if($(option.bigfocusul).children().length===0){ 
		            for (var i = 0; i <$(option.liimgeles).children().length; i++) { 
		                var li = $(option.createli);
		                $(option.bigfocusul).append(li);
		            }
		             $(option.bigfocusul).children().first().addClass(option.focusclass);
		         }	        
		         index=0;
		         moveindex=0;
		        
		        
		       $(option.focuseles).bind(option.bind,function(){
		            index=$(this).index();
		           
		            moveindex=index;
		            move();
		       })
		         
		    
		    
		     $(option.rightbtn).click(function(){
		     	if(moveindex===$(option.liimgeles).length-1){
		
			            moveindex=0;
		        }
		         else{
		         	 moveindex++;
		         }  		         	    
		         	move();
		     	
		        
		     }); 


		     //左箭头
		     $(option.leftbtn).click(function(){
		     	if(moveindex===0){
			         moveindex=$(option.liimgeles).length-1;
		        }
		         else{
		         	moveindex--;
		         }	
		         
		          	move();
		            
		     });


		    
		     timer=setInterval(function(){$(option.rightbtn).click()},option.playtime);

		   
		    $(option.outerdiv).hover(function() {
		        clearInterval(timer);
		    }, function() {
		        timer=setInterval(function(){$(option.rightbtn).click()},option.playtime);
		    });

		  
		     function move(){
		         $(option.focuseles).eq(moveindex).addClass(option.focusclass).siblings().removeClass(option.focusclass);
		        $(option.liimgeles).eq(moveindex).stop(true,true).fadeIn(option.animatetime).siblings().stop(true,true).fadeOut(option.animatetime);
		     }

         });
        
     return this;            
   };
})(jQuery);