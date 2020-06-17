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
<style lang="less">
::-webkit-scrollbar{width:14px;}//滚动条整体部分
::-webkit-scrollbar-track-piece{background-color:rgba(255,255,255,0.3);}//滚动条主体部分
::-webkit-scrollbar-thumb{background:rgba(0,0,0,0.3);} //滚动句柄
</style>
