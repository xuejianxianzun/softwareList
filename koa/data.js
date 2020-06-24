// 软件的详细介绍
// content 使用 markdown 语法。有一些注意事项：
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
    icon: 'qq-icon.png',
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
    icon: 'XboxGameBar-icon.png',
    category: 'screenshot',
    link: 'https://www.microsoft.com/windows',
    content: `![](/images/XboxGameBar-1.png)

Windows 10 自带的 Xbox Game Bar，按下快捷键 Win + G 即可启动，它的界面里包含一个截图和截屏工具。 

如图的第一个按钮就是截图按钮，直接全屏截图，自动保存到用户的图片库（或视频库）的“捕获”文件夹里。

你也可以直接按 Win + Alt + PrtSc，是相同的效果，但是不用先打开 Xbox Game Bar 了，节省了一个步骤，更快捷。
`
  },
  {
    name: 'Xbox Game Bar 录屏',
    icon: 'XboxGameBar-icon.png',
    category: 'screencap',
    link: 'https://www.microsoft.com/windows',
    content: `![](/images/XboxGameBar-1.png)

Windows 10 自带的 Xbox Game Bar，按下快捷键 Win + G 即可启动，它的界面里包含一个截图和截屏工具。 

如图的第三个按钮就是录像按钮，直接开始全屏录像。录像开始之后会出现一个提示按钮，点击可以停止录制。

![](/images/XboxGameBar-2.png)

录制的视频质量较高，体积也比较大，保存在用户视频库的“捕获”文件夹里。

**注意：** 如果你没有启动游戏程序，可能无法使用 Xbox Game Bar 的录屏功能。

你也可以直接按 Win + Alt + R，是相同的效果，但是不用先打开 Xbox Game Bar 了，节省了一个步骤，更快捷。
`
  },
  {
    name: 'QQ 录屏',
    icon: 'qq-icon.png',
    category: 'screencap',
    link: 'https://im.qq.com/',
    content: `QQ 录屏是新版腾讯 QQ 自带的功能，旧版 QQ 没有这个功能。按下快捷键 Ctrl + Alt + S 即可使用。

![](/images/qq-luping-1.png)    

QQ 录屏可以进行全屏录制、窗口录制、手绘区域录制。在录制时，你也可以设置是否使用扬声器和麦克风。

当你点击结束按钮之后，QQ 会显示一个视频播放窗口，显示你刚才录制的视频。视频不会自动保存，你需要点击右下角的“下载”图标才能保存录制的视频。

**注意：** QQ 录屏的码率比较低，而且帧率大概是固定在 24 帧左右，所以不适合进行高清录像，请根据自己的需要决定是否使用。
`
  },
  {
    name: 'Bandicam',
    icon: 'Bandicam-icon.png',
    category: 'screencap',
    link: 'https://www.bandicam.com/',
    content: `![](/images/Bandicam-1.png)    

Bandicam 是一款知名的录屏软件，可以录制屏幕，也可以捕获游戏、摄像头的图像。这款软件就不必多做介绍了吧~

**注意：** Bandicam 的免费用户单个视频录制时长不能超过 10 分钟，并且会显示 Bandicam 的水印。购买授权后无此限制。
`
  },
  {
    name: 'Everything',
    icon: 'Everything-icon.png',
    link: 'https://www.voidtools.com/',
    category: 'efficiency',
    content: `![](/images/Everything-1.png)

Everything 是一款用来快速搜索文件的软件。它资源占用少，搜索速度极快。

### 使用诀窍

1.使用通配符和正则表达式

最常用的通配符大概就是 * 了，它代表任意长度的任意字符。如使用 \`*.mp4\` 来搜索 mp4 格式的文件。

如果要使用正则表达式来搜索，需要勾选“搜索”菜单里的“使用正则表达式”选项。

2.筛选器

勾选“视图”菜单的“筛选器”，Everything 的搜索栏右侧就会出现一个筛选框，可以只显示搜索结果中某些类型的文件。

![](/images/Everything-2.png)

3.用来汇总资源

举个例子，我下载的一些资源里面有很多个子文件夹，每个文件夹里有一个压缩包，我想要一次解压所有压缩包，就可以用 Everything 搜索出这些压缩包，然后全选进行解压。

这种需求 Windows 自带的搜索也可以做到，但是 Everything 的体验还是更好一些。
`
  },
  {
    name: 'Ditto',
    icon: 'Ditto-icon.png',
    link: 'https://ditto-cp.sourceforge.io/',
    category: 'efficiency',
    content: `![](/images/Ditto-1.png)

Ditto 是一款剪贴板管理软件，对于写文章的人尤其好用，可以很大的提高效率和写作时的流畅度。

它可以保存你每一次剪切或复制的内容，这样即使我们进行了多次复制，之前复制过的内容也不会消失，想要再次粘贴时，就不需要再去复制一次了。
`
  },
  {
    name: 'PinWin',
    icon: 'PinWin-icon.png',
    link: 'https://sourceforge.net/projects/pinwin/',
    category: 'efficiency',
    content: `![](/images/PinWin-1.png)

PinWin 是一个窗口置顶工具。

PinWin 会在系统托盘显示它的图标，点击图标我们就可以看到所有已经打开的窗口程序的名字，点击其中一个就可以将其置顶显示。不管是置顶 QQ 窗口、图片、资源管理器、浏览器等都没有问题。
`
  },
  {
    name: 'CCleaner',
    icon: 'CCleaner-icon.png',
    link: 'https://www.ccleaner.com/',
    category: 'systemTool',
    content: `CCleaner 是知名的系统清理工具，现在也可以对系统进行一些管理。

![](/images/CCleaner-1.png)

CCleaner 可以扫描应用程序的缓存和回收站文件进行清理。其实很多时候自己清理一下也就够了，所以我现在没有安装 CCleaner 了。如果你有需要的话这个工具倒是挺不错的。

此外它也可以对注册表里的失效项目进行清理，清理一下注册表，感觉系统似乎甩掉累赘，变得轻快了呢（心理快感，哈哈）

![](/images/CCleaner-2.png)

CCleaner 随着更新加入了许多功能，也许会有你需要的功能：

![](/images/CCleaner-3.png)
`
  },
  {
    name: 'Speccy',
    icon: 'Speccy-icon.png',
    link: 'https://www.ccleaner.com/speccy',
    category: 'systemTool',
    content: `Speccy 是一款查看电脑软硬件情况的软件。

![](/images/Speccy-1.png)

默认显示的是概览信息，点击左侧的项目可以查看更详细的信息。

---------

如果你需要查看更加详细深入的信息，可以使用专业级的软件 AIDA64，但是对于普通用户来说没有这个必要，所以我没有单独推荐 AIDA64。

---------

在此 diss 一下 360 旗下的鲁大师。我讨厌鲁大师一方面是因为它现在算是流氓软件了，另一方面是它的“跑分”。

鲁大师的跑分似乎可以 CPU、GPU 单独测试，也可以给电脑跑个整体的分数。如果有人对我说：我的电脑鲁大师跑分 100000！我只会黑人问号，因为我对鲁大师的分数完全没有概念。你只要报硬件型号就行了，又不是所有人都安装鲁大师搞跑分，你说个分数能表达出什么？我甚至都不知道这个分数是高配还是低配。感觉这种模糊不清的跑分就小白用户最喜欢了。
`
  },
  {
    name: 'Recuva',
    icon: 'Recuva-icon.png',
    link: 'https://www.ccleaner.com/recuva',
    category: 'systemTool',
    content: `Recuva 是一款数据恢复软件。

![](/images/Recuva-1.png)

它可以扫描你的硬盘或移动设备，寻找已经删除和丢失的文件。

扫描出来的文件前面有圆形按钮，绿色、橙色、红色，分别代表文件完整性，红色的文件就算恢复估计也不完整了。

数据恢复软件虽然平时大概用不上，但是还是建议安装一个，有备无患。
`
  },
  {
    name: 'Better File Rename',
    icon: 'BetterFileRename-icon.png',
    link: 'https://www.publicspace.net/windows/BetterFileRename/',
    category: 'efficiency',
    content: `Better File Rename 是一款对文件进行批量重命名的工具。

![](/images/BetterFileRename-1.png)

它的选项丰富，功能强大。几年来我都一直使用它，它从未让我失望。

需要注意的是，Better File Rename 是收费软件。
`
  },
  {
    name: 'Duplicate Cleaner',
    icon: 'DuplicateCleaner-icon.png',
    link: 'https://www.duplicatecleaner.com/',
    category: 'systemTool',
    content: `Duplicate Cleaner 可以检测硬盘上的重复文件。

![](/images/DuplicateCleaner-1.png)

它针对搜索图片、音乐的特点，设置了一些对应的规则，提升了搜索体验。

![](/images/DuplicateCleaner-2.png)

当搜索完成后，我们可以使用预设方式快速进行选择。比如选择“相同文件只保留一份”，程序会自动勾选需要删除的文件，之后选择删除即可。

![](/images/DuplicateCleaner-3.png)

**注意：** Duplicate Cleaner 是付费软件，虽然有 30 天试用期。
`
  },
  {
    name: 'Folder Size',
    icon: 'FolderSize-icon.png',
    link: 'https://www.mindgems.com/products/Folder-Size',
    category: 'systemTool',
    content: `Folder Size 是一款查看磁盘上文件占用情况的软件，它是免费的。

![](/images/FolderSize-1.png)

当你的某个硬盘快要被占满时（尤其是 128G 的 SSD 系统盘，一言难尽），你肯定想知道是哪些文件占据了空间，然后找到一些体积大的文件删掉。

Folder Size 就是一个很好的工具，它可以分析出所有文件、文件夹的大小，并以饼状图显示出来。它的操作界面就像资源管理器一样，方便易用。你可以迅速找到占用空间很大的文件夹，一层层点击进去，分析要删除哪些文件，非常的方便。
`
  },
  {
    name: 'IconViewer',
    icon: 'IconViewer-icon.png',
    link: 'https://www.botproductions.com/iconview/',
    category: 'extract',
    content: `IconViewer 用来查看和提取程序中的图标（ICON）。

IconViewer 安装之后被集成在资源管理器里，当你查看 exe 或者 dll 等文件的属性时，会出现 Icons 选项卡。

![](/images/IconViewer-1.png)

选择要保存的图标，然后点击图标区域下方的保存按钮进行保存。

保存图标时，你可以在下拉框选择要保存的格式：

![](/images/IconViewer-2.png)

**注意：** IconViewer 每次只能保存一个图标，不能批量保存图标。如果有这个需要，可以使用 [免费图标工具](http://www.zxt2007.com/icontool.html)。
`
  },
  {
    name: 'AssetStudio',
    icon: 'AssetStudio-icon.png',
    link: 'https://github.com/Perfare/AssetStudio',
    category: 'extract',
    content: `AssetStudio 用来提取 Unity 游戏引擎打包的文件。很多手游就是使用 Unity 引擎开发的，将游戏安装包解压后，使用 AssetStudio 加载资源文件，就可以看到里面的各种资源，比如贴图、立绘、模型、动作、骨骼等，非常的方便。

![](/images/AssetStudio-1.png)
`
  },
  {
    name: 'AS SSD Benchmark',
    icon: 'ASSSDBenchmark-icon.png',
    link: 'https://www.alex-is.de/PHP/fusion/downloads.php?cat_id=4&download_id=9',
    category: 'systemTool',
    content: `AS SSD Benchmark 是一款硬盘测速软件，大家最常用它来测试 SSD 硬盘的读写表现。

![](/images/ASSSDBenchmark-1.png)

它也可以测试机械硬盘的速度。

**注意：** 下载按钮在官网页面的底部：

![](/images/ASSSDBenchmark-2.png)
`
  },
  {
    name: 'ShadowsocksR',
    icon: 'ShadowsocksR-icon.png',
    link: 'https://github.com/shadowsocksrr/shadowsocksr-csharp',
    category: 'network',
    content: `ShadowsocksR 简称 ssr，是一款网络代理软件，被广泛用来科学上网。

![](/images/ShadowsocksR-1.png)

到官网地址的 releases 页面下载安装包。

使用 ShadowsocksR 需要有可用的服务器（线路），你可能需要添加服务器或者添加订阅地址，之后再选择要是用的服务器。

ShadowsocksR 开启代理时，大部分网页浏览器如 Chrome、IE、Edge 等浏览器可以自动的把流量从 ShadowsocksR 转发。如果有些软件没有遵从系统（IE）代理设置，那么流量是不会被 ShadowsocksR 代理的。我们可以在 ShadowsocksR 设置里启用“允许来自局域网的链接”，之后在这些软件的代理设置里添加 ShadowsocksR 的代理 127.0.0.1:1080 ，就可以让它们的流量从 ShadowsocksR 转发。

![](/images/ShadowsocksR-2.png)

**一些设置提醒：**

如果你对代理的工作原理没有详细的了解，建议参照上图的设置，勾选上“切换服务器前断开……”；关闭“服务器负载均衡”。

![](/images/ShadowsocksR-1.png)

这是因为国内封锁力度大，如果 ShadowsocksR 里有多个服务器，可能有的好用有的不好用。当我们觉得当前线路很慢时可能会尝试切换线路，如果没有勾选“切换服务器前断开……”，则可能之前建立的一些连接还在使用不好的线路。

“服务器负载均衡”也可能导致 ShadowsocksR 会使用到情况不好的路线。
`
  },
  {
    name: 'V2ray',
    icon: 'V2ray-icon.png',
    link: 'https://github.com/2dust/v2rayN',
    category: 'network',
    content: `V2ray 是一款网络代理软件，被广泛用来科学上网。

![](/images/V2ray-1.png)

据说 V2ray 的加密更好，流量更加不容易被识别。

V2ray 其实本来是没有界面的，上面截图中使用的是 v2rayN，它给 V2ray 加上了一层界面，这样使用起来更方便。

到官网地址的 releases 页面下载安装包。
`
  },
  {
    name: 'Xshell',
    icon: 'Xshell-icon.png',
    link: 'https://www.netsarang.com/xshell-download/',
    category: 'network',
    content: `Xshell 是一款终端仿真软件，最常见的用途是远程登录 SSH。

![](/images/Xshell-1.png)

Xshell 界面友好，操作方便。它也支持很多其他协议：

![](/images/Xshell-2.png)

Xshell 的个人版/学生版是免费的，在官网下载时，选择自己的身份为个人/学生，然后填写一些信息就可以下载了。
`
  },
  {
    name: 'filezilla',
    icon: 'filezilla-icon.png',
    link: 'https://filezilla-project.org/',
    category: 'network',
    content: `filezilla 是免费的 FTP 管理软件，我们常用的是 FTP 客户端：

![](/images/filezilla-1.png)

如果你需要搭建 FTP 服务器，你也可以使用它的服务端：

![](/images/filezilla-2.png)

客户端和服务端是分开的两个软件，都可以从官网下载。

`
  },
  {
    name: 'Dism++',
    icon: 'Dism++-icon.png',
    link: 'http://www.chuyu.me/',
    category: 'systemTool',
    content: `Dism++ 可以对 Windows 系统进行管理，功能包括清理空间、程序管理、驱动管理、更新管理、启动项管理等等，强大易用。

![](/images/Dism++-1.png)

有时候我的系统盘满了会用它进行清理，因为一些常见的清理软件不能清理 WinSxS 组件等系统文件。有时候这些文件提及还挺大的。
`
  },
  {
    name: '傲梅分区助手',
    icon: '分区助手-icon.png',
    link: 'https://www.disktool.cn/',
    category: 'systemTool',
    content: `傲梅分区助手是一款磁盘分区管理工具，它是免费的，而且界面简洁，操作简单。

![](/images/分区助手-1.png)

分区助手有个系统盘迁移功能，比如你新加了一块 ssd 硬盘，可以用这个功能把旧系统盘的文件整个迁移到新硬盘上（包括 Windows 操作系统也会无缝迁移），无需重装系统，也不用做什么设置，很方便。

很多国产 PE 会同时内置分区助手和 DiskGenius，我更喜欢用分区助手，因为 DiskGenius 界面不够简洁，选项太多有时候功能找起来麻烦。分区助手用起来轻松愉快，能满足大多数需求。
`
  },
  {
    name: 'ScreenToGif',
    icon: 'ScreenToGif-icon.png',
    link: 'https://www.screentogif.com/',
    category: 'screenshot',
    content: `ScreenToGif 是一款方便好用的录制 gif 的工具。

![](/images/ScreenToGif-1.png)

ScreenToGif 可以从屏幕区域录制，也可以从摄像头采集，还可以建立画板自己制作 gif 动画。

“录像机”按钮就是屏幕录制，点击之后会出现一个录制窗口，可以调整大小，用它框住需要录制的区域，再开始录制即可。

![](/images/ScreenToGif-2.png)

录制结束之后，ScreenToGif 会打开编辑器界面：

![](/images/ScreenToGif-3.png)

在这里你可以编辑帧数据、改变图像大小、添加过渡效果等。

通过“文件”选项卡的“另存为”可以把录制内容保存为 gif 文件。ScreenToGif 在保存 gif 时还会智能的缩减文件的体积。
`
  },
  {
    name: 'TeamViewer',
    icon: 'TeamViewer-icon.png',
    link: 'www.teamviewer.com',
    category: 'network',
    content: `TeamViewer 是一款卓越的的远程控制工具。它使用方便，传输稳定，对非商业用途免费。

![](/images/TeamViewer-1.png)

使用 TeamViewer 连接其他人的设备时，需要对方把他的 TeamViewer 上显示的 id 和密码发给你，你才能进行连接和控制。

如果你自己有多台设备，你也可以配置 TeamViewer，可以在连接时不需要 id 和密码就能直接控制。

TeamViewer 不仅可以用来从 PC 远程到 PC，通过安装它的 app，我们也可以远程控制移动设备，或者从移动设备控制 PC。

TeamViewer 通过识别 ip 地址判断你是个人用户还是商业用户。如果你在办公区域使用可能会被识别为商业用户，被要求付费。

如果你需要一款免费的远程工具，推荐使用 AnyDesk。
`
  },
  {
    name: 'TinyTask',
    icon: 'TinyTask-icon.png',
    link: 'http://www.dayanzai.me/tinytask.html',
    category: 'efficiency',
    content: `![](/images/TinyTask-1.png)

TinyTask 是一款免费的屏幕动作录制工具，类似于按键精灵。它只有基础的录制和播放功能，不过很多时候已经可以满足我们的需要了。

它的体积只有 35.5KB，无需安装，打开即可使用。

它可以把录制的动作保存成一个文件，以后随时可以加载进行播放。

它的“生成”功能可以把当前录制或打开的动作编译为 exe 可执行文件，你可以直接双击 exe 文件播放这个动作，无需打开 TinyTask。

在设置里可以设置变速播放、循环播放。

**注意：** 

1.如果你发现它有时候不能对某些窗口进行录制或播放（主要是因为那些窗口是管理员权限），请以管理员身份启动 TinyTask，再进行操作。

2.它的录制和播放热键不能自定义，只能从几个预设按键中选择。据说这是为了保持体积的小巧。

3.它只能对前台窗口生效，如果你想让它自动操作某个窗口，需要把这个窗口放在最顶端（不能最小化或者切换到其他窗口）。

4.它的官网似乎已经不再运行了，此页面上放的官网链接是汉化版的下载页面。
`
  },
  {
    name: 'waifu2x-caffe',
    icon: 'waifu2x-caffe-icon.png',
    link: 'https://github.com/lltcggie/waifu2x-caffe',
    category: 'image',
    content: `
waifu2x 是一款可以把图片放大的软件，但是它的本体没有 UI 界面，不适合普通人使用。

waifu2x-caffe 是日本人开发的软件，简单理解就是给 waifu2x 加了一个界面，方便我们使用。

到官网网址的 releases 页面下载最新版的安装包，解压之后运行 waifu2x-caffe.exe。

**注意：** 

1.建议在拥有 NVIDIA （英伟达）显卡的情况下使用此软件。

2.一般来说打开之后是不能直接用的。

点击界面右侧的“cuDNN 检查”，如果出现红色的提示，说明需要设置 cuDNN。

![](/images/waifu2x-caffe-1.png)

------

下面我来讲一下怎样配置才能让它可以使用。（官方网址的 readme 里也有讲）

1.将你的 NVIDIA 显卡驱动更新到最新。

2.安装 Visual C++ 2015 运行库（2017 也可以）。

3.打开 [cuDNN 下载页面](https://developer.nvidia.com/cudnn)。此页面要求登录，点击页面右上角的“ACCOUNT”注册一个账号并登录。

4.登陆之后回到 cuDNN 下载页面，点击 cuDNN 的下载按钮：

![](/images/waifu2x-caffe-2.png)

5.在下载页面：

![](/images/waifu2x-caffe-3.png)

勾选 1 处的同意协议，然后会出现各个版本的列表。最上面的是最新版本，但我们不用最新版本，而是使用 **v7** 版本（2 处）。

点击这个版本，会出现各个发行版，在里面找到适合自己系统的安装包，比如我就是 Windows 10（3 处），点击即可下载 cuDNN 的压缩包。

6.下载的是一个 zip 文件，解压并找到 **cudnn64_7.dll** 这个文件：

![](/images/waifu2x-caffe-4.png)

将其复制到 waifu2x-caffe.exe 的目录里，关闭 waifu2x-caffe 重新打开，检测 cuDNN 是否可用。如果提示 OK 的话就行啦~

-------

为什么 cuDNN 使用 v7 而不是最新的 v8 版本呢？因为 waifu2x-caffe 适配的是 v7，我们可以看到 v7 的 bin 文件夹里只有一个文件：cudnn64_7.dll，它的体积也很大。而 v8 版本的 bin 文件夹里有很多文件，cudnn64_8.dll 只是其中一个，体积只有 200 多 KB，因此 v8 版本的应该没法配合 waifu2x-caffe 使用。（不知道把 v8 版本 bin 里的所有文件都复制过去能不能用）
`
  },
  {
    name: '微 PE',
    icon: 'wepe-icon.png',
    category: 'systemTool',
    link: 'http://www.wepe.com.cn/',
    content: `![](/images/wepe-1.png)

微 PE 是一个纯净无广告的 PE，它下载下来是一个 exe 安装包，可以选择把 PE 安装到硬盘或者 U 盘里。

现在微 PE 的下载页面要求扫码支付才能下载了，我放个 [PC6 下载站的下载页面](http://www.pc6.com/softview/SoftView_139463.html) 吧。

---------

早些年我经常折腾系统的时候，PE 是一个不可缺少的工具。那时候大白菜、老毛桃还没有加广告，真是怀念。

它们加了广告之后，我便使用另一款纯净的 PE：通用 PE。后来通用 PE 被它的创作者卖掉了，也走上了加广告的路。还好创作者创建了微 PE，至今也保持着纯净舒适的体验。`
  },
  {
    name: '3DM 运行库',
    icon: '3DM运行库-icon.png',
    category: 'systemTool',
    link: 'https://dl.3dmgame.com/patch/28051.html',
    content: `![](/images/3DM运行库-1.png)

有一些软件可能需要你安装某个版本的 .net 或者 vc 运行库，临时去安装的话体验很不好。3DM 运行库个很方便的工具，可以直接安装大多数常用的运行库和游戏组件，使得软件和游戏运行无忧。`
  },
  {
    name: 'PotPlayer',
    icon: 'PotPlayer-icon.png',
    category: 'video',
    link: 'http://potplayer.daum.net/',
    content: `![](/images/PotPlayer-1.png)

PotPlayer 是一款强大的视频播放器。它简单易用，功能丰富，支持多种编码格式，支持观看直播。

我们作为普通用户可能不会去设置一些艰深难懂的选项，不过有一些实用功能我们也能用得上。例如我常用的这些：

快捷键 空格 控制暂停/播放；
快捷键 ↑ ↓ 调整音量；
快捷键 ← → 跳转到上/下一个关键帧；
快捷键 D 跳转到上一帧；
快捷键 F 跳转到下一帧；
快捷键 Z 恢复正常播放速度；
快捷键 X 减慢播放速度；
快捷键 C 加快播放速度；
快捷键 Ctrl + C 复制当前帧；
快捷键 Ctrl + C 复制当前帧；
快捷键 Ctrl + G 连续截图，自动保存；
快捷键 Tab 显示播放信息；
快捷键 [ ] 设置区段循环；

-----

图为我用 PotPlayer 看 bilibili 的直播：

![](/images/PotPlayer-2.jpg)

使用的工具 [https://github.com/dd-center/B2B](https://github.com/dd-center/B2B)

其实用 PotPlayer 看直播通常比在浏览器里看直播占用资源更少。
`
  },
  {
    name: '格式工厂',
    icon: '格式工厂-icon.png',
    category: 'video',
    link: 'http://www.pcfreetime.com/formatfactory/',
    content: `![](/images/格式工厂-1.png)

格式工厂是老牌的视频转换工具了。它也可以支持图片和音频的转换。

它使用方便，能够使用显卡加速，转换速度很快。

普通用户使用格式工厂能满足大部分需求了，如果你有更专业的需求，可以考虑使用 MediaCoder，或者直接使用 FFmpeg。

ps：想起了当初用狸窝转换器慢悠悠转换 3gp 的日子，那是我逝去的青春。
`
  },
  {
    name: '360 驱动大师',
    icon: '360DrvMgr-icon.png',
    link: 'http://www.360.cn/qudongdashi/index.html',
    category: 'systemTool',
    content: `360 驱动大师是一款 Windows 操作系统的驱动管理软件。

![](/images/360DrvMgr-1.png)

早些年大家都是用驱动精灵、驱动人生，但是后来它们加入了越来越多的广告，甚至开始做电脑管家的功能……

360 驱动大师出现的比它们晚，但是纯净，无广告不流氓，是 360 为数不多的良心，希望可以保持下去。
`
  }
]

module.exports = data
