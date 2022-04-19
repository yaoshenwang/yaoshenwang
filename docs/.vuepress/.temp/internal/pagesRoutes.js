import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-94fb19ea","/coding/blog.html",{"title":"博客部署"},["/coding/blog","/coding/blog.md"]],
  ["v-2d0a870d","/en/",{"title":"This is Yaoshen"},["/en/index.html","/en/README.md"]],
  ["v-2897d318","/slides/",{"title":"待更新"},["/slides/index.html","/slides/README.md"]],
  ["v-0995ed03","/todo/todo.html",{"title":"ToDoList 🕰️"},["/todo/todo","/todo/todo.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-14bbabff","/coding/vue.html",{"title":"Vue"},["/coding/vue","/coding/vue.md"]],
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
