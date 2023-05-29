<template>
    <div class="musicList">
       <div class="musicList-top">
        <div class="title">发现好歌单</div>
        <div class="more">
            查看更多
        </div> 
       </div>
       <div class="mlist">
            <div class="swiper-container" id="musicIndex">
                <div class="swiper-wrapper">
                        <router-link :to="{path:'/listview',query:{id:item.id}}" class="swiper-slide" v-for="item in musisc">
                            <img :src="item.picUrl" alt="" srcset="">
                                <div class="name">{{ item.name }}</div>
                                    <div class="count">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-fanjutuijian"></use>
                                    </svg>
                                <span>{{ changeValue(item.playCount)  }}</span>
                                </div>
                        </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//导入js
import Swiper from 'swiper'
//引入css
import "swiper/css/swiper.min.css"
import {getgd} from '@/api/index'
import { onMounted,onUpdated , toRefs , reactive } from 'vue';
export default{
    name:'musiclist',
    setup(){
        const musicls = reactive({
            musisc:[
                {pic:require("../assets/logo.png")},
                {pic:require("../assets/logo.png")},
                {pic:require("../assets/logo.png")},
                {pic:require("../assets/logo.png")},
                {pic:require("../assets/logo.png")},
                {pic:require("../assets/logo.png")},
                {pic:require("../assets/logo.png")},
                {pic:require("../assets/logo.png")},
                {pic:require("../assets/logo.png")}
            ]
        })


        function changeValue(num){
            var res=0;
            if(num>=100000000){
                res=num/100000000
                res=res.toFixed(2)+"亿"
            }else if(num>=10000){
                res=num/10000
                res=res.toFixed(2)+"万"
            }else{
                res=num;
            }
            return res;
        }


        onMounted(async()=>{
            var res = await getgd(9)
            musicls.musisc=res.data.result
            // console.log(musicls.musisc)
        })
        onUpdated(()=>{
            var myswiper = new Swiper("#musicIndex",{
                loop:true,
                slidesPerView:"3",//设置slider容器能够同时显示的slides数量(carousel模式)。
                spaceBetween:10,//在slide之间设置距离（单位px）。
            })
        })

        

        return{...toRefs(musicls),changeValue}
    }
    
}
</script>

<style lang="less" scoped>
.musicList{
    width: 7.5rem;
    padding: 0 0.4rem;
    .musicList-top{
        display: flex;
        justify-content: space-between;
        height: 1rem;
        align-items: center;
        .title{
            font-size: 0.4rem;
            font-weight: 900;
        }
        .more{
            border: 1px solid #ccc;
            border-radius: 0.2rem;
            font-size: 0.24rem;
            height: 0.5rem;
            width: 1.2rem;
            text-align: center;
            line-height: 0.5rem;
        }
    }
    .mlist{
        .swiper-container{
            width: 100%;
            height: 3rem;
            .swiper-slide{
                
                display: flex;
                flex-direction: column;
                position: relative;
                img{
                    width:100%;
                    height: auto;
                    border-radius: 0.1rem;
                }
                .name{
                    height: 0.6rem;
                    width: 100%;
                    font-size: 0.24rem;
                    line-height: 0.4rem;
                }
                .count{
                    position:absolute;
                    right: 0.1rem;
                    top: 0.1rem;
                    font-size: 0.24rem;
                    color: #ccc;
                    display: flex;
                    align-items: center;
                    .icon{
                         fill: #ccc;
                    }
                }
            }
        }
        
    }
}
</style>