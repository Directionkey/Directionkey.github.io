---
title: :unicorn:「css-doodle」的奇思妙想第一期
date: 2021-08-26
tags:
  - css-doodle
categories:
  - css-doodle
---

<Meting server="netease" type="song" mid="1366993875" :lrc-type="3" :autoplay="false" />

<div class="example">
  <css-doodle @click="refresh" ref="doodle">
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
        );
  </css-doodle>
  <div style="text-align:right;margin: 10px 0;">
    <button class="btn" @click="saveToPng">Save to PNG</button>
  </div>
</div>

<style>
  .example{
    width:600px; 
    margin: 10px auto; 
  }
  .btn{
    width:120px;
    height:30px;
    color: #fff;
    border:1px solid #eee;
    border-radius: 15px;
    background: linear-gradient(to left, #1579b7, #07baca);
    transform: scale(1,1);
    transition: all .2s ease;
  }
  .btn:active{
    transform: scale(1.1,.9);
  }
</style>

<script>
export default {
  methods: {
    refresh: function () {
      this.$refs.doodle.update();
    },
    saveToPng: function() {
      this.$refs.doodle.export({
        scale: 5,
        download: true,
      })
    }
  },
}
</script>w

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
