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
.body,
.main::before{
	background: url('https://pic1.xuehuaimg.com/proxy/https://i.imgur.com/cCKUHz2.jpg') left top / cover no-repeat fixed;
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

还有一种就是 backdrop-filter:blur(10px) 模糊只影响到元素背景，不会影响到内部元素
但我认为二者的使用场景是不同的
第一种是适合大面积场景滚动，第二种小场景
