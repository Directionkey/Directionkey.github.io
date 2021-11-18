---
title: vue3+ts+element-plus踩坑
date: 2021-11-03
tags:
  - Vue3
  - typescript
  - element-plus
categories:
  - Code
---

感觉兼容不太好。

npm add element-plus 以后 main.ts 文件内报错

```js
import installElementPlus from './plugins/element';
//Could not find a declaration file for module './plugins/element'
```

需要将 plugins 文件夹下的 element 的文件改成 ts 后缀，之后出现新问题

```js
import 'element-plus/lib/theme-chalk/index.css';
//this dependency was not found
```

替换成 import 'element-plus/dist/index.css';
