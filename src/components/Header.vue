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
      const name = this.$route.params.name
      this.title = API.getCategoryCN(name)
    }
    // 软件详情页
    if (path.includes('/software/')) {
      const name = this.$route.params.name
      this.title = decodeURIComponent(name)
    }
  }

  created () {
    this.getTitle()
    this.$router.afterEach((to, from) => {
      this.getTitle()
    })
  }
}
</script>

<style lang="less" scoped>
header {
  @height:50px;
  box-sizing: border-box;
  min-height: @height;
  text-align: center;
  h1 {
    line-height: @height;
    margin: 0;
    font-size: 16px;
    font-weight: normal;
  }
}
</style>
