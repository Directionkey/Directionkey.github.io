<template>
  <div style="width: 200px; height: 200px">
    <div>123</div>
    <css-doodle @click="refresh" ref="doodle">
      @grid: 50x1 / 100%; @place-cell: center; @size: calc(75% / @I * @i);
      transform: rotate(calc(@i * 5deg)); border-radius: 30%; border: 1px solid
      hsla( calc(10 + 4 * @i), 70%, 68%, @r.8 );
    </css-doodle>
  </div>
</template>

<script>
// import "css-doodle";
export default {
  mounted() {
    import("../../node_modules/css-doodle/css-doodle.js").then((module) => {});
  },
  methods: {
    refresh: function () {
      this.$refs.doodle.update();
    },
  },
};
</script>
