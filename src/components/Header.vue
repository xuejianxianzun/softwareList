<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script lang="ts">
import store from '../store'
import API from '../API'
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  private readonly orgTitle = store.getters.getTitle
  private title = ''

  private getTitle () {
    const path = location.pathname
    // 首页
    if (path === '/') {
      this.title = this.$store.state.orgTitle
    }
    // 分类页
    if (path.includes('/category/')) {
      const pathArray = path.split('/')
      const name = pathArray[pathArray.length - 1]
      this.title = API.getCategoryCN(name)
    }
    // 软件详情页
    if (path.includes('/software/')) {
      const pathArray = path.split('/')
      const name = pathArray[pathArray.length - 1]
      this.title = decodeURIComponent(name)
    }
  }

  created () {
    this.getTitle()
  }

  updated () {
    this.getTitle()
  }
}
</script>

<style lang="less" scoped>
header {
  padding: 18px 0 15px;
  text-align: center;
  h1 {
    margin: 0;
    font-size: 18px;
    font-weight: normal;
  }
}
</style>
