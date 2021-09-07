---
title: Vuepress中使用VexTab
date: 2021-08-30
tags:
  - VexTab
categories:
  - Website
---

## 为何选择此插件

::: tip
用来记谱子:musical_score:咯，而目前有许多音乐曲谱库，像吉他社用的是 alphaTab，比较了一下最终选择了专攻五线谱同时又兼顾了吉他谱的[VexFlow/VexTab](https://www.jianshu.com/p/a4ad9337decb)
:::

## 踩过的坑

:::tip
1.vue 中使用 VexTab 中的方法无法 import 进来，一直是 undefined 报错，看了一下 issues，react、angular 也存在同样的问题。

对策：
在 VexTab 中的 webpack.config.js 文件的 output 属性添加 libraryTarget: 'umd'，因为最新版 npm 包没发，所以自己重新编译 build 下，覆盖掉即可。

2.vuepress 框架中的 md 文档是可以用 vue 组件的，但引入外部插件会报 window is not defined。大概是由于浏览器的 API 访问限制导致。需要确保在 beforeMount 或者 mounted 访问浏览器/DOM 的 API。

对策：
使用官网方法`<ClientOnly>`，但我准备写的动态组件，参数都抽出来了，使用后此方法后参数失效。所以使用官网提供的另一种方法在组件中动态引入。官网还有种方法通过 enhanceApp.js 中 Mixin 来处理，以后有空在研究。

3.notation=true 的时候除了六线谱，五线谱也会展示，但会出现有关于音符音高排序的 warning，大概是因为六线谱转换五线谱的问题吧。所以设为 false 就好了

```js
export default {
  data() {
    return {
      dynamicComponent: null,
    };
  },
  mounted() {
    import('./lib-that-access-window-on-import').then((module) => {
      this.dynamicComponent = module.default;
    });
  },
};
```

:::

## VexFlow 案例

<div id="easy_score"></div>

<script>
import Vex from 'vexflow';
export default {
  mounted(){
    this.drawTabByEasyScore();
  },
  methods:{
    drawTabByEasyScore(){
      const vf = new Vex.Flow.Factory({
      renderer: {elementId: 'easy_score', width: 500, height: 200}
    });

    const score = vf.EasyScore();
    const system = vf.System();

    system.addStave({
      voices: [
        score.voice(score.notes('C#5/q, B4, A4, G#4', {stem: 'up'})),
        score.voice(score.notes('C#4/h, C#4', {stem: 'down'}))
      ]
    }).addClef('treble').addTimeSignature('4/4');

    vf.draw();
    },
  }
}
</script>

## VexTab 案例

<VexTab :data="`
          tabstave notation=false key=A time=4/4
          notes :q =|: (5/2.5/3.7/4) :8 7-5h6/3 ^3^ 5h6-7/5 ^3^ :q 7V/4 |
          notes :8 t12p7/4 s5s3/4 :8 3s:16:5-7/5 :q p5/4
          text :w, |#segno, ,|, :hd, , #tr
        `" />

## 相关链接

::: tip
[VexFlow](https://github.com/0xfe/vexflow)

[VexTab](https://github.com/0xfe/vextab)

[VexTab 教学案例](http://vexflow.com/vextab/tutorial.html)

[VexChords 和弦手型](https://github.com/0xfe/vexchords)
:::
