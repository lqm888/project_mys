export function headerRun(){
    // var scrollTop = document.documentElement ? document.documentElement.scrollTop : document.body.scrollTop;
    // if(scrollTop >= 100){
    //     $("#header .h-top").hide(300);
    // }else{
    //     $("#header .h-top").show(300);
    // };
    $('.search').on("click",".search-btn",function(){
        $(".mask").show();
    });
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
    });

    // window.addEventListener("scroll",function(){
    //     scrollTop = document.documentElement ? document.documentElement.scrollTop : document.body.scrollTop;
    //     if(scrollTop >= 100){
    //         $("#header .h-top").slideUp(300);
    //     }else{
    //         $("#header .h-top").slideDown(300);
    //     }
    // });

    var str = navigator.userAgent.toLowerCase(); //获取用户浏览器识别码，并转成小写
    //判断浏览器
    var flag = 0;
    if(str.indexOf('firefox') != -1){
        document.addEventListener("DOMMouseScroll",function(e){ //火狐
            if (e.detail < 0) {// 前推 放大
                flag = 1;
            } else {// 后拉  缩小
                flag = -1;
            }
            scrollMove(flag);
        },false)
    }else{
        document.onmousewheel = function(e){    //谷歌，IE
            var ev = e || window.event;
            if (e.wheelDelta > 0) {// 前推 放大
                flag = 1;
            }else{// 后拉  缩小
                flag = -1;
            }
            scrollMove(flag);
        }
    }

    function scrollMove(flag){
        if(flag < 0){
            $("#header .h-top").slideUp(300);
        }else{
            $("#header .h-top").slideDown(300);
        }
    }
};