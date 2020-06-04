<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script lang="ts">
import store from '../store'
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  private readonly orgTitle = store.getters.getTitle

  private get title () {
    return store.getters.getTitle
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
