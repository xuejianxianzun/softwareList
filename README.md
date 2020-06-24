# 简介

这是一个使用 vue-cli 制作的网站，分享了一些我觉得好用的软件。

[查看在线演示站点（加载速度可能比较慢）](https://software.pixiv.download/)

[查看无背景截图](screenshot/2020-06-22_150708.png)

[查看有背景截图](screenshot/2020-06-22_150759.png)

前端使用 vue-cli，后端使用 koa 框架，数据库使用 redis。软件数据写在 js 文件里，通过 node-redis 导入到数据库。

界面上我模仿了 Windows 10 的资源管理器的样式。因为我推荐的都是电脑软件，所以我觉得用“电脑”风格明显的界面算是相得益彰。对移动端进行了简单的适配。

这个项目推荐软件的标准是适合广大普通用户使用的，所以我没有列出用途太小众的，以及专业性太强的软件。另外我也没有列出很大众的软件，比如 qq、微信，这些当用户有需要的时候自己就会想到。

这个项目里做了一个自定义右键菜单；另外用户可以选择自己电脑上的图片设置背景图片。没有背景图片的时候是白底黑字，设置背景图片之后文字会变成白色，以便于阅读。建议使用颜色较深的图片作为背景图片。

# 前端构建流程

git clone 本项目，然后进入 software-list 目录。

```
# 安装依赖
npm install

# 启动热更新
npm run serve

# 构建项目
npm run build
```

# 后端构建流程

后端文件在 `koa` 文件夹内。

```
cd koa
```

### 安装依赖

```
npm install
```

### 导入数据到数据库

首先编辑  `redis.js` 配置 redis 数据库信息，然后导入数据：

```
node initDB.js
```

### 启动后端 web 服务器

```
node index.js
```

# 配置文件

以下是一些你可能会需要修改的配置文件。

### 配置 redis 数据库信息

编辑 `koa/redis.js`

### 编辑软件数据

编辑 `koa/data.js`，然后执行 `koa/initDB.js` 向数据库写入数据。

### 修改 koa 服务的端口

修改 `koa/index/js` 结尾的端口号：

```
app.listen(3001)
```

### 配置后台使用的网址

编辑 `.env.development` 和 `.env.production` 中的变量 `VUE_APP_BACKEND_URL` 的值。

### 编辑软件的分类

软件的分类由前后端共同约定。

后端只保存分类名，如 `video`。前端保存分类的附加信息，如 `video` 的中文名为“视频”，icon 图标为 `video.png`。这样是为了让前端配置和操作更加自由。

后端部分，软件数据保存在 `koa/data.js` 里，`category` 字段是软件的分类；分类的附加信息则保存在前端 `src/store.ts` 的 `categoryList` 字段里。