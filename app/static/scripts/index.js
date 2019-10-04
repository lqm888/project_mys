$("#header").load("./head.html",function(){
    $.getScript("../static/scripts/header.js")
})


var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: 5000,
    initialSlide:0,
    
    // 分页器
    pagination: '.swiper-pagination',
    paginationClickable :true,
    
    // 前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // 初始化时执行
    onInit: function(swiper){
        $(".swiper-pagination span").eq(swiper.realIndex).addClass("active").siblings().removeClass("active");
    },

    // 生成分页器的时候执行
    onPaginationRendered:function(swiper, paginationContainer){
        $(".swiper-pagination span").eq(swiper.realIndex).addClass("active").siblings().removeClass("active");
    },

    // slide变化的时候执行
    onSlideChangeStart : function(swiper){
        // swiper.realIndex.classList.add("active");
        $(".swiper-pagination span").eq(swiper.realIndex).addClass("active").siblings().removeClass("active");
    },
    
})


$.ajax({
    url:"/static/data/bannerSrc.json",
    type:"get",
    data:"banner=1",
    dataType:"json",
    cache:false,
    success:function(json){
        for(var i=0; i<json.length; i++){
            var newItem = document.createElement("div");
            newItem.className = "swiper-slide";
            if(json[i].type == "img"){
                newItem.innerHTML = '<img src="'+json[i].src+'">'
            }
            else if(json[i].type == "video"){
                newItem.innerHTML = '<video src="'+ json[i].src +'" loop preload autoplay muted>'
            }
            $(".swiper-wrapper").append(newItem);
        };
        mySwiper.update();
        mySwiper.reLoop();
        mySwiper.slideTo(1, 1, false);
    },
    error:function(){
        alert('请求失败');
    }
})
