---
title: :unicorn:「css-doodle」的奇思妙想第一期
date: 2021-08-26
tags:
  - css-doodle
categories:
  - css-doodle
---

<Meting server="netease" type="song" mid="1366993875" :lrc-type="3" :autoplay="false" />

<Doodle :data="`
        @grid: 1 / 600px 300px;
        background-size: 83px 135px;
        background-color: #D24B45;
        background-image: @doodle(
        @grid: 2 / 100%;
        background: @pn(#3C2B34, #F7F0E9, #F7F0E9);
        transform-origin:
          @pn(100% 100%, 0 100%, 100% 0, 0 0);
        transform:
          rotateX(45deg)
          skewY(@pn(34deg, -34deg, -34deg));
        );`"/>

```css
<css-doodle>
  @grid: 1 / 600px 300px; //@grid设置的尺寸对于外部margin的auto居中无效，需另行设置
  background-size: 83px 135px;
  background-color: #D24B45;
  background-image: @doodle(
    @grid: 2 / 100%;
    background: @pn(#3C2B34, #F7F0E9, #F7F0E9);
    transform-origin:
      @pn(100% 100%, 0 100%, 100% 0, 0 0);
    transform:
      rotateX(45deg)
      skewY(@pn(34deg, -34deg, -34deg));
  );
</css-doodle>
```
