---
title: 博客图床
date: 2021-09-07
tags:
  - Imgur
  - ImagesWeserv
categories:
  - Website
---

为何选择此图床

::: tip
用来存图片咯，imgur 这家老牌服务商坚挺十多年没跑路，不选他选谁，更别提分类等诸多功能。虽然处在半墙状态，但搭配图片缓存服务[Images.weserv.nl](https://images.weserv.nl/url=)都不是个事儿,这个缓存服务还提供许多图片自定义属性功能，非常好用！

11/18 更新
weserv GG 了，imgur 对请求限速了。看样子得另寻出路了 👀
作者回复：Imgur is rate-limiting requests nowadays, and our public service only runs on a handful of IP-adresses.

```
【国内网宿节点，只能加载特定图床图片如imgur】https://search.pstatic.net/common/?src=
【Akamai节点，没有使用限制】https://imageproxy.pimg.tw/resize?url=
【CloudFlare节点】https://images.weserv.nl/url=
【CloudFlare节点】https://pic1.xuehuaimg.com/proxy/
```

:::

踩的坑

::: tip
坑：
imgur 上的纯图片地址目前我是通过 f12 拿到的，不清楚网站是否提供了相关功能。

对策：
用了 picgo，需要获取 client_id（看链接 picgo 文档），还需要设置代理。好处是上传贼方便。
:::

相关链接

::: tip
[Images.weserv.nl 文档](https://pic1.xuehuaimg.com/proxy/docs/)

[Imgur](https://imgur.com/)

[Picgo 文档](https://picgo.github.io/PicGo-Doc/zh/guide/config.html#imgur%E5%9B%BE%E5%BA%8A)

[参考博客](https://www.cnblogs.com/ChenYFan/p/13786239.html)
:::
