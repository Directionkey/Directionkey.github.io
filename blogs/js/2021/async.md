---
title: async
date: 2021-08-26
tags:
  - JS
categories:
  - Code
---

`async`和`await`处理异步任务
async 本质是通过`Promise`包装异步任务

例如以下代码：

```js
async function async1() {
  await async2(); //await后的代码相当于微任务
  console.log('async1 end');
}
async function async2() {
  console.log('async2 end');
}
async1();
```

转换为 es5:

```js
new Promise((resolve, reject) => {
  //console.log('async2 end');
  async2();
}).then(() => {
  console.log('async1 end');
});
```

<h3>请记住async函数实质就是返回一个Promise！
而await是在等待一个Promise的异步返回</h3>

拓展:同步异步与阻塞非阻塞的区别？

::: tip
阻塞和非阻塞
:::
:unicorn:
强调的是程序在等待调用结果（消息，返回值）时的状态.

::: tip
同步和异步
:::
:unicorn:
强调的是消息通信机制。

<h3>关联文章</h3>

[事件循环(event loop)、微任务、宏任务](./eventLoop.md)

[process.nextTick](https://www.jianshu.com/p/5328c72279ff)

[promise/async 强力推荐](https://segmentfault.com/a/1190000016788484)

[promise 链跳出](https://github.com/xieranmaya/blog/issues/5)
