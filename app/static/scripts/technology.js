import {headerRun} from '/static/scripts/header.js';
import {footerRun} from '/static/scripts/footer.js';

//获取头部
$("#header").load("/views/head.html",function(){
    headerRun();
    $('.h-nav .technology').addClass("active");
})
//获取底部
$("#footer").load("/views/footer.html",function(){
    footerRun();
})

var titleEN = $(".main .titleWrap .title-EN").text();
$(".main .titleWrap .title-EN").text(titleEN.toUpperCase()).show();