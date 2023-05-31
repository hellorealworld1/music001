import { createStore } from 'vuex'

export default createStore({
  state: {
    playlist:[   //音乐播放列表
      {
        name: "情非得已", 
        id: 33894312, 
        al:{
          id: 16960,
          name: "情非得已",
          pic: 19061133579343590,
          picUrl: "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
          pic_str: "19061133579343591",
        }
      }, {
        name: "断桥残雪", 
        id: 167937, 
        al:{
          id: 16960,
          name: "断桥残雪",
          pic: 19061133579343590,
          picUrl: "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
          pic_str: "19061133579343591",
        }
      } 
    ],
    playCurrentIndex:0,
    lyric:"hello",
    islogin:true
  },
  getters: {
  },
  mutations: {
    setPlayList(state,value){
      state.playlist = value;
    },
    setplayIndex(state,value){
      state.playCurrentIndex = value;
    },
    setlyric(state,value){
      state.lyric = value;
    },
    addgq(state,value){
      state.playlist.push(value)
      state.playCurrentIndex = state.playlist.length-1
    }
  },
  actions: {
  },
  modules: {
  }
})
