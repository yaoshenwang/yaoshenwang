export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "首页",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "title": "首页",
    "heroImage": "/images/logo.png",
    "actions": [
      {
        "text": "关于本站",
        "link": "/aboutMe/aboutMe.md",
        "type": "primary"
      },
      {
        "text": "更新日志",
        "link": "/changeLog/completed.md",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "编程",
        "details": "想收藏的技术贴太多了，不如就放这里囤着吧。"
      },
      {
        "title": "教育",
        "details": "如果你和我一样讨厌学校，那么你来对地方了。"
      },
      {
        "title": "文稿",
        "details": "万一哪天就写出来几篇文章、做出来几个视频呢。"
      },
      {
        "title": "源码",
        "details": "应该很难给你提供任何参考，放出来只是希望大家帮忙修点bug。"
      },
      {
        "title": "课件",
        "details": "我已经想到了一个绝妙的学习方法，但是这里太窄了，我写不下。"
      },
      {
        "title": "更多",
        "details": "你也想让世界热闹起来吗？那咱们刚好顺路呀。"
      }
    ],
    "footerHtml": true,
    "footer": "MIT Licensed <br> 备案号：京ICP备 2022011015号 <br> Copyright © 2022-present Yaoshen"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1650464296000,
    "contributors": [
      {
        "name": "Yaoshen",
        "email": "wang-ys16@foxmail.com",
        "commits": 7
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
