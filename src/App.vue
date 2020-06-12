<template>
  <div id="app">
      <div id="bg" class="bg"></div>
      <div id="bgWhite" class="bg"></div>
      <Header></Header>
      <Toolbar></Toolbar>
      <ContentWrap></ContentWrap>
      <RightMenu></RightMenu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './components/Header.vue'
import Toolbar from './components/Toolbar.vue'
import ContentWrap from './components/ContentWrap.vue'
import RightMenu from './components/RightMenu.vue'

@Component({
  components: { Header, Toolbar, ContentWrap, RightMenu }
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  display: flex;
  flex-direction: column;
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
    background-size: cover;
  }
  #bg{
    z-index: -1;
    opacity: 0.5;
  }
  #bgWhite{
    z-index: -2;
    background-color: #fff;
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
