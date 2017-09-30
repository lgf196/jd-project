'use strict';
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
function piblic(ele,bele,eletext){
    $(ele).show().addClass('on').text(eletext);
    $(bele).addClass('css');
}
function sameremove(ele,bele){
    $(ele).hide();
    $(bele).removeClass('css');
}
function username(){
    var showuser=$('.showuser');
    var inputuser=$(".inputuser");
     var re=/[^\w\u4e00-\u9fa5]/g;
        if(re.test(inputuser[0].value)){
          piblic('.showuser','.border1',"含有非法字符,请规范输入");
          return false;
        }
        else if(inputuser[0].value==""||inputuser[0].value==null){
            piblic('.showuser','.border1',"用户名不能为空");
            return false;
        }
        else{
            $.ajax({
                type: 'POST',
                  url: 'data/signin_user_blur.php',
                data:{uname:inputuser[0].value},
                success:function(responsetext,statustext,xhr){
                       if(responsetext==="该用户名已被注册过,请跟换"){
                         piblic('.showuser','.border1',responsetext);
                       }
                       else{
                             sameremove('.showuser','.border1');
                       }
                }
            });
            return true;
        }
}
function blurpassword(){
        var res=/[^\d]/g; //不能全是数字
        var ress=/[^a-zA-Z]/g;//不能全是字母
        var inputpassword=$(".inputpassword");
        var sam=same(inputpassword[0].value,inputpassword[0].value[0]);
        if(inputpassword[0].value==""||inputpassword[0].value==null){
                 piblic('.showpassword','.border2',"密码不能为空");
                return false;
        }
        else if(sam==inputpassword[0].value.length){
             piblic('.showpassword','.border2',"密码不能为相同字符");
             return false;
        }
        else if(inputpassword[0].value.length>20||inputpassword[0].value.length<6){
                 piblic('.showpassword','.border2',"密码长度最大为20，最小不能低于6");
                 return false;
        }
        else if(!res.test(inputpassword[0].value)){
                 piblic('.showpassword','.border2',"不能为纯数字");
                 return false;
        }
        else if(!ress.test(inputpassword[0].value)){
                 piblic('.showpassword','.border2',"不能为纯字母");
                 return false;
        }
        else{
            sameremove('.showpassword','.border2');
             return true;
        }
}
function blurage(){
        var val=$('.agree').val();
            var oldval=$('.inputpassword').val();
           if (val!=oldval) {
                piblic('.showagree','.border3',"密码不一致，请重新输入");
                  return false;
           }
           else{
                 sameremove('.showagree','.border3');
                return true;
           }
}
function blurphone(){
    var phone=/^1\d{10}$/;
    var inputmobblie=$('.inputmobblie');
        if(inputmobblie[0].value==""||inputmobblie[0].value==null){
             piblic('.showmobblie','.border4',"号码不能为空，请输入");
                return false;
        }
       else if(!phone.test(inputmobblie[0].value)){
              piblic('.showmobblie','.border4',"号码不能超过11位数字，且必须为纯数字,开头为1，请输入");
             return false;
       }
       else{
            sameremove('.showmobblie','.border4');
            return true;
       }
}
 function bluremail(){
    var inputemail=$('.inputemail');
        var email=/^\w+@\w+(\.[a-zA-Z]{2,3})(.[a-zA-Z]{2,3})?$/;
            if(inputemail[0].value==""||inputemail[0].value==null){
                 piblic('.showemail','.border5',"Email不能为空，请输入");
                    return false;
            }
            else if(!email.test(inputemail[0].value)){
                piblic('.showemail','.border5',"Email格式不对,应为xxxxx@ww.(xxx)||xxx.xxx格式，请输入");
                   return false;
            }
            else{
                sameremove('.showemail','.border5');
                return true;
            }
}
function blursigin(){
    var pass=$('.pass');
    if(pass[0].value!=$(".siginfour").text()){
         piblic('.showpass','.border6',"验证码错误请点击重新获取输入");
        return false;
     }
     else{
         sameremove('.showpass','.border6');
        return true;
     }
}
$(".siginfour").click(function(){
       var au=auto();
     $(this).text(au);
});
function check(){
    if(username()&&blurpassword()&&blurage()&&blurphone()&&bluremail()&&blursigin()){
        return true;
    }
    else{
        return false;
    }
}

