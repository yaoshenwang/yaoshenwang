module.exports = {
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
          lang: 'en-US',
          title: 'Yaoshen',
          description: 'Yaoshen\'s blog',
        },
        '/zh/': {
          lang: 'zh-CN',
          title: 'Yaoshen',
          description: 'Yaoshen的博客',
        },
      },
  
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: 'https://vuejs.org/images/logo.png',
      locales: {
        '/': {
          selectLanguageName: 'English',
        },
        '/zh/': {
          selectLanguageName: '简体中文',
        },
      }
    },
  }