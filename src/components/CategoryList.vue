<template>
  <div class="categoryWrap">
    <nav class="list">
      <router-link v-for="item in this.categoryList" :key="item.name" :to="'/category/'+item.name" class="listItem">
        <div class="iconWrap">
          <img :src=item.icon alt="" class="icon">
        </div>
        <div class="textWrap">
          <h2>{{item.cn}}</h2>
        </div>
      </router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CategoryData } from '../type.d'
import API from '../API'

@Component
export default class CategoryList extends Vue {
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
@activeBG: rgba(190,222,255,0.6);
.categoryWrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  .list{
  width: 100%;
    display: flex;
    flex-wrap: wrap;
    .listItem{
      display: flex;
      box-sizing: border-box;
      margin:5px 0;
      padding: 5px 5px;
      min-width: 220px;
      flex-shrink: 0;
      height: 70px;
      transition: all .2s;
      & *{
        display: inline-flex;
      }
      &:hover,&:focus{
        background-color: @activeBG;
      }
      .iconWrap{
      box-sizing: border-box;
        height: 100%;
        width: 80px;
        padding: 0 10px;
        justify-content: center;
        align-items: center;
        img{
          max-width: 100%;
        }
      }
      .textWrap{
        h2{
          padding-top: 6px;
          font-weight: normal;
          font-size: 16px;
          color: #000;
        }
      }
    }
  }
}
</style>
