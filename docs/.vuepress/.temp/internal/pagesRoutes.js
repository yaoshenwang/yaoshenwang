import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-586fde37","/aboutMe/aboutMe.html",{"title":"关于本站"},["/aboutMe/aboutMe","/aboutMe/aboutMe.md"]],
  ["v-94fb19ea","/coding/blog.html",{"title":"博客部署"},["/coding/blog","/coding/blog.md"]],
  ["v-0bc490d9","/coding/navigation.html",{"title":"网址导航 🌍"},["/coding/navigation","/coding/navigation.md"]],
  ["v-14bbabff","/coding/vue.html",{"title":"Vue"},["/coding/vue","/coding/vue.md"]],
  ["v-2d0a870d","/en/",{"title":"This is Yaoshen"},["/en/index.html","/en/README.md"]],
  ["v-4e4fe93c","/changeLog/completed.html",{"title":"更新日志 😎"},["/changeLog/completed","/changeLog/completed.md"]],
  ["v-6a79bc42","/changeLog/todo.html",{"title":"未来更新计划 👀"},["/changeLog/todo","/changeLog/todo.md"]],
  ["v-2897d318","/slides/",{"title":"待更新"},["/slides/index.html","/slides/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
