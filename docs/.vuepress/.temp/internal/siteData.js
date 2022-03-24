export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "",
  "description": "",
  "head": [],
  "locales": {
    "/": {
      "lang": "en-US",
      "title": "Yaoshen",
      "description": "Yaoshen's blog"
    },
    "/zh/": {
      "lang": "zh-CN",
      "title": "Yaoshen",
      "description": "Yaoshen的博客"
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
