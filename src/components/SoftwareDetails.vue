<template>
  <div class="detailsWrap">
    <article class="postWrap" v-show="this.ready">
      <header>
        <div class="logoWrap">
          <img :src='"/images/"+this.softwraeData.icon' alt="" class="logoImage">
        </div>
        <div class="infoWrap">
          <h4><a href="">{{this.softwraeData.name}}</a></h4>
          <p class="category"><a :href='"/category/"+this.softwraeData.category'>下载软件</a></p>
          <p class="url"><a :href="this.softwraeData.link" target="_blank" rel="nofollow">{{this.softwraeData.link}}</a></p>
        </div>
      </header>
      <section class="postBody">
        {{this.softwraeData.content}}
      </section>
    </article>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import API from '../API'
import { SoftwareData } from '../type.d'
@Component
export default class SoftwareDetails extends Vue {
  private softwraeData: SoftwareData ={
    name: '',
    category: '',
    icon: '',
    link: '',
    content: ''
  }

  private ready = false

  async created () {
    const pathArray = this.$route.path.split('/')
    const name = pathArray[pathArray.length - 1]
    const res = await API.getSoftware(name)
    this.softwraeData = res.body
    this.ready = true
  }
}
</script>

<style lang="less" scoped>
.detailsWrap{
  width: 100%;
  .postWrap{
    max-width: 900px;
    width: 90%;
    margin:10px auto;
    img{
      max-width: 100%;
    }
    header{
      display: flex;
      border-bottom: 1px solid #ddd;
      .logoWrap{
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .infoWrap{
        margin-left: 25px;
        h4{
          font-size: 20px;
          font-weight: bold;
          color: #0081D0;
          margin: 0;
          height: 40px;
          line-height: 40px;
          a{
          color: #0081D0;

          }
        }
        p{
          height: 24px;
          line-height: 24px;
        }
        .category{
          font-size:14px;
          a{
            color: #666;
          }
        }
        .url{
          font-size: 12px;
          a{
            color:#666;
            &:hover{
              text-decoration: underline;
              color: #0081D0;
            }
          }
        }
      }
    }
    .postBody{
      margin:30px auto;
      font-size: 16px;
      color: #333;
      p{
        margin:5px 0;
        line-height: 1.5;
        text-indent: 2em;
      }

        &>p{
          padding:0 10px;
        }
    }
  }
}
</style>
