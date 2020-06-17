<template>
  <div class="detailsWrap">
    <article class="postWrap" v-show="this.ready">
      <header>
        <div class="logoWrap">
          <img
            :src="'/images/' + this.softwraeData.icon"
            alt=""
            class="logoImage"
          />
        </div>
        <div class="infoWrap">
            <router-link :to="'/software/' + this.softwraeData.name"><h4>{{ this.softwraeData.name }}</h4></router-link>
          <p class="category">
            分类：<router-link :to="'/category/' + this.softwraeData.category">{{this.categoryCN}}</router-link>
          </p>
          <p class="url">
            官网：<a :href="this.softwraeData.link" target="_blank" rel="nofollow">{{
              this.softwraeData.link
            }}</a>
          </p>
        </div>
      </header>
      <section class="postBody" v-html="this.softwraeData.content"></section>
    </article>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import API from '../API'
import { SoftwareData } from '../type.d'
@Component
export default class SoftwareDetails extends Vue {
  private MarkdownIt = require('markdown-it')
  private md = new this.MarkdownIt()
  private softwraeData: SoftwareData = {
    name: '',
    category: '',
    icon: '',
    link: '',
    content: ''
  }

  private ready = false

  get categoryCN () {
    return API.getCategoryCN(this.softwraeData.category)
  }

  async created () {
    const pathArray = this.$route.path.split('/')
    const name = pathArray[pathArray.length - 1]
    const res = await API.getSoftware(name)
    res.body.content = this.md.render(res.body.content)
    this.softwraeData = res.body
    this.ready = true
    this.$store.state.currSoftware = this.softwraeData
    this.$store.state.currCategory = this.softwraeData.category
  }

  beforeDestroy () {
    this.$store.state.currSoftware = {}
  }
}
</script>

<style lang="less" scoped>
.detailsWrap {
  width: 100%;
  .postWrap {
    max-width: 900px;
    width: 92%;
    margin: 10px auto;
    img {
      max-width: 100%;
    }
    header {
      display: flex;
      padding-bottom: 5px;
      border-bottom: 1px solid #eee;
      .logoWrap {
        width: 128px;
        height: 128px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .infoWrap {
        margin-left: 25px;
        h4 {
          font-size: 20px;
          font-weight: bold;
          color: #0081d0;
          margin: 0;
          height: 40px;
          line-height: 40px;
          a {
            color: #0081d0;
          }
        }
        p {
          height: 24px;
          line-height: 24px;
          color: #666;
          a {
            color: #666;
            &:hover {
              text-decoration: underline;
              color: #29abfb;
            }
          }
        }

        .category {
          font-size: 14px;
        }
        .url {
          font-size: 14px;
        }
      }
    }
    .postBody {
      margin: 30px auto;
      font-size: 16px;
      color: #333;
    }
  }
}
</style>

<style lang="less">
.postBody {
  img {
    max-width: 100%;
  }
  p {
    margin: 5px 0;
    line-height: 1.5;
    // text-indent: 2em;
  }

  & > p {
    padding: 0 10px;
  }
}
</style>
