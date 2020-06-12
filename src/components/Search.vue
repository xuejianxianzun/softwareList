<template>
  <div class="softwareWrap">
    <div class="list">
      <router-link v-for="item in this.softwareList" :key="item.name" :to="'/software/'+item.name" class="listItem">
        <div class="iconWrap">
          <img :src='"/images/"+item.icon' alt="" class="icon">
        </div>
        <div class="textWrap">
          <h3>{{item.name}}</h3>
        </div>
      </router-link>
    </div>
      <p class="empty" :class="{'hidden':softwareList.length>0}">搜索结果为空</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import API from '../API'
import { SoftwareData } from '../type.d'
@Component
export default class Search extends Vue {
  private softwareList: SoftwareData[]=[]

  private async getSoftwareList () {
    const word = this.$route.params.word
    const res = await API.search(word)
    this.softwareList = res.body.softwareList
  }

  async created () {
    this.$store.state.currCategory = ''
    this.getSoftwareList()

    this.$router.afterEach(() => {
      this.getSoftwareList()
    })
  }
}
</script> +
<style lang="less" scoped>
@activeBG: #E5F3FF;

.hidden{
  display: none;
}
.empty{
  text-align: center;
  color: #666;
}
.softwareWrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  font-size: 14px;
  .list{
  width: 100%;
    display: flex;
    flex-wrap: wrap;
    .listItem{
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      margin:5px 5px;
      padding: 10px 10px;
      min-width: 140px;
      flex-shrink: 0;
      transition: all .2s;
      &:hover,&:focus{
        background-color: @activeBG;
      }
      .iconWrap{
        height: 128px;
        width: 128px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        img{
          max-width: 100%;
        }
      }
      .textWrap{
        text-align: center;
        h3{
          margin: 0;
          padding: 0;
          padding-top: 6px;
          font-weight: normal;
          font-size: 14px;
          color: #000;
        }
      }
    }
  }
}
</style>
