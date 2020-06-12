<template>
  <div class="contentLeftWrap">
    <div class="menuGroup">
      <div class="menuRoot menuItem active">
        <a href="/" class="text">
          <div class="menuCon">
            <div class="icon">
              <img src="../assets/rootIcon.png" alt />
            </div>
            <span>主页</span>
          </div>
        </a>
      </div>
      <ul class="subMenuList">
        <li v-for="category in this.categoryList" :key="category.name" class="menuItem">
          <a :href="'/category/'+category.name" class="text">
            <div class="menuCon">
              <div class="icon">
                <img :src="category.icon" alt />
              </div>
              <span>{{category.cn}}</span>
            </div>
          </a>
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

async created () {
  const res = await API.getAllCategory()
  const list = res.body.categoryList
  const allList = this.$store.state.categoryList as CategoryData[]
  this.categoryList = allList.filter((val) => {
    return list.includes(val.name)
  })
  this.$store.state.savedCategoryList = this.categoryList
}
}
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
