$(document).ready(function(){
	var inputuser=$('.inputuser');
	var inputpassword=$('.inputpassword');
	var agree=$('.agree');
	var inputmobblie=$('.inputmobblie');
	var inputemail=$('.inputemail');
	var siginfour=$('.siginfour');
	var pass=$('.pass');
	var au;
	function auto(){
    	var str="";
    	for(var i=0;i<6;i++){
    		str=str+parseInt(Math.random()*10).toString();
    	}
    	return str;
    }
	function same(price,firstprice){  //用来匹配相同的值
		var tem=0;
		for(var i=0,len=price.length;i<len;i++){
			if(price.charAt(i)==firstprice){
				tem++;
			}
		}
		return tem;
	}
	function bluruser(){
	 	var re=/[^\w\u4e00-\u9fa5]/g;
				if(re.test(this.value)){
					$('.border1').addClass('css');
					$('.showuser').show().addClass('on').text("含有非法字符,请规范输入");
					return false;
				}
				else if(this.value==""||this.value==null){
					$('.showuser').show().addClass('on').text("用户名不能为空");
					$('.border1').addClass('css');
					return false;
				}
				else if(this.value.length>20||this.value.length<4){
					$('.showuser').show().addClass('on').text("用户名长度最大为20，最小不能低于3");
					$('.border1').addClass('css');
					return false;
				}
				else{
					$('.border1').removeClass('css');
					$('.showuser').hide();
					return true;
				}
	}
	function blurpassword(){
		var res=/[^\d]/g; //不能全是数字
		var ress=/[^a-zA-Z]/g;//不能全是字母
		var sam=same(this.value,this.value[0]);
		if(this.value==""||this.value==null){
				$('.showpassword').show().addClass('on').text("密码不能为空");
				$('.border2').addClass('css');
		}
		else if(sam==this.value.length){
			$('.showpassword').show().addClass('on').text("密码不能为相同字符");
			$('.border2').addClass('css');
		}
		else if(this.value.length>20||this.value.length<6){
				$('.showpassword').show().addClass('on').text("密码长度最大为20，最小不能低于6");
				$('.border2').addClass('css');
		}
		else if(!res.test(this.value)){
				$('.showpassword').show().addClass('on').text("不能为纯数字");
				$('.border2').addClass('css');
		}
		else if(!ress.test(this.value)){
				$('.showpassword').show().addClass('on').text("不能为纯字母");
				$('.border2').addClass('css');
		}
		else{
			$('.border2').removeClass('css');
			$('.showpassword').hide();
		}
	}
	function blurage(){
		var val=$('.agree').val();
	    	var oldval=$('.inputpassword').val();
	       if (val!=oldval) {
		          $('.showagree').show().addClass('on').text("密码不一致，请重新输入");
			      $('.border3').addClass('css');
	       }
	       else{
	       	    $('.border3').removeClass('css');
				$('.showagree').hide();
	       }
	}
	function blurphone(){
		var phone=/^1\d{10}$/;
	     	if(this.value==""||this.value==null){
					$('.showmobblie').show().addClass('on').text("号码不能为空，请输入");
					$('.border4').addClass('css');
			}
           else if(!phone.test(this.value)){
               	$('.showmobblie').show().addClass('on').text("号码不能超过11位数字，且必须为纯数字,开头为1，请输入");
				$('.border4').addClass('css');
           }
           else{
           	    $('.border4').removeClass('css');
				$('.showmobblie').hide();
           }
	}
	function bluremail(){
		var email=/^\w+@\w+(\.[a-zA-Z]{2,3})(.[a-zA-Z]{2,3})?$/;
	    	if(this.value==""||this.value==null){
					$('.showemail').show().addClass('on').text("Email不能为空，请输入");
					$('.border5').addClass('css');
			}
			else if(!email.test(this.value)){
                  $('.showemail').show().addClass('on').text("Email格式不对,应为xxxxx@ww.(xxx)||xxx.xxx格式，请输入");
				  $('.border5').addClass('css');
			}
			else{
				$('.border5').removeClass('css');
				$('.showemail').hide();
			}
	}
	function blursigin(){
		if(this.value!=au){
   	     	$('.showpass').show().addClass('on').text("验证码错误请点击重新获取输入");
			$('.border6').addClass('css');
   	     }
   	     else{
   	     	$('.border6').removeClass('css');
			$('.showpass').hide();
   	     }
	}
	 inputuser.bind({
	 	      "focus":function(){
	 	      	  $('.showuser').removeClass('on');
				  $('.showuser').show().text("支持中文,字母,数字的组合,4-20个字符");
	 	      },
	 	      "keyup":function(){
			 	     $('.showuser').removeClass('on');
					var max=20,val;
					var spend=max-parseInt(inputuser.val().length);
					$('.showuser').show().text("还可以输入 "+spend+"个字符");
					if(parseInt(inputuser.val().length)==0){
						$('.showuser').hide();
					}
					if(spend<=0){
						$('.showuser').show().text("亲最大长度为20哟");
						val=inputuser.val().substring(0,20);
						inputuser.val(val);
					}
	 	      },
	 	      "blur":bluruser
	 });
	inputpassword.bind({
		"focus":function(){
			  	$('.showpassword').removeClass('on');
				$('.showpassword').show().text("建议使用字母、数字和符号两种及以上的组合，6-20个字符");
		 },
		"keyup":function(){
			  	$('.showpassword').removeClass('on');
				var max=20,val;
				var spend=max-parseInt(inputpassword.val().length);
					$('.showpassword').show().text("还可以输入 "+spend+"个字符");
				if(parseInt(inputpassword.val().length)==0){
					$('.showpassword').hide();
				}
				if(spend<=0){
					$('.showpassword').show().text("亲最大长度为20哟");
					val=inputpassword.val().substring(0,20);
					inputpassword.val(val);
				}
		},
		"blur":blurpassword
	});
	agree.bind("blur",blurage);
	inputmobblie.bind({
		"focus":function(){
			 $('.showmobblie').removeClass('on');
		 	$('.showmobblie').show().text("完成验证后，你可以用手机该手机登录和找回密码");
		},
		"keyup":function(){
			 $('.showmobblie').removeClass('on');
			var max=11,val;
			var spend=max-parseInt(inputmobblie.val().length);
				$('.showmobblie').show().text("还可以输入 "+spend+"个字符");
			if(parseInt(inputmobblie.val().length)==0){
				$('.showmobblie').hide();
			}
			if(spend<=0){
				$('.showmobblie').show().text("亲最大长度为11哟");
				val=inputmobblie.val().substring(0,11);
				inputmobblie.val(val);
			}
		},
		"blur":blurphone
	});
	inputemail.bind({
		"focus":function(){
			$('.showemail').removeClass('on');
			$('.showemail').show().text("填写邮箱可以保证你的密码更加安全");
		},
		"keyup":function(){
			$('.showemail').removeClass('on');
			var max=20,val;
			var spend=max-parseInt(inputemail.val().length);
				$('.showemail').show().text("还可以输入 "+spend+"个字符");
			if(parseInt(inputemail.val().length)==0){
				$('.showemail').hide();
			}
			if(spend<=0){
				$('.showemail').show().text("亲最大长度为20哟");
				val=inputemail.val().substring(0,20);
				inputemail.val(val);
			}
		},
		"blur":bluremail
	});
	pass.bind({
		"focus":function(){
			$('.showpass').removeClass('on');
			$('.showpass').show().text("填写验证码，保证账户安全");
		},
		"keyup":blursigin

	});
   siginfour.click(function(){
   	   au=auto();
   	 $(this).text(au);
   });
 /* $('#signinsubmit').click(function(){
	var a=$('#signinform input:not(#signinsubmit)').eq(0).val();
	var b=$('#signinform input:not(#signinsubmit)').eq(1).val();
	var c=$('#signinform input:not(#signinsubmit)').eq(2).val();
	var d=$('#signinform input:not(#signinsubmit)').eq(3).val();
	var e=$('#signinform input:not(#signinsubmit)').eq(4).val();
	var f=$('#signinform input:not(#signinsubmit)').eq(5).val();
		if(a==""){
			bluruser();
		}
		else if(b==""){
			$('.showpassword').show().addClass('on').text("密码不能为空");
			$('.border2').addClass('css');
		}
		else if(c==""){
			blurage();
		}
		else if(d==""){
			blurphone();
		}
		else if(e==""){
			bluremail();
		}
		else if(f==""){
			blursigin();
		}
		else{
			$('#signinform').submit();
		}
  });*/
 });

