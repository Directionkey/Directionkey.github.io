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
    <css-doodle click-to-update class="doodle" ref="test1">
      @grid: 15 / 100vmax;
      :doodle {
        overflow: hidden;
      }
      :container {
        grid-gap: 25px;
        background: #000;
      }
      @nth(4n){
        width: 100%;
        height: 100%;
        transform: rotate(@p(45deg,315deg)) scale(1);
        background-image: @svg(
          <svg viewBox="0 0 120 120"">
              <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="画板" fill="#FFFFFF">
                      <g id="编组">
                          <circle id="椭圆形" cx="3" cy="3" r="3"></circle>
                          <circle id="椭圆形备份-11" cx="3" cy="23" r="3"></circle>
                          <circle id="椭圆形备份-17" cx="3" cy="43" r="3"></circle>
                          <circle id="椭圆形备份-3" cx="43" cy="3" r="3"></circle>
                          <circle id="椭圆形备份-12" cx="43" cy="23" r="3"></circle>
                          <circle id="椭圆形备份-18" cx="43" cy="43" r="3"></circle>
                          <circle id="椭圆形备份-5" cx="83" cy="3" r="3"></circle>
                          <circle id="椭圆形备份-13" cx="83" cy="23" r="3"></circle>
                          <circle id="椭圆形备份-19" cx="83" cy="43" r="3"></circle>
                          <circle id="椭圆形备份" cx="23" cy="3" r="3"></circle>
                          <circle id="椭圆形备份-14" cx="23" cy="23" r="3"></circle>
                          <circle id="椭圆形备份-20" cx="23" cy="43" r="3"></circle>
                          <circle id="椭圆形备份-4" cx="63" cy="3" r="3"></circle>
                          <circle id="椭圆形备份-15" cx="63" cy="23" r="3"></circle>
                          <circle id="椭圆形备份-21" cx="63" cy="43" r="3"></circle>
                          <circle id="椭圆形备份-6" cx="103" cy="3" r="3"></circle>
                          <circle id="椭圆形备份-16" cx="103" cy="23" r="3"></circle>
                          <circle id="椭圆形备份-22" cx="103" cy="43" r="3"></circle>
                          <circle id="椭圆形备份-2" cx="13" cy="13" r="3"></circle>
                          <circle id="椭圆形备份-23" cx="13" cy="33" r="3"></circle>
                          <circle id="椭圆形备份-8" cx="53" cy="13" r="3"></circle>
                          <circle id="椭圆形备份-24" cx="53" cy="33" r="3"></circle>
                          <circle id="椭圆形备份-7" cx="33" cy="13" r="3"></circle>
                          <circle id="椭圆形备份-25" cx="33" cy="33" r="3"></circle>
                          <circle id="椭圆形备份-9" cx="73" cy="13" r="3"></circle>
                          <circle id="椭圆形备份-26" cx="73" cy="33" r="3"></circle>
                          <circle id="椭圆形备份-10" cx="93" cy="13" r="3"></circle>
                          <circle id="椭圆形备份-27" cx="93" cy="33" r="3"></circle>
                      </g>
                  </g>
              </g>
          </svg>
        )
      }
      @nth(4n+1){
        transform: rotate(@p('30deg','330deg'));
        background-image: @svg(
          <svg viewBox="0 0 300 300">
            <path
              stroke-width="8"
              fill="#F7E755"
              stroke-dasharray="@pd('0,0','20,20')"
              stroke="none"
              d="M 20 280 L 280 280 L150 40 Z"
            />
          </svg>
        );
        :after {
          content:'';
          width: 100%;
          height: 100%;
          @place-cell: 50% 80%;
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
      }
      @nth(4n+2){
        width: 100%;
        height: 100%;
        border-radius: 100%;
        border: 6px solid #E2322E;
        :after {
          content:'';
          @place-cell: @r(0,100%) @r(0,100%);
          width: 100%;
          height: 100%;
          border-radius: 100%;
          border: 2px @p(solid,dotted) #fff;
        }
      }
      @nth(4n+3){
        width: 100%;
        height: 10%;
        background-color: #7CC5CE;
        transform: rotate(@p('30deg','330deg')) scale(.5);
        :after {
          content:'';
          @place-cell: 20% 20%;
          width: 100%;
          height: 100%;
          background-color: #7CC5CE;
        }
        :before {
          content:'';
          @place-cell: 85% 1100%;
          width: 100%;
          height: 120%;
          background-color: #7CC5CE;
        }
      }
    </css-doodle>

  </div>
  <button class="save-btn" @click="saveToPng('test1')">Save to PNG</button>
</template>

<template>
  <div class="box">
    <css-doodle click-to-update class="doodle" ref="test2">
      @grid: 81 / 100vmax;
      :doodle {
        overflow: hidden;
      }
      :container {
        grid-gap: 5px;
        background: #000;
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
  <button class="save-btn" @click="saveToPng('test2')">Save to PNG</button>
</template>

<template>
  <div class="box">
    <css-doodle click-to-update class="doodle" ref="test3">
      @grid: 36 / 100vmax;
      :doodle {
        overflow: hidden;
      }
      :container {
        grid-gap: 5px;
        background: #fff;
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
              stroke="#000"
              d="M 20 280 L 280 280 L150 40 Z"
            />
          </svg>
        );
      }
    </css-doodle>
  </div>
  <button class="save-btn" @click="saveToPng('test3')">Save to PNG</button>
</template>

<script>
  export default{
    methods: {
      saveToPng: function (name) {
        this.$refs[name].export({
          scale: 3,
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
  .save-btn{
    margin: 10px auto;
  }
</style>
