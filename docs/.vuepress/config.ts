import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<DefaultThemeOptions>({
    base: '/',

    head: [
      [
        'link',
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: `/images/icons/favicon-16x16.png`,
        },
      ],
      [
        'link',
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: `/images/icons/favicon-32x32.png`,
        },
      ],
      ['link', { rel: 'manifest', href: '/site.webmanifest' }],
      ['meta', { name: 'application-name', content: 'Yaoshen' }],
      ['meta', { name: 'apple-mobile-web-app-title', content: 'Yaoshen' }],
      [
        'meta',
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      ],
      [
        'link',
        { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` },
      ]
    ],

    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
          lang: 'zh-CN',
          title: 'Yaoshen',
          description: '让世界热闹起来',
        },
        '/en/': {
          lang: 'en-US',
          title: 'Yaoshen',
          description: 'For A Livelier World',
        },
        
      },
    
    bundler:
      // specify bundler via environment variable
      process.env.DOCS_BUNDLER ??
      // use vite by default
      '@vuepress/vite',
      
    //title
    title: '| Yaoshen',

    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: '/images/logo.png',
      locales: {
        '/': {
          selectLanguageText: '选择语言',
          selectLanguageName: '简体中文',
        },
        '/en/': {
          selectLanguageName: 'English',
        },
        themePlugins: {
          // only enable git plugin in production mode
          git: isProd,
          // use shiki plugin in production mode instead
          prismjs: !isProd,
        },
      },
      navbar: [
        // NavbarItem
        {
          text: '首页',
          link: '/README.md/'
        },
        {
          text: '课件',
          link: '/slides/'
        },
        {
          text: '编程',
          link: '/coding/',
          children: ['/coding/blog.md', '/coding/vue.md','/coding/navigation.md']
        },
        {
          text: '更新日志',
          link: '/changeLog/',
          children: ['/changeLog/completed.md','/changeLog/todo.md']
        }
      ],
      repo: 'https://github.com/yaoshenwang/yaoshenwang',
      repoLabel: '源码',
      editLinkText: '在GitHub上编辑此页',
      lastUpdatedText: '最近修改时间',
      contributorsText: '贡献者',
      docsDir: 'docs',
      
    },

    
  
    
  })