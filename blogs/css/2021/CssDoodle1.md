---
title: :unicorn:「css-doodle」的奇思妙想第一期
date: 2021-08-26
tags:
  - css-doodle
categories:
  - css-doodle
---

<Doodle :data="`
        @grid: 1 / 100% 300px;
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
  //关键点在于transform中的变换，image中的一个cell由对角对应黑白的四个方块构成，
  以这四个方块的共同的顶点作为变换中心，先做skewY将一部分的bg的红色显露出来
  但作为共同顶点的部分因为隐藏所以看不出skewY变化，所以需要用rotateX旋转成菱形。
</css-doodle>
```
