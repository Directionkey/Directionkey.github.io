---
title: vextab chord
date: 2021-10-05
tags:
  - Harmonica
categories:
  - Music
---

1.  `chord 和弦品格，先弦后品，x代表不弹` `position 六线谱起始把位` `barres 横按 [fromString 起始弦 toString 终至弦 fret 横按品格]`
2.  `width 宽度` `height 高度` `defaultColor 线条颜色` `strokeColor 所按品格颜色，没有默认 defaultColor` `bridgeColor 横按颜色` `textColor:文字颜色`

<div id="vexchords"></div>

<script>
import * as vexchords from 'vexchords';
export default {
  mounted(){
    console.log(vexchords)
    const sel = '#vexchords';


      // Draw an open D7
      vexchords.draw(sel, {
        chord: [[1, 2], [2, 1], [3, 2], [4, 0], [5, 'x'], [6, 'x']]
      });

      // Customize size and default color
      vexchords.draw(
        sel,
        {
          chord: [[1, 2], [2, 1], [3, 2], [4, 0], [5, 'x'], [6, 'x']]
        },
        { width: 200, height: 240, defaultColor: '#745', strokeColor: '#8a8' },
      );

      // Set color of circles and bars only
      vexchords.draw(
        sel,
        {
          chord: [[2, 3], [3, 3], [4, 3], [6, 'x']],
          position: 5,
          barres: [{ fromString: 5, toString: 1, fret: 1 }]
        },
        { strokeColor: '#8a8' }
      );

      // Set colors of bridge and text only
      vexchords.draw(
        sel,
        {
          chord: [[1, 0], [2, 0], [6, 0]],
          position: 0,
          barres: [{ fromString: 5, toString: 3, fret: 2 }]
        },
        { bridgeColor: '#8a8', textColor: '#8a8' }
      );

      // Tiny chords, don't show tuning keys
      vexchords.draw(
        sel,
        {
          chord: [],
          position: 1,
          barres: [
            { fromString: 6, toString: 1, fret: 1 },
            { fromString: 5, toString: 3, fret: 3 }
          ]
        },
        {
          width: 30,
          height: 40,
          strokeColor: '#745',
          showTuning: false
        }
      );
  }
}
</script>
