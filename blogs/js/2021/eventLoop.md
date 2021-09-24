---
title: 事件循环(event loop)、微任务、宏任务
date: 2021-09-22
tags:
  - JS
categories:
  - Code
---

<h3>宏任务</h3>

::: tip
宏任务:常见的定时器,用户交互事件等等.（宏任务就是特定的这些个任务,没什么特殊含义）
script(整体代码)、setTimeout、setInterval、UI 渲染、 I/O、postMessage、 MessageChannel、setImmediate(Node.js 环境)
:::

<h3>微任务</h3>

::: tip
微任务:Promise、 MutaionObserver、process.nextTick(Node.js 环境)等
:::

<h3>时间循环流程</h3>

::: tip

1. 执行宏任务队列中第一个任务，执行完后移除它
2. 执行所有的微任务，执行完后移除它们
3. 执行下一轮宏任务（重复步骤 2）
   :::

<h3>到底先执行微任务还是宏任务</h3>

1. 万物皆从全局上下文准备退出，全局的同步代码运行结束的这个时机开始
2. 同一层级下(不理解层级，可以先不管，后面会讲),微任务永远比宏任务先执行
3. 每个宏任务,都单独关联了一个微任务队列

```js
console.log(1);

setTimeout(function() {
  new Promise(function(resolve) {
    console.log(2);
    resolve();
  }).then(function() {
    console.log(3);
  });
}, 10);

new Promise(function(resolve) {
  console.log(4);
  for (var i = 100000; i > 0; i--) {
    i == 1 && resolve();
  }
  console.log(5);
}).then(function() {
  console.log(6);
});

setTimeout(function() {
  console.log(7);
}, 10);

console.log(8);
// 1 4 5 8 6 2 3 7
```

<h3>关联文章</h3>

[宏任务和微任务到底是什么？](https://www.jianshu.com/p/bfc3e319a96b)
