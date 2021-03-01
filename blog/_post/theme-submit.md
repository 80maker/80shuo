---
date: 2021-02-06
title: VuePress 主题提交说明
category: theme
tags:
  - VuePress
---

## 欢迎在留言区提交你喜爱的主题

### 提交格式

```
---
name: vuepress-theme-maker // 主题包名称
cover: https://80shuo.com/images/screenshot.webp // 截图
author: 80maker // 可选 默认从npm包信息获取
avatar: 头像图片地址
email: cmgddd@126.com // 可选 用于gravtar头像图片生成
site: https://80shuo.com // 主题预览地址
repo: //可选 仓库地址
theme-tags:
  - dark
  - blog
---
```

### 数据来源

由于人工维护太耗费精力,会不定期抓取npm包信息及相应的Github代码仓库中的Readme文件内容

### 提交方式

提交一个新主题的时候只需要在留言区提供上述提交格式中的内容即可 🤡

另外也可以直接通过`PR`的形式,在_theme目录下添加以你的主题名称命名的包含`frontmatter`数据的`.md`文件

