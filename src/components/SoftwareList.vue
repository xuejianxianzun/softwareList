<template>
  <div class="softwareWrap">
    <div class="list">
      <a v-for="item in this.softwareList" :key="item.name" :href="'/software/'+item.name" class="listItem">
        <div class="iconWrap">
          <img :src='"/images/"+item.icon' alt="" class="icon">
        </div>
        <div class="textWrap">
          <h3>{{item.name}}</h3>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import API from '../API'
import { SoftwareData } from '../type.d'
@Component
export default class SoftwareList extends Vue {
  private softwareList: SoftwareData[]=[]

  async created () {
    const pathArray = this.$route.path.split('/')
    const name = pathArray[pathArray.length - 1]
    const res = await API.getSoftwareList(name)
    this.softwareList = res.body.softwareList
  }
}
</script> +
<style lang="less" scoped>
@activeBG: #E5F3FF;
.softwareWrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  .list{
  width: 100%;
    display: flex;
    flex-wrap: wrap;
    .listItem{
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
