export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "| Yaoshen",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "type": "image/png",
        "sizes": "16x16",
        "href": "/images/icons/favicon-16x16.png"
      }
    ],
    [
      "link",
      {
        "rel": "icon",
        "type": "image/png",
        "sizes": "32x32",
        "href": "/images/icons/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        "rel": "manifest",
        "href": "/site.webmanifest"
      }
    ],
    [
      "meta",
      {
        "name": "application-name",
        "content": "Yaoshen"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-title",
        "content": "Yaoshen"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-status-bar-style",
        "content": "black"
      }
    ],
    [
      "link",
      {
        "rel": "apple-touch-icon",
        "href": "/images/icons/apple-touch-icon.png"
      }
    ]
  ],
  "locales": {
    "/": {
      "lang": "zh-CN",
      "title": "知了",
      "description": "让大脑打怪升级。"
    },
    "/en/": {
      "lang": "en-US",
      "title": "Cicada",
      "description": "When brain become monster hunter."
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
