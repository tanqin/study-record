import { defineConfig } from 'vuepress/config'

export default defineConfig({
  base: '/study-record/',
  head: [['link', { rel: 'icon', href: '/imgs/favicon.svg' }]],
  title: '学习记录 📚',
  description: '记录每年的学习计划与进展！',
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/imgs/logo.png',
    sidebar: 'auto',
    repo: 'https://github.com/tanqin/study-record.git',
    repoLabel: 'GitHub',
    smoothScroll: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '2023', link: '/2023/' }
    ]
  }
})
