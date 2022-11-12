export default {
  title: 'EasyWeblog',
  description: '帮助更广泛的人搭建更好的静态博客。', 
  lang: 'zh-CN',
  themeConfig: {
    siteTitle: 'EasyWeblog',
    nav: [
      { text: 'Hexo', link: '/hexo/' },
      { text: 'Vuepress', link: '/configs' },
      { text: 'Gridea', link: 'https://github.com/...' },
      { text: 'Other',
        items: [
          { text: 'MX-Space', link: '/item-1' },
          { text: 'Ghost', link: '/item-2' },
          { text: 'Valaxy', link: '/item-3' },
        ]
      }
    ],
    sidebar: [
      {
        text: '入门',
        items: [
          { text: 'NodeJS安装', link: '/getting-started/' },
          { text: 'Git安装', link: '/getting-started/git.html' },
        ]
      },
      {
        text: 'Hexo搭建',
        items: [
          { text: '配置环境', link: '/hexo/' },
          { text: '配置主题', link: '/hexo/theme/' },
        ]
      }
    ]
  },

}
