import comp from "/Users/ashkan/Desktop/SATapindoc/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"fa-IR\",\"frontmatter\":{\"home\":true,\"heroImage\":\"assets/images/TapinLogo.png\",\"heroText\":\"تاپین\",\"tagline\":\"مستندات رسمی تاپین\",\"actions\":[{\"text\":\"شروع کنید\",\"link\":\"/Connections/\",\"type\":\"primary\"},{\"text\":\"تماس با ما\",\"link\":\"/contact/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"ساده و سریع\",\"details\":\"مستندات کامل و قابل فهم برای توسعه‌دهندگان.\"},{\"title\":\"قابل توسعه\",\"details\":\"براحتی می‌توانید سفارشی‌سازی کنید.\"},{\"title\":\"پشتیبانی کامل\",\"details\":\"همیشه همراه شما هستیم.\"}],\"footer\":\"ما برای وصل کردن آمده‌ایم | کپی‌رایت © ۲۰۲۵\"},\"readingTime\":{\"minutes\":0.15,\"words\":46},\"filePathRelative\":\"README.md\"}")
export { comp, data }

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
