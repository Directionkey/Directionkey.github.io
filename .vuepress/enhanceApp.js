import '/.vuepress/style/index.styl'
export default ({ Vue, options, router, siteData }) => {
  Vue.mixin({
    mounted() {
      // let cssDoodle = require('css-doodle')
      // Vue.use(cssDoodle)
      import('css-doodle').then(function (module) {
        Vue.use(module.default)
      })
    },
  })
}
