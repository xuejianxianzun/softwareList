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
          <router-link to="/">
          <i class="icon"></i>
          <span>主页</span>
          </router-link>
        </li>
        <li class="node" v-show="this.$route.name==='search'">
          <i class="el-icon-arrow-right"></i>
          <router-link :to="'/search/'+ this.$route.params.word"> "{{ this.$route.params.word}}" 的搜索结果</router-link>
        </li>
        <li class="node" v-show="this.$store.state.addressData.category.name">
          <i class="el-icon-arrow-right"></i>
          <router-link :to="'/category/'+ this.$store.state.addressData.category.name">{{this.$store.state.addressData.category.cn}}</router-link>
        </li>
        <li class="node" v-show="this.$store.state.addressData.software.name">
          <i class="el-icon-arrow-right"></i>
          <router-link :to="'/software/'+ this.$store.state.addressData.software.name">{{this.$store.state.addressData.software.name}}</router-link>
        </li>
      </ul>
      <button class="btn refresh" @click="refresh()">
        <i class="el-icon-refresh-right"></i>
      </button>
    </div>
    <div class="searchBar">
      <i class="el-icon-search"></i>
      <input type="text" placeholder="请输入搜索内容" v-model="searchWord" @keyup.enter="goToSearch()"/>
      <button class="btn go" :class="{'show':searchWord.length>1,'hidden':searchWord===''}" @click="goToSearch()">
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

  private searchWord=''

  private backDisable = true
  private forwardDisable = true
  private upDisable = true

  private goToSearch () {
    if (this.searchWord === '') {
      // 如果搜索字符为空，返回主页
      this.$router.push({ path: '/' })
      return false
    }
    // 不重复提交相同的搜索字符，因为这可能会导致 history 操作报错
    if (this.$route.params.word === this.searchWord) {
      return false
    }
    this.$router.push({
      path: '/search/' + this.searchWord
    })
  }

  private clearSearchWord () {
    if (this.$route.name !== 'search') {
      this.searchWord = ''
    }
  }

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
      }
      return
    }
    // 分类页返回主页
    if (path.includes('/category/')) {
      this.$router.push({
        path: '/'
      })
      return
    }
    // 主页什么也不做
    if (path === '/') {
      return false
    }
    // 其他未知情况，返回主页
    this.$router.push({
      path: '/'
    })
  }

  private refresh () {
    window.location.reload()
  }

  private checkUp () {
    const index = location.pathname === '/'
    this.upDisable = index
  }

  private checkBack () {
    const noHistory = history.length === 1
    this.backDisable = noHistory
  }

  private checkForward () {
    const noHistory = history.length === 1
    this.forwardDisable = noHistory
  }

  // 监听不到 currSoftware 时从路由里获取路径信息
  private getAddress (path: string) {
    if (path.includes('/category/')) {
      const name = this.$route.params.name
      this.$store.state.addressData.category.name = name
      this.$store.state.addressData.category.cn = API.getCategoryCN(name)
    }
    if (path === '/') {
      this.$store.state.addressData.category.name = ''
      this.$store.state.addressData.category.cn = ''
    }
  }

  // 监听 currSoftware，获取路径信息。因为软件数据同时包含了分类信息
  @Watch('$store.state.currSoftware', { immediate: true, deep: true })
  onChangeValue (newVal: SoftwareData) {
    this.$store.state.addressData.software.name = newVal.name || ''
    this.$store.state.addressData.category.name = newVal.category || ''
    this.$store.state.addressData.category.cn = API.getCategoryCN(newVal.category)

    // 如果没有获取到分类信息，从 url 里尝试获取
    if (!this.$store.state.addressData.category.name) {
      const name = API.getCategoryFromURL()
      this.$store.state.addressData.category.name = name
      this.$store.state.addressData.category.cn = API.getCategoryCN(name)
    }
  }

  private init () {
    this.checkBack()
    this.checkForward()
    this.checkUp()
    this.getAddress(this.$route.path)
    this.clearSearchWord()
  }

  @Watch('$route')
  change () {
    this.init()
  }

  created () {
    this.init()
  }
}
</script>

<style lang="less" scoped>
@borderColor: #d9d9d9;
@hoverBG: rgba(190,222,255,0.6);
@height: 30px;
@iconSize: 16px;

.hidden {
  display: none !important;
}
.show {
  display: flex !important;
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
    input{
      background:transparent;
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
          color: #aaa;
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
        // width: 40px;
        height: 100%;
        .icon{
          background: url('../assets/rootIcon.png') center center no-repeat;
          background-size: 60%;
          display: inline-flex;
        width: 30px;
        }
        a{
          padding-right: 5px;
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
    position: relative;
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
      position: absolute;
      right: 0;
      top:0;
      z-index: 100;
      justify-content: center;
      border-left: 1px solid @borderColor;
    }
  }
}
</style>
