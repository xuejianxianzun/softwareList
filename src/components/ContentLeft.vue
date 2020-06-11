<template>
  <div class="contentLeftWrap">
    <div class="menuGroup">
      <div class="menuRoot menuItem active">
        <a href="/category/download" class="text">
          <div class="menuCon">
            <div class="icon">
              <img src="../assets/rootIcon.png" alt />
            </div>
            <span>主页</span>
          </div>
        </a>
      </div>
      <ul class="subMenuList">
        <li class="menuItem">
          <a href="/category/download" class="text">
            <div class="menuCon">
              <div class="icon">
                <img src="../assets/rootIcon.png" alt />
              </div>
              <span>主页</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class ContentLeft extends Vue {}
</script>

<style lang="less" scoped>
@menuHeight: 28px;
@activeBG: #cce8ff;
.contentLeftWrap {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 0 10px 0 10px;
  font-size: 14px;
  width: 220px;
  flex-shrink: 0;
  overflow: auto;
  .menuGroup {
    margin: 5px 0 10px;
    width: 100%;
    .menuRoot {
      .menuCon {
        padding-left: 15px;
      }
    }
    .subMenuList {
      .menuCon {
        padding-left: 30px;
      }
    }
    .menuItem {
      &.active {
        background: @activeBG;
      }
      &:hover {
        background: #e5f3ff;
      }
      .menuCon {
        display: flex;
        height: @menuHeight;
        align-items: center;
        color: #333;

        & > * {
          display: flex;
        }
        .icon {
          margin-right: 8px;
          img {
            width: 80%;
          }
        }
        a {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
