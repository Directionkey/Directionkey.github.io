---
title: Vuepress中遇到的问题总结
date: 2021-09-14
tags:
  - Vuepress
categories:
  - Website
---

问题 1.Vuepress 的热更新失效

解决：在 package.json 添加新的启动命令，然后在.gitignore 添加`...temp`

```js
  "dev": "vuepress dev . --open .temp --host \"localhost\""
```

问题 2.Vuepress 发布 404

解决：在 config.js 中的路径设置，本地跑`/`,发布用`./`

```js
  base: '/',
```
