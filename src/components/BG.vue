<template>
  <div class="bgWrap">
    <div :id="$store.state.bgElementID" class="bg"></div>
    <div id="bgWhite" class="bg"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import bg from '../bg'
@Component
export default class BG extends Vue {
  private bgSelector = '#' + this.$store.state.bgElementID

  mounted () {
    bg.onchange = () => {
      this.checkBG()
    }

    bg.restore(this.bgSelector)
  }

  private checkBG () {
    if (bg.hasBG()) {
      document.body.classList.add('hasBG')
    } else {
      document.body.classList.remove('hasBG')
    }
  }
}
</script>

<style lang="less" scoped>
.bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-color: #fff;
}
#bg {
  z-index: -1;
  // filter: blur(1px);
}
#bgWhite {
  z-index: -2;
  background-color: #000;
}
</style>

<style lang="less">
.hasBG {
  div,
  p,
  span,
  li,
  i,
  em,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  input,
  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    color: #fff !important;
    text-shadow: 2px 2px 10px #000;
  }
  #bg {
    opacity: 0.8;
  }
}
</style>
