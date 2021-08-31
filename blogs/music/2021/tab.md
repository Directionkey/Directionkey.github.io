---
title: tab
date: 2021-08-30
tags:
  - JS
categories:
  - music
---

<ClientOnly>
<vexflow :data="`
        tabstave notation=true key=A time=4/4
        notes :q =|: (5/2.5/3.7/4) :8 7-5h6/3 ^3^ 5h6-7/5 ^3^ :q 7V/4 |
        notes :8 t12p7/4 s5s3/4 :8 3s:16:5-7/5 :q p5/4
        text :w, |#segno, ,|, :hd, , #tr
      `" />
</ClientOnly>
