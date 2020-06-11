<template>
  <div class="contentWrap">
    <ContentLeft></ContentLeft>
    <ContentRight></ContentRight>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ContentLeft from './ContentLeft.vue'
import ContentRight from './ContentRight.vue'

@Component({
  components: {
    ContentLeft,
    ContentRight
  }
})
export default class ContentWrap extends Vue {}
</script>

<style lang="less" scoped>
.contentWrap {
  overflow: hidden;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
}
</style>
