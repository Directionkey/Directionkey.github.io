import '/.vuepress/style/index.styl';
export default ({ Vue, options, router, siteData }) => {
  // Vue.use()
  Vue.mixin({
    mounted() {
      import('css-doodle').then(function(module) {});
    },
  });
};
