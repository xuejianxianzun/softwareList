class BG {
  private readonly storeName = 'xzbg'
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public onchange: Function = () => {}

  public set (file: File, selector: string) {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const result = reader.result as string
      this.setBG(result, selector)
    }
  }

  public restore (selector: string) {
    const result = localStorage.getItem(this.storeName)
    if (!result) {
      console.log('没有背景图片')
    } else {
      this.setBG(result, selector)
    }
  }

  public clear (selector: string) {
    localStorage.removeItem(this.storeName)
    const el = document.querySelector(selector) as HTMLElement
    if (el) {
      el.style.backgroundImage = ''
      this.onchange()
    }
  }

  public hasBG () {
    return !!localStorage.getItem(this.storeName)
  }

  private setBG (bg: string, selector: string) {
    try {
      localStorage.setItem(this.storeName, bg)
      const el = document.querySelector(selector) as HTMLElement
      if (el) {
        el.style.backgroundImage = `url(${bg})`
        this.onchange()
      }
    } catch (err) {
      alert('背景图片存储失败，可能是因为体积过大。')
    }
  }
}

const bg = new BG()
export default bg
