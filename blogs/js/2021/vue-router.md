---
title: 学习vue-router顺带在复习下hash模式和history模式
date: 2021-10-29
tags:
  - Vue
categories:
  - Code
---

先 npm 安装，然后在 router/index.js 文件中引入

```js
import { createRouter, createWebHistory，createWebHashHistory } from 'vue-router';
// createWebHistory路由模式路径不带#号(生产环境下不能直接访问项目，需要nginx转发)
// createWebHashHistory路由模式路径带#号
```

<h3>hash 模式和 history 模式</h3>

::: tip
vue 这类 SPA(单页面应用)需要引入前端路由系统，核心在于——改变视图的同时不会向后端发出请求。
:::
由此浏览器提供了 hash 模式和 history 模式两种支持（浏览器自身的特性）：

- hash —— 即地址栏 URL 中的 # 符号（此 hash 不是密码学里的散列运算）。比如这个 URL：http://www.abc.com/#/hello hash 的值为 #/hello。它的特点在于：hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。

- history —— 利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。（需要特定浏览器支持）这两个方法应用于浏览器的历史记录栈，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改时，虽然改变了当前的 URL，但浏览器不会立即向后端发送请求。

1. back()方法
   后退一个页面，相当于浏览器的后退按钮。
2. forward()方法
   前进一个页面，相当于浏览器前进按钮。
3. go()方法
   打开一个指定位置的页面。

::: tip
在 history 对象中，可以分别使用 history.go(1)和 history.go(-1)代替 history.forward()和 history.back()。
:::

this.$router相当于一个全局的路有对象，包含了很多属性和对象（比如history对象），任何页面都可以调用其push()、replace()、go()等方法
this.$route 表示当前路由对象，每一个路由都会有一个 route 对象，是一个局部的对象，可以获取对应的 name、path、params、query 等属性。
$router:是路由操作对象，只写对象
$route:是路由信息对象，只读对象

```js
    方法一 声明式
    <router-link :to="{name:'EstimateIndex',params:{userId:'123'},query:{userId:'123'}}" class="button">
                  E眼评估
    </router-link>
    方法二 编程式
    this.$router.push({
      // path: `/classify/index/${this.selectedKeys1[0]}`, 这里用path的话需要在router配置对应的路径里添加/:参数名
      name: 'ClassifyIndex',
      params: {
        name: 'rua'
      }
    })
```

```tip
注意： path 和 params 不能搭配使用,path只能和 query 搭配用。
而 name，params，query 可以一起使。
路由中的name是不能重复的，而path是可以的。
```

捕获所有路由或 404 Not found 路由

```js
const routes = [
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  // 将匹配以 `/user-` 开头的所有内容，并将其放在 `$route.params.afterUser` 下
  { path: '/user-:afterUser(.*)', component: UserGeneric },
];
```

参数自定义正则

```js
const routes = [
  // /:orderId -> 仅匹配数字
  { path: '/:orderId(\\d+)' },
  // /:productName -> 匹配其他任何内容
  { path: '/:productName' },
  // /:chapters ->  匹配 /one, /one/two, /one/two/three, 等
  { path: '/:chapters+' },
  // /:chapters -> 匹配 /, /one, /one/two, /one/two/three, 等
  { path: '/:chapters*' },
];
```

```tip
确保转义反斜杠( \ )，就像我们对 \d (变成\\d)所做的那样，在 JavaScript 中实际传递字符串中的反斜杠字符。
```

将 props 传递给路由组件。解除\$route 与路由的紧密耦合。使得该组件更容易重用和测试。

```js
在路由中添加props;
const User = {
  props: ['id'],
  template: '<div>User {{ id }}</div>',
};
const routes = [{ path: '/user/:id', component: User, props: true }];
```

```tip
当 props 设置为 true 时，route.params 将被设置为组件的 props。
```

[官网](https://router.vuejs.org/zh/guide/#html)
[参考-传参](https://www.jianshu.com/p/f1e2266373b7)
