export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/ashkan/Desktop/SATapindoc/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/Connections/", { loader: () => import(/* webpackChunkName: "Connections_index.html" */"/Users/ashkan/Desktop/SATapindoc/src/.vuepress/.temp/pages/Connections/index.html.js"), meta: {"title":"ارتباطات"} }],
  ["/DirectPayment/", { loader: () => import(/* webpackChunkName: "DirectPayment_index.html" */"/Users/ashkan/Desktop/SATapindoc/src/.vuepress/.temp/pages/DirectPayment/index.html.js"), meta: {"title":"پرداخت مستقیم"} }],
  ["/ProvinceAndCitiesList/", { loader: () => import(/* webpackChunkName: "ProvinceAndCitiesList_index.html" */"/Users/ashkan/Desktop/SATapindoc/src/.vuepress/.temp/pages/ProvinceAndCitiesList/index.html.js"), meta: {"title":"گرفتن لیست استان‌ها و شهرها"} }],
  ["/Shops/", { loader: () => import(/* webpackChunkName: "Shops_index.html" */"/Users/ashkan/Desktop/SATapindoc/src/.vuepress/.temp/pages/Shops/index.html.js"), meta: {"title":"گرفتن لیست فروشگاه‌ها"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/ashkan/Desktop/SATapindoc/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
