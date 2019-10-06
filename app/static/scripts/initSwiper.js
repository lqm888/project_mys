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
});
export {mySwiper};