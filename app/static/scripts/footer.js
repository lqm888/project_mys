$("#footer .fm-top .item").on('mouseover',function(){
    $(this).find(".btn").addClass("active");
    $(this).find(".code").show();
})
$("#footer .fm-top .item").on('mouseout',function(){
    $(this).find(".btn").removeClass("active");
    $(this).find(".code").hide();
})

$("#footer .fm-bottom .iconLinkWrap").on('mouseover',".iconfont",function(){
    console.log($(this));
    $(this).addClass("active");
    $(this).find(".codeWrap").show();
})
$("#footer .fm-bottom .iconLinkWrap").on('mouseout',".iconfont",function(){
    $(this).removeClass("active");
    $(this).find(".codeWrap").hide();
})