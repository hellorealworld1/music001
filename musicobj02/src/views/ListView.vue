<template>
    <div class="listView">
        <listview-top :music="musicobj.playlist"></listview-top>
        <playlist :music="musicobj.playlist"></playlist>
    </div>
</template>
<script>
import { useRoute  } from 'vue-router';
import { onMounted , reactive} from 'vue';
import { getgdxq } from '@/api/index'
import listviewTop from '@/components/listViewTop.vue'
import playlist from '@/components/playlist.vue'
import store from '@/store/index';
export default{
    name:"listview",
    setup() {
        const musicobj = reactive({
            list:[],
            playlist:{
                creator:{ },//歌单详情
                tracks:[ ]//歌曲列表
            }
        })
        var route = useRoute()
        var id = ''
        onMounted(()=>{
            id = route.query.id
            // console.log(id)
        })

        onMounted(async()=>{
            var res = await getgdxq( id )
            musicobj.playlist=res.data.playlist
            console.log(musicobj)
        })
        return{ musicobj }
    },
    components:{
            listviewTop,
            playlist
    },
   
}
</script>