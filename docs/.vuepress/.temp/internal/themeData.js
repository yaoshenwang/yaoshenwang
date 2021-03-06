export const themeData = {
  "logo": "/images/logo.svg",
  "locales": {
    "/": {
      "selectLanguageText": "选择语言",
      "selectLanguageName": "简体中文"
    },
    "/en/": {
      "selectLanguageName": "English"
    },
    "themePlugins": {
      "git": false,
      "prismjs": true
    }
  },
  "navbar": [
    {
      "text": "首页",
      "link": "/README.md/"
    },
    {
      "text": "知了",
      "link": "/cicada/",
      "children": [
        "/cicada/aboutCicada.md",
        "/cicada/calculus.md"
      ]
    },
    {
      "text": "更新日志",
      "link": "/changeLog/",
      "children": [
        "/changeLog/completed.md",
        "/changeLog/todo.md"
      ]
    }
  ],
  "repo": "https://github.com/yaoshenwang/yaoshenwang",
  "repoLabel": "源码",
  "editLinkText": "在GitHub上编辑此页",
  "lastUpdatedText": "最近修改时间",
  "contributorsText": "贡献者",
  "docsDir": "docs",
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "lastUpdated": true,
  "contributors": true,
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
