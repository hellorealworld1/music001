<template>
    <div id="swipercom">
        <div class="swiper-container" id="swiperIndex">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in swlist" :key="index"><img :src="item.pic" :alt="item.title"></div>
            </div>
            <div class="swiper-pagination">

            </div>
        </div>
    </div>
</template>


<script>
//导入js
import Swiper from 'swiper'
//引入css
import "swiper/css/swiper.min.css"

import {getBanner} from '@/api/index'

export default{
    name:'swiper',
    data() {
        return {
            swlist:[
                {pic:require("../../public/img/swiper1.jpg")},
                {pic:require("../../public/img/swiper1.jpg")},
                {pic:require("../../public/img/swiper1.jpg")},
                {pic:require("../../public/img/swiper1.jpg")},
                {pic:require("../../public/img/swiper1.jpg")},
                {pic:require("../../public/img/swiper1.jpg")},
                {pic:require("../../public/img/swiper1.jpg")},
                {pic:require("../../public/img/swiper1.jpg")},
                {pic:require("../../public/img/swiper1.jpg")}
            ],
        }
    },
    async mounted() {
        var res = await getBanner(1);
        this.swlist=res.data.banners
    },

    

    watch:{
        swlist(){
            var myswiper = new Swiper("#swiperIndex",{
                loop:true,
                pagination:{
                    el:".swiper-pagination",
                    clickable:true
                }
            })
        }
    }

    
}
</script>

<style lang="less">
#swipercom{
        width: 7.5rem;
#swiperIndex.swiper-container{
        width: 7.1rem;
        height: 2.6rem;
        border-radius: 0.1rem;
        
        .swiper-slide img{
            width: 100%;
        }
        .swiper-pagination-bullet-active{
            background-color: orangered;
        }
    
    }
}
</style>