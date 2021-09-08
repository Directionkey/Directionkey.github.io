<template>
  <div>
    <css-doodle @click="refresh" ref="doodle">
      {{data}}
    </css-doodle>
  </div>
</template>

<script>
// import "css-doodle";

export default {
  mounted() {
    // import("css-doodle").then((module) => {
    //   console.log(data);
    // });
  },
  props: ["data"],
  methods: {
    rua() {},
  },
};
</script>

<style type="text/css">
</style>