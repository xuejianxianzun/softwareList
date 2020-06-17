// 软件的详细介绍 content 使用 markdown 语法。有一些注意事项：
// 换行时前面不要有空格，否则可能会解析出错误的格式
// 软件名不可重复
// 附件的文件名里不能有空格
// 不要使用数字序号 1 2 3 这样，因为解析器不会自动添加这些数字
const data = [
  {
    name: 'Bandizip',
    category: 'compress',
    link: 'https://en.bandisoft.com/bandizip/',
    icon: 'Bandizip-icon.png',
    content: `![](/images/Bandizip-1.png)
    
Bandizip 是一款美观、人性化的压缩软件。

相比其他压缩软件，它有一些值得称道的优点，可以优化我们的使用体验。

### 智能的自动解压

假如一个压缩包里没有文件夹，所有的文件都是直接放在压缩包里的。在其他的压缩软件里，如果你选择“解压到当前文件夹”，那么这些文件就都被解压到当前文件夹，非常的凌乱。这种压缩包应该选择“解压到 ... 文件夹”。

再假如一个压缩包里的文件已经被统一放在一个文件夹里了，这时候应该选择“解压到当前文件夹”，而不是“解压到 ... 文件夹”。后者会导致解压出来的文件夹外面又套了一层文件夹。

所以你可能需要先打开这个压缩包，看看它有没有文件夹，然后再选择它的解压方式。

Bandizip 会自动根据情况，智能的进行处理。在压缩包上右键，直接选择“自动解压”即可。

### 预览压缩包里的图片

选中压缩包里的图片，Bandizip 会在窗口左下角显示预览图。

付费版可以直接在文件列表里查看所有缩略图。（就像在资源管理器里一样）

### 自动识别文件名的编码

我们可能会遇到一些压缩包里的文件名是日文，其他压缩软件可能解压时不能识别出这是日文，导致解压出来的文件名是乱码的，根本没法看。Bandizip 可以自动识别多种编码，不用担心乱码。`
  },
  {
    name: 'Internet Download Manager',
    category: 'download',
    link: 'https://www.internetdownloadmanager.com/',
    icon: 'IDM-icon.png',
    content: `![](/images/IDM-1.png)

Internet Download Manager 是一款知名的 HTTP 资源下载软件。

### 多线程下载

多线程下载是 Internet Download Manager 最大的优点。

很多下载器在下载资源时，只建立了一个连接。而 Internet Download Manager 会尝试建立多个连接，并发下载，这样一般都可以提高下载速度。

比如腾讯微云的普通用户下载速度是 100KB/S，使用 Internet Download Manager 进行 8 线程下载（默认配置），可以达到 800KB/S 的速度，极大节约了时间。

![](/images/IDM-4.png)

### 浏览器资源嗅探

安装 Internet Download Manager 时，它会自动给你正在使用的浏览器添加扩展程序，这使得 Internet Download Manager 可以嗅探网页上的资源。

YouTube、bilibili、微博、贴吧、网易云音乐等各种网页的音乐、视频，都可以进行下载。

![](/images/IDM-2.png)

![](/images/IDM-3.png)

### 注意：

1. Internet Download Manager 不支持 BT 下载。我使用 qBittorrent 进行 BT 下载。
2. Internet Download Manager 是收费软件。不过在国内你懂得。
    `
  },
  {
    name: 'Honeyview',
    category: 'image',
    icon: 'HoneyView-icon.png',
    link: 'https://en.bandisoft.com/honeyview/',
    content: `![](/images/Honeyview-1.jpg)

Honeyview（中文名蜂蜜浏览器），是一款小巧、快速、同时又有许多亮点的图片查看器。我使用它已经长达三年多的时间，在此之前我使用过许多知名的图片查看软件，最终 Honeyview 满足了我的所有需求。

### 可以隐藏界面

上图是默认设置下的截图，Honeyview 会显示标题栏、工具栏、图片信息、缩放控制等界面。但是我们可以在它的设置里隐藏这些界面，这样查看图片时，就是单纯显示这张图片，没有任何多余的界面元素。这种极致的查看体验令人心情舒爽。

### 多种图片缩放模式

![](/images/Honeyview-2.png)

Honeyview 支持多种缩放模式，而且控制起来很方便。

比如有一张分辨率很高的图片，我们想查看它的全貌时，可以使用适合窗口（9）。如果想要 1:1 的查看原图，可以使用原始大小（0）。

当我们查看一些高分辨率的竖向图片时，全貌（9）看不清图片细节，原图（0）又只能显示出局部，这时候使用适合宽度（8）就是极好的，这相当于平衡了前两种选项，观看起来很舒适。

当我们查看漫画时，可以使用对开阅读模式（6 或者 7），它可以同时显示两张图片，像看漫画书一样。

拉伸小图片（Z），当图片宽度比窗口宽度小的时候，你可以使用这个功能将图片放大到宽度占满窗口。

此外，始终可以使用键盘上的加减按键（+ -）对缩放比例进行微调。

### 批量转换图片

Honeyview 可以对图片进行批量转换，转换速度快，质量也高。但是以前它遇到文件名中含有一些特殊字符时，可能转换出错导致中途停止。现在似乎好了很多，一般不会出问题了。

### 其他辅助功能

比如精选图片：如果我们打算浏览一个图集里的图片，挑选其中觉得最好看的一些，那么使用 Honeyview 浏览的时候，只需要按下 Insert 键，这张图片就会被复制到用户目录下“我的图片/蜂蜜浏览器”文件夹里，稍后我们打开图片库就可以看到这些保存的图片了。

此外，一些系统默认不支持显示 psd、webp 等文件的预览图，Honeyview 的设置里可以开启此功能，显示这些文件的预览图。
    `
  },
  {
    name: 'FastStone Image Viewer',
    category: 'image',
    link: 'http://www.faststone.org/FSViewerDetail.htm',
    icon: 'FSViewer-icon.png',
    content: `![](/images/FSViewer-1.jpg)

FastStone Image Viewer 是一个老牌的的图片管理软件，官网显示的版本信息最早一条是 2004 年的。它不仅能查看图片，还可以进行批量转换、批量重命名、简单的图像编辑等。

如果只是用它来查看图片，就显得有些大材小用了。不过我并不喜欢它繁多的功能，而且它查看图片的体验没有 Honeyview 舒适。

### 转换图片

我使用它主要是用来批量转换图片。

在几年前，我使用的其他图片查看器的转换功能多少都有些问题，主要是当文件名中含有特殊字符时可能会转换失败，甚至严重的会导致蓝屏和原文件损坏（点名批评 XnView）。而 FastStone Image Viewer 从未失败过，数年来我都放心的使用它来转换图片（就是感觉转换速度有点慢）。不过现在似乎 Honeyview 转换图片也完善了很多，FastStone Image Viewer 快要在我这里下岗了。

FastStone Image Viewer 转换图片时可以进行高级设置，有时候这是很有用的：

![](/images/FSViewer-2.jpg)

有时我会转换一些高分辨率的图片,设置宽度为 1920 像素，用来做电脑壁纸。不过这个功能 Honeyview 也有，我以后打算多用 Honeyview 转换，如果没有问题的话我以后会卸载掉 FastStone Image Viewer。

其他的功能如旋转什么的我没有没用过，如果你正好有需求的话用起来就很方便。
    `
  },
  {
    name: 'qBittorrent',
    category: 'download',
    icon: 'qBittorrent-icon.png',
    link: 'https://www.qbittorrent.org/',
    content: `![](/images/qBittorrent-1.png)
    
qBittorrent 是一款开源的 BT 下载软件。

使用时记得在设置里添加 [trackerslist](https://github.com/ngosang/trackerslist) 哦~

![](/images/qBittorrent-2.png)

如果我们添加一个磁力链接，qBittorrent 会先下载它的种子文件，但是很多时候 qBittorrent 一直下载不到种子文件。这时候我会使用迅雷来当种子下载器，然后让 qBittorrent 直接加载迅雷下载好的种子。
    `
  },
  {
    name: '迅雷',
    category: 'download',
    link: 'https://www.xunlei.com/',
    icon: 'xunlei-icon.png',
    content: `![](/images/xunlei-1.png)

刚才我从某论坛下载了个迅雷 5，看看廉颇老矣，尚能饭否？答案没有让我失望。而且迅雷 5 也不会像最新版迅雷一样提示“敏感资源无法下载”。迅雷 5，永远滴神！

当然平时还是要用最新版的，只是最新版的迅雷界面是什么尿性大家都懂，我不想截图去伤害我的眼睛了。

### 下载 BT 种子

我用最新版迅雷是用来下载 BT 种子的。因为国外的 BT 软件下载磁力链接时，可能会下载不下来种子文件。这时候我就会打开迅雷，用它把种子下载下来，然后再用国外的 BT 软件打开种子进行下载。

为什么我不直接用迅雷下载 BT 资源呢？一方面迅雷不能下敏感资源（盗版、色情），另一方面迅雷下载 BT 也不一定就快。如果有会员加速还好，没有的话我就用其他 BT 软件下了，不用吸血雷。
    `
  },
  {
    name: 'pornhub视频下载插件',
    icon: 'phd-icon.png',
    link: 'https://zgao.top/',
    category: 'download',
    content: `![](/images/phd-1.png)

pornhub 视频下载插件是 Chrome 浏览器的扩展程序，当你在 pornhub 观看视频时，点击它的图标，就会出现各个清晰度的下载链接。非常的方便推荐复制链接用下载软件下载。

目前谷歌应用商店里的不是最新版本，请到官网（作者的个人网站）查看最新版本的下载信息。下载安装包之后解压，离线安装到 Chrome 里使用。
    `
  },
  {
    name: 'Powerful Pixiv Downloader',
    icon: 'pbd-icon.png',
    link: 'https://pixiv.download/',
    category: 'download',
    content: `![](/images/pbd-1.png)

Powerful Pixiv Downloader 是 Chrome 浏览器的扩展程序，用于从 pixiv.net 批量下载图片和小说。

目前谷歌应用商店里的不是最新版本，请到官网查看最新版本的下载信息。下载安装包之后解压，离线安装到 Chrome 里使用。
    `
  },
  {
    name: '7-Zip',
    icon: '7z-icon.png',
    link: 'https://www.7-zip.org/',
    category: 'compress',
    content: `![](/images/7z-1.png)

7z 是一款开源免费的压缩软件，拥有很高的压缩率，并且能够充分发挥多核性能。

7z 的界面比较简陋，不过这对我来说不是问题。

其实我平时主要用 Bandizip，安装 7z 是因为它有个方便的功能：有一些文件虽然不是普通意义上的“压缩包”，但其实可以作为压缩包打开查看，如 exe、dll、iso、wim 等，右键这样的文件，选择 7-Zip-打开压缩包，就可以查看文件结构了。

![](/images/7z-2.png)
    `
  },
  {
    name: 'Adobe Photoshop',
    icon: 'photoshop-icon.png',
    link: 'https://www.adobe.com/products/photoshop.html',
    category: 'image',
    content: `![](/images/photoshop-1.png)

Adobe Photoshop 的大名就不用多说了，有需要的话就使用它吧！
    `
  }, {
    name: 'FastStone Capture',
    icon: 'FSCapture-icon.png',
    category: 'screenshot',
    link: 'https://www.faststone.org/FSCaptureDetail.htm',
    content: `![](/images/FSCapture-1.png)

FastStone Capture 是一款经典的截图软件，体积小巧，功能却很强大。

它有全屏截取、部分区域截取、自动识别窗口、滚动截屏、定时截图、自动水印等功能，甚至可以进行屏幕录像。

它附带了简单的图片编辑工具，我们可以简单的编辑截图。不过有个问题，它的编辑工具里似乎没有马赛克功能，只能用不透明的颜色去遮挡。

它也有很多有用的小功能，比如屏幕标尺、取色器、放大镜等。
    `
  }, {
    name: 'QQ 截图',
    icon: 'qqjietu-icon.png',
    category: 'screenshot',
    link: 'https://im.qq.com/',
    content: `![](/images/qqjietu-1.png)
    
QQ 截图作为腾讯 QQ 自带的功能，按下快捷键 Ctrl + Alt + A 即可使用，深受大家喜爱，而且现在功能也加强了很多，对于日常使用中要求不高的截图需求，已经够用了。

QQ 截图可以自动识别窗口，可以进行长截图，可以进行简单的标注，还能够对图片里的文字进行识别。

但是 QQ 截图有两点令我不满意：

1.自动识别窗口时，经常包含窗口周围多余的空白区域。如图：

![](/images/qqjietu-2.png)

除了窗口的上侧没有多余的区域，其他三边全都有多余的区域，很烦人，出现这种情况的时候我经常会换个软件截图。

2.一些右键菜单，或者软件顶部的下拉菜单，失去焦点时就会消失。如果你想要截取这些菜单，在你按 QQ 截图的快捷键的时候，这些菜单就会消失导致 QQ 截图截取不到。我使用的其他截图软件没有这个问题。

所以对我来说，当我需要使用 QQ 截图的标注、马赛克、OCR 识别时，我会很喜欢它，其他时候我会尽量使用其他截图软件。
`
  }, {
    name: 'Windows 截图工具',
    icon: 'windowsScreenshot-icon.png',
    category: 'screenshot',
    link: 'https://www.microsoft.com/windows',
    content: `![](/images/windowsScreenshot-1.png)

Windows 10 自带了截图工具，按下快捷键 Win + Shift + S 即可呼出截图工具。 

截图工具可以进行矩形截图、手绘截图、窗口截图、全屏截图。

![](/images/windowsScreenshot-2.png)

截图之后会显示一个通知，此时图片是保存在剪贴板里的。如果你想把截图保存成文件，可以点击这通知打开一个图片编辑工具并选择保存；或者粘贴到其他地方（如QQ的聊天框），然后再保存成图片。
`
  }, {
    name: 'Xbox Game Bar 截图',
    icon: 'Xbox Game Bar-icon.png',
    category: 'screenshot',
    link: 'https://www.microsoft.com/windows',
    content: `![](/images/XboxGameBar-1.png)

Windows 10 自带的 Xbox Game Bar，按下快捷键 Win + G 即可启动，它的界面里包含一个截图和截屏工具。 

如图的第一个按钮就是截图按钮，直接全屏截图，自动保存到用户的图片库（或视频库）的“捕获”文件夹里。

其实你也可以直接按 Win + Alt + PrtSc，是相同的效果，但是不用先打开 Xbox Game Bar 了，节省了一个步骤，更快捷。
`
  },
  {
    name: 'Xbox Game Bar 录屏',
    icon: 'Xbox Game Bar-icon.png',
    category: 'screencap',
    link: 'https://www.microsoft.com/windows',
    content: `![](/images/XboxGameBar-1.png)

Windows 10 自带的 Xbox Game Bar，按下快捷键 Win + G 即可启动，它的界面里包含一个截图和截屏工具。 

如图的第三个按钮就是录像按钮，直接开始全屏录像。录像开始之后会出现一个提示按钮，点击可以停止录制。

![](/images/XboxGameBar-2.png)

录制的视频质量较高，体积也比较大，保存在用户视频库的“捕获”文件夹里。

注意：如果你没有启动游戏程序，可能无法使用 Xbox Game Bar 的录屏功能。

其实你也可以直接按 Win + Alt + R，是相同的效果，但是不用先打开 Xbox Game Bar 了，节省了一个步骤，更快捷。
`
  }
]

module.exports = data
