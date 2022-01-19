---
title: 毛玻璃
date: 2022-01-29
tags:
  - css
categories:
  - Css
---

<template>
  <div class="body">
    <div class="main">
    </div>
    <div class="blockquote">
      123
    </div>
  </div>
</template>
<style>
.body{
	margin: 0;
	padding: 0;
  width: 100%;
  height: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.body,.main::before{
	background: url('https://pic1.xuehuaimg.com/proxy/https://i.imgur.com/cCKUHz2.jpg') 0/ cover fixed;
}
.main {
	width: 200px;
	height: 200px;
	position: relative;
	margin-top: calc(50% - 500px);
	overflow: hidden;
	border-radius: 5px;
	background: hsla(0, 0%, 100%, .3);
	box-shadow: 2px 2px 10px rgba(0,0,0,.5);
}
.main::before {
	position: absolute;
	content: '';
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	filter: blur(8px);
	margin: -30px;
}
.blockquote {
  position: absolute;
  padding: 20px;
  z-index: 100;
}
</style>

[思路来源](https://blog.csdn.net/qq_39043923/article/details/88687046)

[官方](https://vue-loader-v14.vuejs.org/zh-cn/features/scoped-css.html)
