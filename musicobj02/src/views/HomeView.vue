<template>
  <div class="home">
    <top-nav></top-nav>
    <swiper-com></swiper-com>
    <icon-list></icon-list>
    <music-list></music-list>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import topNav   from '@/components/TopNav.vue'
import swiperCom  from '@/components/SwiperCom.vue'
import musicList from '@/components/MusicList.vue'
import iconList from '@/components/IconList.vue'

export default {
  name: 'HomeView',
  components: {
    topNav,
    swiperCom,
    musicList,
    iconList
  }
}
</script>

<style>

</style>

