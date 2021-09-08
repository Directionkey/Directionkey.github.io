module.exports = {
  title: 'X2的博客',
  description: '欢迎来听听看看',
  dest: 'public',
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
    ['link', { rel: 'icon', href: '/icon/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#FF66CC' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'http-equiv', content: 'content-Security-Policy' },
      {
        name: 'content',
        content:
          "'default-src 'self'; style-src 'unsafe-inline'; img-src data:; connect-src 'self';font-src data:",
      },
    ],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    [
      'script',
      {
        language: 'javascript',
        type: 'text/javascript',
        src: 'https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js',
      },
    ],
    // 引入鼠标点击脚本
    [
      'script',
      {
        language: 'javascript',
        type: 'text/javascript',
        src: '/js/MouseClickEffect.js',
      },
    ],
  ],
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新',
        },
      },
    ],
    [
      'meting',
      // {
      //   meting: {
      //     auto: 'http://music.163.com/#/song?id=31452039',
      //   },
      //   aplayer: {
      //     fixed: false,
      //     autoplay: true,
      //     mini: false,
      //   },
      // },
    ],
  ],
  base: './', //本地跑,发布用./
  theme: 'reco',
  themeConfig: {
    mode: 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示
    frontMatter: {
      navbar: false,
    },
    codeTheme: 'okaidia', //代码主题
    nav: [
      {
        text: '首页',
        link: '/',
        icon: 'reco-home',
      },
      {
        text: '时间线',
        link: '/timeline/',
        icon: 'reco-date',
      },
      {
        text: '联系',
        icon: 'reco-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/recoluan',
            icon: 'reco-github',
          },
        ],
      },
    ],
    subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    sidebar: {
      '/docs/theme-reco/': [],
    },
    type: 'blog',
    blogConfig: {
      category: {
        location: 2, //位置排序从左到右权重
        text: '分类',
      },
      tag: {
        location: 3,
        text: '标签',
      },
    },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com',
      },
    ],
    logo: '/icon/me.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    author: 'X2',
    authorAvatar: '/icon/me.png',
    record: 'X2',
    startYear: '2021',
  },
  markdown: {
    lineNumbers: true,
  },
};
