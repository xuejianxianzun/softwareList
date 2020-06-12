<template>
  <div class="toolBarWrap">
    <button class="btn back" @click="back()" :disabled="this.backDisable">
      <i class="el-icon-back"></i>
    </button>
    <button class="btn forward" @click="forward()" :disabled="this.forwardDisable">
      <i class="el-icon-right"></i>
    </button>
    <button class="btn up" @click="up()" :disabled="this.upDisable">
      <i class="el-icon-top"></i>
    </button>
    <div class="addressBar">
      <ul class="nodeList">
        <li class="node rootNode">
          <a href="/"> </a>
        </li>
        <li class="node" v-show="this.addressData.category.name">
          <i class="el-icon-arrow-right"></i>
          <a :href="'/category/'+ this.addressData.category.name">{{this.addressData.category.cn}}</a>
        </li>
        <li class="node" v-show="this.addressData.software.name">
          <i class="el-icon-arrow-right"></i>
          <a :href="'/software/'+ this.addressData.software.name">{{this.addressData.software.name}}</a>
        </li>
      </ul>
      <button class="btn refresh" @click="refresh()">
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
import { Vue, Component, Watch } from 'vue-property-decorator'
import { SoftwareData } from '../type.d'
import API from '../API'
@Component
export default class Toolbar extends Vue {
  private addressData={
    category: {
      name: '',
      cn: ''
    },
    software: {
      name: ''
    }
  }

  private backDisable = true
  private forwardDisable = true
  private upDisable = true

  private back () {
    this.$router.back()
  }

  private forward () {
    this.$router.forward()
  }

  private up () {
    const path = location.pathname
    // 软件页面返回分类页
    if (path.includes('/software/')) {
      const category = this.$store.state.currSoftware.category
      if (category) {
        this.$router.push({
          path: '/category/' + category
        })
      } else {
        return false
      }
    }
    // 分类页主页
    if (path.includes('/category/')) {
      this.$router.push({
        path: '/'
      })
    }
    // 主页什么也不做
    if (path === '/') {
      return false
    }
  }

  private refresh () {
    window.location.reload()
  }

  private checkUp () {
    const index = location.pathname === '/'
    console.log(index)
    this.upDisable = index
  }

  // 因为软件数据同时包含了分类信息，所以从这里获取路径信息
  @Watch('$store.state.currSoftware', { immediate: true, deep: true })
  onChangeValue (newVal: SoftwareData) {
    this.addressData.software.name = newVal.name || ''
    this.addressData.category.name = newVal.category || ''
    this.addressData.category.cn = API.getCategoryCN(newVal.category)

    // 如果没有获取到分类信息，从 url 里尝试获取
    if (!this.addressData.category.name) {
      const name = API.getCategoryFromURL()
      this.addressData.category.name = name
      this.addressData.category.cn = API.getCategoryCN(name)
    }
  }

  created () {
    this.checkUp()
    this.$router.afterEach((to, from) => {
      console.log(this.$route)
    })
  }

  updated () {
    this.checkUp()
  }
}
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
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-size: 14px;
  height: @height;
  padding: 0 15px 0 10px;
    button:disabled{
      opacity: .5;
    }
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
