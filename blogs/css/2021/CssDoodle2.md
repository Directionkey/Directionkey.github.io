---
title: :unicorn:「css-doodle」的奇思妙想第二期
date: 2021-09-16
tags:
  - css-doodle
categories:
  - css-doodle
---

<template>
  <div class="box">
    <css-doodle click-to-update class="doodle" ref="doodle">
      @grid: 81 / 100vmax;
      :doodle {
        overflow: hidden;
      }
      :container {
        grid-gap: 5px;
        transform: rotate(30deg) scale(1.5);
      }
      @row(even){
          @shape: triangle;
          background: @pd(#D26A8F,#7CC5CE,#F4967A,#F7E755,#E2322E);
      };
      @row(odd){
        margin: -5px; 
        background-image: @svg(
          <svg viewBox="0 0 300 300">
            <path
              stroke-width="16"
              fill="none"
              stroke-dasharray="@pd('0,0','20,20')"
              stroke="#fff"
              d="M 20 280 L 280 280 L150 40 Z"
            />
          </svg>
        );
      }
    </css-doodle>
  </div>
  <button class="save-btn" @click="saveToPng">Save to PNG</button>
</template>

<script>
  import 'css-doodle'
  import '/.vuepress/style/index.styl'
  export default{
    methods: {
      saveToPng: function () {
        this.$refs.doodle.export({
          scale: 5,
          download: true,
        });
      },
    }
  }
</script>

<style>
  .box{
    width:100%;
    height:400px;
    overflow: hidden;
  }
  .doodle{
    background: #000;
  }
</style>

```css
    <css-doodle click-to-update class="doodle" ref="doodle">
    @grid: 81 / 100vmax;
      :doodle {
        overflow: hidden;
      }
      :container {
        grid-gap: 5px;
        transform: rotate(30deg) scale(1.5);
      }
      @row(even){
          @shape: triangle;
          background: @pd(#D26A8F,#7CC5CE,#F4967A,#F7E755,#E2322E);
      };
      @row(odd){
        margin: -5px;
        background-image: @svg(
          <svg viewBox="0 0 300 300">
            <path
              stroke-width="16"
              fill="none"
              stroke-dasharray="@pd('0,0','20,20')"
              stroke="#fff"
              d="M 20 280 L 280 280 L150 40 Z"
            />
          </svg>
        );
      }
    </css-doodle>
```
