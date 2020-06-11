<template>
  <div class="contentRight">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class ContentRight extends Vue {
}
</script>

<style lang="less" scoped>
.contentRight {
  display: flex;
  width: 100%;
  overflow: auto;
}
</style>
