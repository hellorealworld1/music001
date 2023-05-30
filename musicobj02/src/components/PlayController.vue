<template>
    <div class="playController">
        <div class="left">
            <img @click="xs" :src="playlist[playCurrentIndex].al.picUrl" alt="">
            <div class="content">
                <div>
                    <div class="title">{{ playlist[playCurrentIndex].name }}</div>
                    <div class="tips">横滑切换上下首</div>
                </div>
            </div>
        </div>
        <div class="right">
            <svg v-show="bf" class="icon" aria-hidden="true" @click="playmusic">
                    <use xlink:href="#icon-bofang1"></use>
            </svg>
            <svg v-show="!bf" class="icon" aria-hidden="true" @click="playmusic">
                    <use xlink:href="#icon-iconstop"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-liebiao1"></use>
            </svg>
        </div>
        <!-- 如何获取播放歌曲的mp3地址 https://music.163.com/song/media/outer/url?id=33894312.mp3 -->
        <!-- 不设置controls -->
        <!-- <audio src="https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3"></audio> -->
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"></audio>
        <playmusic v-show="show" :bf="bf" :show="show" :playmusics="playmusics" :plydetial="playlist[playCurrentIndex]"  @back="show=!show"></playmusic>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import playmusic from './PlayMusic.vue';
export default{
    name:"playcontroller",
    data() {
        return {
            bf:true,
            show:false
        }
    },
    components:{
        playmusic
    },
    computed:{
        ...mapState(['playlist','playCurrentIndex'])
    },
    methods:{
        playmusics(){
            if (this.$refs.audio.paused) {
                this.$refs.audio.play();
                this.bf=false
            }else{
                this.$refs.audio.pause();
                this.bf=true
            }
        },
        xs(){
            this.show=!this.show
        }
    }
}
</script>

<style lang="less">
        .playController {
            background: #fff;
            width: 7.5rem;
            height: 1.2rem;
            position: fixed;
            left: 0;
            bottom: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid #ccc;
        
            .left {
                display: flex;
                padding: 0 0.2rem;
        
                img {
                    width: 0.8rem;
                    height: 0.8rem;
                    border-radius: 0.4rem;
                }
        
                .content {
                    padding: 0 0.2rem;
        
                    .tips {
                        font-size: 0.2rem;
                        color: #999;
                    }
                }
            }
        
            .right {
                .icon {
                    width: 0.4rem;
                    height: 0.4rem;
                    margin: 0 0.2rem;
                }
            }
        }
</style>
