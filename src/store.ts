import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orgTitle: 'saber 酱的软件清单',
    currTitle: '',
    categoryList: [
      { name: 'compress', cn: '压缩软件', icon: '' },
      { name: 'download', cn: '下载软件', icon: '' }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getTitle: (state) => {
      return state.currTitle || state.orgTitle
    }
  }
})
