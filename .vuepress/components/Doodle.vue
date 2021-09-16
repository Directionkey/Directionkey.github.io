<template>
  <div>
    <div class="example">
      <css-doodle @click="refresh" ref="doodle">
        {{data}}
      </css-doodle>
    </div>
    <div style="text-align:right;margin: 10px 0;">
      <button class="save-btn" @click="saveToPng">Save to PNG</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    refresh: function () {
      this.$refs.doodle.update();
    },
    saveToPng: function () {
      this.$refs.doodle.export({
        scale: 5,
        download: true,
      });
    },
  },
};
</script>

<style>
.example {
  width: 600px;
  margin: 10px auto;
}
</style>