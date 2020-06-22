<template>
  <div
    id="menu"
    class="menuWrap"
    :class="{'hidden':show===false}"
    :style="{ left: menuOffset[0]+ 'px', top: menuOffset[1] + 'px' }"
  >
    <input type="file" class="uploadImage" accept=".jpg, .jpeg, .png" />
    <div class="menuList">
      <ul class="group">
      <li @click="setBG()">
        <span class="iconWrap">
          <img src="@/assets/image.png" alt />
        </span>
        <span class="text">设置背景图片</span>
      </li>
      <li @click="clearBG()">
        <span class="iconWrap"></span>
        <span class="text">清除背景图片</span>
      </li>
    </ul>
    <ul class="group">
      <li @click="fullScreenFlag=true">
        <span class="iconWrap">
          <img src="@/assets/screen.png" alt />
        </span>
        <span class="text">全屏显示</span>
      </li>
      <li @click="fullScreenFlag=false">
        <span class="iconWrap"></span>
        <span class="text">窗口显示</span>
      </li>
    </ul>
    <ul class="group">
      <li @click="openGithub()">
        <span class="iconWrap"></span>
        <span class="text">项目主页</span>
      </li>
    </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import bg from '../bg'
@Component
export default class RightMenu extends Vue {
  private appEl!: HTMLElement
  private left = 50
  private top = 300
  private show = false
  private appSize = [0, 0] // app 的宽高值
  private appOffset = [0, 0] // app 左、上的 offset 值
  private mousePosition = [0, 0] // 鼠标坐标
  private menuSize = [0, 0] // menu 的宽高
  private menuOffset = [0, 0] // menu 左、上的 offset 值
  private readonly menuMargin = 4 // 因为不想让菜单紧贴 app 边缘，设置了边距。不过只在菜单要超出边界时应用，如果菜单处于正常范围内还要设置边距，那就影响体验了。
  private fullScreen = false
  private githubURL = 'https://github.com/xuejianxianzun/softwareList'
  private bgSelector = '#' + this.$store.state.bgElementID

  set showMenuFlag (boolean: boolean) {
    this.show = boolean
    boolean && this.showMenu()
  }

  get showMenuFlag () {
    return this.show
  }

  private showMenu () {
    this.show = true
    // 设置菜单的坐标
    // 首先设置为鼠标点击坐标。因为鼠标坐标是相对于整个窗口的，所以要减去 app 的 offset，这样得出的是菜单在 app 里的位置
    this.menuOffset[0] = this.mousePosition[0] - this.appOffset[0]
    this.menuOffset[1] = this.mousePosition[1] - this.appOffset[1]
    // 检查菜单边界是否会超出 app 边界
    const x = this.appSize[0] - (this.menuOffset[0] + this.menuSize[0])
    const y = this.appSize[1] - (this.menuOffset[1] + this.menuSize[1])
    if (x < 0) {
      this.menuOffset[0] = this.menuOffset[0] + x - this.menuMargin
    }
    if (y < 0) {
      this.menuOffset[1] = this.menuOffset[1] + y - this.menuMargin
    }
  }

  mounted () {
    this.appEl = (document.querySelector('#app') ||
      document.body) as HTMLElement
    const menu = document.querySelector('#menu')! as HTMLElement
    // 当显示菜单时，屏蔽默认菜单。鼠标右键事件也会在这里被屏蔽
    this.appEl.addEventListener('contextmenu', e => {
      this.showMenuFlag = false
      e.preventDefault()

      this.appSize[0] = this.appEl.clientWidth
      this.appSize[1] = this.appEl.clientHeight

      this.appOffset[0] = this.appEl.offsetLeft
      this.appOffset[1] = this.appEl.offsetTop

      this.menuSize[0] = menu.clientWidth
      this.menuSize[1] = menu.clientHeight

      this.mousePosition[0] = e.clientX || 0
      this.mousePosition[1] = e.clientY || 0

      this.showMenuFlag = true
    })

    // 这里的鼠标点击事件，只能检测到左键点击了，左键隐藏菜单
    this.appEl.addEventListener('click', () => {
      this.showMenuFlag = false
    })
  }

  set fullScreenFlag (boolean: boolean) {
    if (boolean) {
      this.appEl.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
    this.fullScreen = boolean
  }

  get fullScreenFlag () {
    return this.fullScreen
  }

  private openGithub () {
    window.open(this.githubURL)
  }

  private setBG () {
    const input = document.querySelector('.uploadImage')! as HTMLInputElement
    input.addEventListener('change', () => {
      if (input.files && input.files.length > 0) {
        const file = input.files[0]
        bg.set(file, this.bgSelector)
      }
    })
    input.click()
  }

  private clearBG () {
    bg.clear(this.bgSelector)
  }
}
</script>

<style lang="less" scoped>
.hidden {
  // display: none !important;
  z-index: -1000 !important;
  visibility: hidden;
}
.uploadImage {
  display: none;
}
.menuWrap {
  position: absolute;
  z-index: 100;
  min-width: 200px;
  max-width: 300px;
  padding: 0px 0;
  border: 1px solid #aaa;
  background: #eee;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  .group {
    border-bottom: 1px solid #aaa;
    display: flex;
    flex-direction: column;
    padding: 2px 0;
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      border: none;
      padding-bottom: 2px;
    }
    li {
      line-height: 26px;
      height: 26px;
      display: flex;
      cursor: pointer;
      &:hover {
        background: #fff;
      }
      .iconWrap {
        width: 36px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          max-height: 20px;
          max-width: 20px;
        }
      }
      .text {
        color: #333;
      }
    }
  }
}
</style>

<style lang="less">
.hasBG .menuWrap {
  background: rgba(0, 0, 0, 0.5);
  li:hover {
    background: rgba(255,255,255,0.5)!important;
  }
}
</style>
