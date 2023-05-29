<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div>
    <router-view/>
    <playcontroller></playcontroller>
  </div>
  
</template>


<script>
import playcontroller from '@/components/PlayController.vue'

export default{
  components:{
    playcontroller
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: '微软雅黑';
}
.icon{
  width: 0.30rem;
  height: 0.3rem;
}
a{
  color: #333;
  text-decoration: none;
}

</style>
