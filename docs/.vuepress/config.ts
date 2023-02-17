import { defineConfig } from 'vuepress/config'

const thisYear = 2023

export default defineConfig({
  base: '/study-record/',
  head: [['link', { rel: 'icon', href: '/imgs/favicon.svg' }]],
  title: '罗缕纪存 📚',
  description: '记录自己的学习规划与过程！',
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/imgs/logo.png',
    sidebar: 'auto',
    repo: 'https://github.com/tanqin/study-record.git',
    repoLabel: 'GitHub',
    smoothScroll: true,
    nav: [
      { text: '首页', link: '/' },
      { text: `为今之计(${thisYear})`, link: `/${thisYear}/` },
      { text: '来日方长', link: '/future/' },
      {
        text: '长年累月',
        ariaLabel: 'over the years',
        items: [
          { text: `${thisYear}`, link: `/${thisYear}/` },
          { text: '2022', link: '/2022/' }
        ]
      }
    ]
  }
})
