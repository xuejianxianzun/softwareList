<template>
  <div class="contentLeftWrap">
    <div class="menuGroup">
      <div class="menuRoot menuItem" :class="{'active':$store.state.currCategory === ''}">
        <router-link to="/" class="text">
          <div class="menuCon">
            <div class="icon">
              <img src="../assets/rootIcon.png" alt />
            </div>
            <span>主页</span>
          </div>
        </router-link>
      </div>
      <ul class="subMenuList">
        <li v-for="category in this.categoryList" :key="category.name" class="menuItem" :class="{'active':$store.state.currCategory === category.name}">
          <router-link :to="'/category/'+category.name" class="text">
            <div class="menuCon">
              <div class="icon">
                <img :src="category.icon" alt />
              </div>
              <span>{{category.cn}}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CategoryData } from '../type.d'
import API from '../API'

@Component
export default class ContentLeft extends Vue {
private categoryList: CategoryData[]=[]

private getCurrCategory () {
  if (this.$route.path === '/') {
    this.$store.state.currCategory = ''
  }

  if (this.$route.path.includes('/category/')) {
    this.$store.state.currCategory = this.$route.params.name
  }
}

async created () {
  const res = await API.getAllCategory()
  const list = res.body.categoryList
  const allList = this.$store.state.categoryList as CategoryData[]
  this.categoryList = allList.filter((val) => {
    return list.includes(val.name)
  })
  this.$store.state.savedCategoryList = this.categoryList

  this.getCurrCategory()

  this.$router.afterEach((to, from) => {
    this.getCurrCategory()
  })
}
}
</script>

<style lang="less" scoped>
@menuHeight: 28px;
@activeBG: rgba(190,222,255,0.6);
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
        background: @activeBG;
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
          width: 24px;
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

<style lang="less">
@media
screen and (max-width:750px){
  .contentLeftWrap{
    display: none!important;
  }
}
</style>
