export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "This is Yaoshen",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "1. About me",
      "slug": "_1-about-me",
      "children": [
        {
          "level": 3,
          "title": "1.1 Something I like",
          "slug": "_1-1-something-i-like",
          "children": []
        },
        {
          "level": 3,
          "title": "1.2 Something I hate",
          "slug": "_1-2-something-i-hate",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "2. About this website",
      "slug": "_2-about-this-website",
      "children": [
        {
          "level": 3,
          "title": "2.1 What this website for",
          "slug": "_2-1-what-this-website-for",
          "children": []
        },
        {
          "level": 3,
          "title": "2.2 How did I build",
          "slug": "_2-2-how-did-i-build",
          "children": []
        }
      ]
    }
  ],
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
