import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orgTitle: 'saber 酱的软件清单',
    currTitle: '',
    bgElementID: 'bg',
    categoryList: [
      { name: 'compress', cn: '压缩', icon: '/images/categoryIcon/compress.png' },
      { name: 'download', cn: '下载', icon: '/images/categoryIcon/download.png' },
      { name: 'video', cn: '视频', icon: '/images/categoryIcon/video.png' },
      { name: 'music', cn: '音乐', icon: '/images/categoryIcon/music.png' },
      { name: 'image', cn: '图像', icon: '/images/categoryIcon/image.png' },
      { name: 'screenshot', cn: '截图', icon: '/images/categoryIcon/screen.png' },
      { name: 'screencap', cn: '录屏', icon: '/images/categoryIcon/screencap.png' },
      { name: 'efficiency', cn: '效率', icon: '/images/categoryIcon/efficiency.png' },
      { name: 'systemTool', cn: '系统', icon: '/images/categoryIcon/systemTool.png' },
      { name: 'extract', cn: '提取', icon: '/images/categoryIcon/extract.png' },
      { name: 'network', cn: '网络', icon: '/images/categoryIcon/network.png' }
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
