module.exports = {
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
          lang: 'zh-CN',
          title: 'Yaoshen',
          description: 'Yaoshen的博客',
        },
        '/en/': {
          lang: 'en-US',
          title: 'Yaoshen',
          description: 'Yaoshen\'s blog',
        },
      },

    //title
    titie: '| Yaoshen',

    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: '/images/logo.jpeg',
      locales: {
        '/': {
          selectLanguageText: '选择语言',
          selectLanguageName: '简体中文',
        },
        '/en/': {
          selectLanguageName: 'English',
        },
      },
      navbar: [
        // NavbarItem
        {
          text: '课件',
          link: '/slides/'
        }
      ],
      repo: 'https://github.com/yaoshenwang/yaoshenwang',
      repoLabel: '源码',
      editLinkText: '在GitHub上编辑此页',
      lastUpdatedText: '最近修改时间',
      contributorsText: '贡献者'
    },
  }