---
title: vexflow
date: 2021-08-30
tags:
  - JS
categories:
  - music
---

[插件参考，最终敲定 vexflow](https://www.jianshu.com/p/a4ad9337decb)

吉他社用的是 alphaTab.js

vexflow\vextab

<div id="easy_score"></div>
<div id="native_api"></div>

<script>
import Vex from 'vexflow';
export default {
  mounted(){
    this.drawTabByEasyScore();
    this.drawTabByNativeApi();
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
    drawTabByNativeApi(){      
      const VF = Vex.Flow;

      // Create an SVG renderer and attach it to the DIV element named "vf".
      const div = document.getElementById("native_api")
      const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

      // Configure the rendering context.
      renderer.resize(500, 500);
      const context = renderer.getContext();
      context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

      // Create a stave of width 400 at position 10, 40 on the canvas.
      const stave = new VF.Stave(10, 40, 400);

      // Add a clef and time signature.
      stave.addClef("treble").addTimeSignature("4/4");

      // Connect it to the rendering context and draw!
      stave.setContext(context).draw();
    }
  }
}
</script>
