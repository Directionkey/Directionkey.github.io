<template>
  <div>
    <div id="boo"></div>
  </div>
</template>

<script>
// import { VexTab, Artist, Vex } from "vextab";

export default {
  data() {
    return {
      Vex: null,
      VexTab: null,
      Artist: null,
    };
  },
  mounted() {
    import("vextab").then((module) => {
      this.Vex = module.Vex;
      this.VexTab = module.VexTab;
      this.Artist = module.Artist;
      this.rua();
    });
  },
  props: ["data"],
  methods: {
    rua() {
      const Renderer = this.Vex.Flow.Renderer;
      // Create VexFlow Renderer from canvas element with id #boo
      const renderer = new Renderer($("#boo")[0], Renderer.Backends.SVG);
      // Initialize VexTab artist and parser.
      const artist = new this.Artist(10, 10, 600, { scale: 0.8 });
      const tab = new this.VexTab(artist);
      try {
        tab.parse(this.data);
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