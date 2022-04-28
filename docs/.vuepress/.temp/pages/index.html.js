export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Cicada 知了",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Slogan 标语",
      "slug": "slogan-标语",
      "children": []
    },
    {
      "level": 2,
      "title": "What is Cicada? 知了是什么？",
      "slug": "what-is-cicada-知了是什么",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1651138964000,
    "contributors": [
      {
        "name": "Yaoshen",
        "email": "wang-ys16@foxmail.com",
        "commits": 8
      }
    ]
  },
  "filePathRelative": "README.md"
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
