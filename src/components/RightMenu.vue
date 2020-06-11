<template>
  <div class="wrap" :style="{left:left+'px',top:top+'px'}">
    <ul class="group">
      <li>
        <span class="iconWrap">
          <img src="@/assets/rootIcon.png" alt="">
        </span>
        <span class="text">设置壁纸</span>
      </li>
      <li>
        <span class="iconWrap"></span>
        <span class="text">设置壁纸</span>
      </li>
    </ul>
    <ul class="group">
      <li>
        <span class="iconWrap"></span>
        <span class="text">设置壁纸</span>
      </li>
    </ul>
    <ul class="group">
      <li>
        <span class="iconWrap"></span>
        <span class="text">设置壁纸</span>
      </li>
      <li>
        <span class="iconWrap"></span>
        <span class="text">设置壁纸</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class RightMenu extends Vue {
  private left = 50
  private top = 300
}
</script>

<style lang="less" scoped>
.wrap {
  position: absolute;
  z-index: 100;
  min-width: 200px;
  max-width:300px;
  padding: 3px 0;
  border: 1px solid #aaa;
  background: #eee;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  .group {
    border-bottom: 1px solid #aaa;
    display: flex;
    flex-direction: column;
    padding: 4px 0;
    &:first-child{
padding-top: 0;
    }
    &:last-child {
      border: none;
      padding-bottom: 0;
    }
    li {
      line-height: 26px;
      height: 26px;
      display: flex;
      cursor: pointer;
      &:hover {
        background: #fff;
      }
      .iconWrap {
        width: 36px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          max-height: 20px;
          max-width: 20px;
        }
      }
      .text {
        color: #333;
      }
    }
  }
}
</style>
