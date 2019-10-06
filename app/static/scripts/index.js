import {headerRun} from '/static/scripts/header.js';
import {footerRun} from '/static/scripts/footer.js';
import {getBanner} from '/static/scripts/getBanner.js';

//获取头部
$("#header").load("/views/head.html",function(){
    headerRun();
    $('.h-nav .nav-item').removeClass('.active');
})
//获取底部
$("#footer").load("/views/footer.html",function(){
    footerRun();
})

// 获取banner方法 并执行
getBanner();


