/**
 * Created by Administrator on 2017/8/3 0003.
 */
$(function(){
    $("#list>li").mouseover(function() {
        $(this).css("backgroundColor","black");
        $(this).siblings("li").css("backgroundColor","");
        var index = $(this).index();
        $(".best-lb>ul:eq(" + index + ")").siblings("ul").hide();
        $(".best-lb>ul:eq(" + index + ")").show();
    });

});
