import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-2d0ad528","/zh/",{"title":"你好，我是Yaoshen"},["/zh/index.html","/zh/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-2d0a870d","/en/",{"title":"This is Yaoshen"},["/en/index.html","/en/README.md"]],
  ["v-8daa1a0e","/",{"title":"我是Yaoshen"},["/index.html","/README.md"]],
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
