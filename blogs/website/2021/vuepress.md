---
title: Vuepress中遇到的问题总结
date: 2021-09-14
tags:
  - Vuepress
categories:
  - Website
---

问题 1.Vuepress 的热更新失效

解决：在 package.json 添加新的启动命令，然后在.gitignore 添加`...temp`

```js
  "dev": "vuepress dev . --open .temp --host \"localhost\""
```

问题 2.Vuepress 发布 404

解决：在 config.js 中的路径设置，本地跑`/`,发布用`./`

```js
  base: '/',
```

问题 3.添加列表图片

解决：找到 vuepress-reco-theme->components->NoteAbstractItem.vue 覆盖以下代码

但更进一步规范的方法参考[此博客](https://blog.csdn.net/xgangzai/article/details/108271404)

```js
<template>
  <div class="abstract-item" @click="$router.push(item.path)">
    <reco-icon v-if="item.frontmatter.sticky" icon="reco-sticky" />
    <div class="cover">
      <img class="cover-img" :src="item.frontmatter.cover
      || 'https://pic1.xuehuaimg.com/proxy/https://i.imgur.com/TFiMoPK.png'" alt="item.title">
    </div>
    <div class="right">
      <div class="title">
        <reco-icon v-if="item.frontmatter.keys" icon="reco-lock" />
        <router-link :to="item.path">{{item.title}}</router-link>
      </div>
      <div class="abstract" v-html="item.excerpt"></div>
      <PageInfo :pageInfo="item" :currentTag="currentTag">
      </PageInfo>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue-demi";
import { RecoIcon } from "@vuepress-reco/core/lib/components";
import PageInfo from "./PageInfo";
export default defineComponent({
  components: { PageInfo, RecoIcon },
  props: ["item", "currentPage", "currentTag"],
});
</script>

<style lang="stylus" scoped>
.abstract-item
  position relative
  margin 0 auto 20px
  padding 16px 20px
  width 100%
  overflow hidden
  display flex
  border-radius $borderRadius
  box-shadow var(--box-shadow)
  box-sizing border-box
  transition all 0.3s
  background-color var(--background-color)
  cursor pointer
  > *
    pointer-events auto
  .cover
    margin 8px
    flex-shrink 1
    .cover-img
      width 180px
      border-radius 12px
  .reco-sticky
    position absolute
    top 0
    left 0
    display inline-block
    color $accentColor
    font-size 2.4rem
  &:hover
    box-shadow var(--box-shadow-hover)
  .right
    display flex
    flex-direction column
    margin-left 12px
    width 100%
    .title
      position relative
      font-size 1.28rem
      line-height 46px
      display inline-block
      width 80%
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      a
        color var(--text-color)
      .reco-lock
        font-size 1.28rem
        color $accentColor
  .tags
    .tag-item
      &.active
        color $accentColor
      &:hover
        color $accentColor
@media (max-width $MQMobile)
  .tags
    display block
    margin-top 1rem
    margin-left 0 !important
</style>
```

参考文章
[添加目录图片](https://blog.csdn.net/weixin_42429718/article/details/113704200)

[vuepress404](https://blog.csdn.net/zpfz756/article/details/110458257)
