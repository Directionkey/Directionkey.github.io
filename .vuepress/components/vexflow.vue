<template>
  <div>
    <div id="boo"></div>
    <div class="vextab-auto" width=680 scale=1.0 editor="true" editor-width=680 editor-height=330>
      options space=20
      tabstave notation=true key=A time=4/4

      notes :q =|: (5/2.5/3.7/4) :8 7-5h6/3 ^3^ 5h6-7/5 ^3^ :q 7V/4 |
      notes :8 t12p7/4 s5s3/4 :8 3s:16:5-7/5 :h p5/4
      text :w, |#segno, ,|, :hd, , #tr

      options space=25
    </div>
  </div>
</template>

<script>
import { VexTab, Artist, Vex } from "vextab";

export default {
  mounted() {
    this.rua();
  },
  methods: {
    rua() {
      const data = `
        tabstave notation=true key=A time=4/4

        notes :q =|: (5/2.5/3.7/4) :8 7-5h6/3 ^3^ 5h6-7/5 ^3^ :q 7V/4 |
        notes :8 t12p7/4 s5s3/4 :8 3s:16:5-7/5 :q p5/4
        text :w, |#segno, ,|, :hd, , #tr
      `;

      const Renderer = Vex.Flow.Renderer;

      // Create VexFlow Renderer from canvas element with id #boo
      const renderer = new Renderer($("#boo")[0], Renderer.Backends.SVG);

      // Initialize VexTab artist and parser.
      const artist = new Artist(10, 10, 600, { scale: 0.8 });
      const tab = new VexTab(artist);

      try {
        tab.parse(data);
        artist.render(renderer);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style type="text/css">
</style>