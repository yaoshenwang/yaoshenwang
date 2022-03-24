export const data = {
  "key": "v-2d0ad528",
  "path": "/zh/",
  "title": "你好，我是Yaoshen",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1648107862000,
    "contributors": [
      {
        "name": "Yaoshen",
        "email": "wang-ys16@foxmail.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "zh/README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
