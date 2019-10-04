$('.search').on("click",".search-btn",function(){
    $(".mask").show();
})
$('.mask').on("click",function(e){
    var ev = e || window.event;
    var target = ev.target || ev.srcElement;
    var flag = false;
    var ta = target;
    while(ta){
        if(ta.className.search(/\binputWrap\b/) != -1){
            flag = true;
            break;
        }
        if(ta.className.search(/\bmask\b/) != -1){
            break;
        }
        ta = ta.parentNode;
    }
    var tag = (target.nodeName == "DIV" && target.className.search(/\binputWrap\b/) != -1) || flag;
    if(tag){
        console.log(1);
    }else{
        $(".mask").hide()
    }
})
window.addEventListener("scroll",function(){
    var scrollTop = document.documentElement ? document.documentElement.scrollTop : document.body.scrollTop;
    if(scrollTop >= 100){
        $("#header .h-top").slideUp(300);
    }else{
        $("#header .h-top").slideDown(300);
    }
})
