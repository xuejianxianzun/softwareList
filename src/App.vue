<template>
  <div id="app">
    <div class="appWrap">
      <div class="bg"></div>
      <Header></Header>
      <Toolbar></Toolbar>
      <ContentWrap></ContentWrap>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './components/Header.vue'
import Toolbar from './components/Toolbar.vue'
import ContentWrap from './components/ContentWrap.vue'

@Component({
  components: { Header, Toolbar, ContentWrap }
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.appWrap {
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 13px #ccc;
  margin: 10vh auto 0;
  padding: 0;
  overflow: hidden;
  max-width: 1200px;
  width: 96vw;
  max-height: 80vh;
  height: 730px;
  color: #000;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: cover;
    opacity: 0.5;
  }
}
body {
  overflow-y: hidden;
  background: #eee;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
</style>
