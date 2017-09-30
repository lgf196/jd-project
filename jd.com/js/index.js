$(function(){
			var index=0,timer;
			var size=$('.listimg ul>li').length;
			$('.jd li').click(function(){ //焦点图下面的小按钮
				 index=$(this).index();
				 ato();
			});
			$('#left').click(function(){  //焦点图左的小按钮
				if(timer){
					clearInterval(timer);
				}
				if(index==size-1){
					index=0;
				}
				else{
					index++;
				}
				ato();
			});
			$('#right').click(function(){  //焦点图右的小按钮
				if(timer){
					clearInterval(timer);
				}
				if(index==0){
					index=size-1;
				}
				else{
					index--;
				}
				ato();
			});
			clearInterval(timer);
			timer=setInterval(auto,4000);  //自动播放函数
			$('.tabimg').hover(function(){  //焦点图移入停止移出播放
				clearInterval(timer);
				$('#right,#left').show();
			},function(){
				timer=setInterval(auto,4000);
				$('#right,#left').hide();
			})
			function auto(){ //自动播放函数
				index++;
					if(index>size-1) index=0;
				ato();
			}
			function ato(){	 //焦点图图片样式切换函数
				$('.jd li').eq(index).addClass('on').siblings().removeClass('on');
				$('.listimg ul li').eq(index).stop(true,true).fadeIn(600).siblings().stop(true,true).fadeOut(600);
			}
			var off=true;
			$(window).scroll(function(){ //鼠标滚动事件
				if(off){
					var clientH=$(window).height();
					var scrolltop=$(window).scrollTop();
					if(scrolltop>=clientH){
						$('.Lleft').fadeIn(1000);	//左边固定导航条显示
						$('#toplog').slideDown();	//顶部固定搜索框显示
					}
					else{
						$('.Lleft').fadeOut(1000);  //左边固定导航条隐藏
						$('#toplog').slideUp();	//顶部固定搜索框隐藏
					}
					$('#main .com').each(function(){ //鼠标滚动时对应相应的位置
						var _height=$(this).offset().top+100;
						var index=$(this).index();
						if(_height>scrolltop){
						$('.Lleft ul li').not(".black").eq(index).addClass('red').siblings('.Lleft ul li').removeClass('red');
							return false;
						}
					})
				}
			});
			$('.Lleft ul li').not(".black").click(function(){ //鼠标单击时显示对应的位置
				off=false;
				$(this).addClass('red').siblings().removeClass('red');
				var index=$(this).index();
				var _height=$('#main .com').eq(index).offset().top-63;
				if(!$('body,html').is(":animated")){
					$('body,html').animate({scrollTop:_height},500,function(){
						off=true;
					})
				}
			});
			gps();
			twolist('.centerLul li','.centerlist');
			uat('#login-main ul>li','on','#login-main div');
			uat('.goodRul li','goodRulli','.goodRdiv .goodRlist');
			moveimg();
			black('.black');
			finshtime();
			twomove('.Rrightbul li','.limove');
			shopcar();
})
		function gps(){ //定位函数
		       $('.GPS-ul li').click(function(){
						$(this).addClass('GPScolor').siblings().removeClass('GPScolor');
						$('.replace').text($(this).text());
				});
		}

		function twolist(user,finduser){ //二级菜单显示函数
			$(user).hover(function(){
						$(this).find(finduser).show();
					},function(){
						$(this).find(finduser).hide();
			});
		}

		function uat(user,classname,useruta){ //选项卡函数
			$(user).mouseover(function(){
				var loginmain=$(this).index();
				$(user).eq(loginmain).addClass(classname).siblings().removeClass(classname);
				$(useruta).eq(loginmain).show(100).siblings(useruta).hide(100);
			});
		}

		function moveimg(){  //鼠标移入图片上时将图片显示出来，并且更谁鼠标一起移动
			var x=30,y=-40;
			$('.JDMSdiv img').mouseover(function(e){
					var _div=$("<div class='moveimg'><img src='"+this.src+"'/></div>");
					$('body').append(_div);
					$('.moveimg').css({
										"top":(e.pageY+y)+"px",
										"left":(e.pageX+x)+"px"
									}).show('fast');
			}).mouseout(function(){
									$('.moveimg').remove();
								}).mousemove(function(e){
														$('.moveimg').css({
														"top":(e.pageY+y)+"px",
														"left":(e.pageX+x)+"px"
																		}).show('fast');

														})
		}

		function black(user){  //顶部返回函数
			$(user).click(function(){
			  $('body,html').animate({scrollTop:"0px"},400);
			})
		}

 		function finshtime(){ //倒计时函数
			var sh,endtime,nowtime,lefttime,h,m,s;
			endtime=new Date("2017/9/26,17:59:20");
			 nowtime=new Date();
			 lefttime=parseInt((endtime.getTime()-nowtime.getTime())/1000); //表示将字符串结果转换为秒，让后用秒计算
	        h=parseInt((lefttime/(60*60))%24);  //计算小时取%是因为是指当天的时间
	       m=parseInt((lefttime/60)%60);    //计算分钟
	       s=parseInt(lefttime%60);         //计算秒
	       h=checktime(h);m=checktime(m);s=checktime(s);
	        $('#a').text(h);
	        $('#b').text(m);
	        $('#c').text(s);
	      if(lefttime<=0){    //如果到了时间就停止
		     	$('#a').text('00');
		        $('#b').text('00');
		        $('#c').text('00');
		      clearInterval(sh);
	      	}
	      else{
	        sh=setTimeout(finshtime,500);
	       	}
		}

		function checktime(i){  //表示当h,m,s为个位时就变成十位
			if(i<10){i="0"+i;} return i;
		}

		 function twomove(user,finduser){ //右侧固定导航部分
			$(user).hover(function(){
						$(this).find(finduser).stop(true,false).animate({right:"30px"},300);
					},function(){
						$(this).find(finduser).stop(true,false).animate({right:"-70px"},300);
			});
		}

		function shopcar(){
				$('.shopcar').click(function(){
					if($('.Rrighta').width()==0){
						$('.Rrighta').animate({width:'270px'},300);
						$('.Rrightbul').animate({right:'270px'},300);
						$('.carhide').css("display","none");
					}
					else{
						$('.Rrighta').animate({width:'0px'},300);
						$('.Rrightbul').animate({right:'0px'},300);
						$('.carhide').css({"display":"block","right":"-70px"})
					}
				});

		}

