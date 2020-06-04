<template>
  <div class="toolBarWrap">
    <button class="btn back">
      <i class="el-icon-back"></i>
    </button>
    <button class="btn forward">
      <i class="el-icon-right"></i>
    </button>
    <button class="btn up">
      <i class="el-icon-top"></i>
    </button>
    <div class="addressBar">
      <ul class="nodeList">
        <li class="node rootNode">
          <a href="/"> </a>
        </li>
        <li class="node">
          <i class="el-icon-arrow-right"></i>
          <a href="/">主页</a>
        </li>
        <li class="node">
          <i class="el-icon-arrow-right"></i>
          <a href="">下载软件</a>
        </li>
      </ul>
      <button class="btn refresh">
        <i class="el-icon-refresh-right"></i>
      </button>
    </div>
    <div class="searchBar">
      <i class="el-icon-search"></i>
      <input type="text" placeholder="请输入搜索内容" />
      <button class="btn go hidden">
        <i class="el-icon-right"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Toolbar extends Vue {}
</script>

<style lang="less" scoped>
@borderColor: #d9d9d9;
@hoverBG: #e5f3ff;
@height: 28px;
@iconSize: 16px;

.hidden {
  display: none;
}
.show {
  display: flex;
}

.toolBarWrap {
  display: flex;
  align-items: center;
  font-size: 14px;
  height: @height;
  padding: 0 15px 0 10px;
  .btn {
    background: none;
    border: none;
    cursor: pointer;
    height: 100%;
    width: 40px;
    align-items: center;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    &:hover {
      background: @hoverBG;
    }
    i {
      font-size: @iconSize;
      font-weight: bold;
      color: #777;
    }
  }
  .addressBar {
    display: flex;
    height: @height;
    box-sizing: border-box;
    border: 1px solid @borderColor;
    flex-shrink: 0;
    flex-grow: 1;
    min-width: 300px;
    justify-content: space-between;
    .nodeList {
      display: flex;
      .node {
        cursor: pointer;
        display: inline-flex;
        height: 100%;
        align-items: center;
        padding-right: 10px;
        i {
          opacity: 0.6;
          font-size: @iconSize;
        }
        &:hover {
          background: @hoverBG;
        }
        & > * {
          display: inline-flex;
        }
        a {
          color: #222;
        }
      }

      .rootNode {
        &::before {
          display: none;
        }
        padding: 0;
        width: 40px;
        height: 100%;
        a {
          background: url('../assets/rootIcon.png') center center no-repeat;
          background-size: 50%;
          display: inline-flex;
          width: 100%;
          height: 100%;
        }
      }
    }
    .refresh {
      display: flex;
      justify-content: center;
      border-left: 1px solid @borderColor;
    }
  }
  .searchBar {
    display: flex;
    margin-left: 15px;
    height: @height;
    box-sizing: border-box;
    border: 1px solid @borderColor;
    align-items: center;
    & > * {
      display: flex;
    }
    i {
      padding: 0 10px;
      flex-shrink: 0;
      color: #999;
    }
    input {
      box-sizing: border-box;
      border: none;
      outline: none;
      height: 96%;
      font-size: 14px;
    }
    .go {
      display: none;
      justify-content: center;
      border-left: 1px solid @borderColor;
    }
  }
}
</style>
