import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orgTitle: 'saber 酱的软件清单',
    currTitle: '',
    backendOrigin: '//localhost:3000',
    categoryList: [
      { name: 'compress', cn: '压缩', icon: '/images/categoryIcon/compress.png' },
      { name: 'download', cn: '下载', icon: '/images/categoryIcon/download.png' },
      { name: 'video', cn: '视频', icon: '/images/categoryIcon/video.png' },
      { name: 'music', cn: '音乐', icon: '/images/categoryIcon/music.png' },
      { name: 'image', cn: '图像', icon: '/images/categoryIcon/image.png' },
      { name: 'efficiency', cn: '效率', icon: '/images/categoryIcon/efficiency.png' }
    ],
    savedCategoryList: [],
    currSoftware: {},
    currCategory: '',
    addressData: {
      category: {
        name: '',
        cn: ''
      },
      software: {
        name: ''
      }
    }
  },
  mutations: {},
  actions: {},
  getters: {
  }
})
