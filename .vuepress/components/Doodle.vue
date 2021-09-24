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
import Axios from "axios";
export default {
  props: ["data"],
  mounted() {
    Axios.get(
      "https://www.songsterr.com/api/songs?size=50&pattern=coldplay"
    ).then((res) => {
      console.log(res);
    });
  },
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
  width: 100%;
  margin: 10px auto;
}
.btn {
  width: 120px;
  height: 30px;
  color: #fff;
  border: 1px solid #eee;
  border-radius: 15px;
  background: linear-gradient(to left, #1579b7, #07baca);
  transform: scale(1, 1);
  transition: all 0.2s ease;
}
.btn:active {
  transform: scale(1.1, 0.9);
}
</style>