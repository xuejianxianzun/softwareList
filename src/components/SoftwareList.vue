<template>
  <div class="softwareWrap">
    <div class="list">
      <router-link
        v-for="item in this.softwareList"
        :key="item.name"
        :to="'/software/'+item.name"
        class="listItem"
      >
        <div class="iconWrap">
          <img :src="'/images/'+item.icon" alt class="icon" />
        </div>
        <div class="textWrap">
          <h3>{{item.name}}</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import API from '../API'
import { SoftwareData } from '../type.d'
@Component
export default class SoftwareList extends Vue {
  private softwareList: SoftwareData[]=[]

  private async getSoftwareList () {
    const name = this.$route.params.name
    const res = await API.getSoftwareList(name)
    this.softwareList = res.body.softwareList
  }

  private init () {
    this.$store.state.currCateg = this.$route.params.name
    this.getSoftwareList()
  }

  created () {
    this.init()
  }

  @Watch('$route')
  change () {
    this.init()
  }

  // beforeRouteUpdate 不起作用，所以用 watch
  // beforeRouteUpdate (to, from, next) {
  //   this.init()
  //   next()
  // }
}
</script>
<style lang="less" scoped>
@activeBG: rgba(190, 222, 255, 0.6);
.softwareWrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  .list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .listItem {
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      margin: 5px 5px;
      padding: 10px 10px;
      min-width: 140px;
      flex-shrink: 0;
      transition: all 0.2s;
      &:hover,
      &:focus {
        background-color: @activeBG;
      }
      .iconWrap {
        height: 128px;
        width: 128px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          max-width: 100%;
        }
      }
      .textWrap {
        text-align: center;
        h3 {
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
