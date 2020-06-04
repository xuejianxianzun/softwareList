const data = [
  {
    name: 'Bandizip',
    category: 'compress',
    link: 'https://en.bandisoft.com/bandizip/',
    icon: 'Bandizip-icon.png',
    content: `[](/images/Bandizip-1.png)
    
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
    categoryCN: '下载软件',
    link: 'https://www.internetdownloadmanager.com/',
    icon: 'IDM-icon.png',
    content: `[](/images/IDM-1.png)

    Internet Download Manager 是一款知名的 HTTP 资源下载软件。
    
    ### 多线程下载
    
    多线程下载是 Internet Download Manager 最大的优点。
    
    很多下载器在下载资源时，只建立了一个连接。而 Internet Download Manager 会尝试建立多个连接，并发下载，这样一般都可以提高下载速度。
    
    比如腾讯微云的普通用户下载速度是 100KB/S，使用 Internet Download Manager 进行 8 线程下载（默认配置），可以达到 800KB/S 的速度，极大节约了时间。

    [](/images/IDM-4.png)
    
    ### 浏览器资源嗅探
    
    安装 Internet Download Manager 时，它会自动给你正在使用的浏览器添加扩展程序，这使得 Internet Download Manager 可以嗅探网页上的资源。
    
    YouTube、bilibili、微博、贴吧、网易云音乐等各种网页的音乐、视频，都可以进行下载。
    
    [](/images/IDM-2.png)
    
    [](/images/IDM-3.png)
    
    ### 注意：
    
    1. Internet Download Manager 不支持 BT 下载。
    2. Internet Download Manager 是收费软件，不过也存在很多破解版。
    `
  }
]

module.exports = data
