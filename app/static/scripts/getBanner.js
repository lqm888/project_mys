import {mySwiper} from '/static/scripts/initSwiper.js';
export function getBanner(){
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
};
