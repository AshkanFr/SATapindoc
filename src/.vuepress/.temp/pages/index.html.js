import comp from "/Users/ashkan/Desktop/SATapindoc/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"fa-IR\",\"frontmatter\":{\"home\":true,\"heroImage\":\"assets/images/TapinLogo.png\",\"heroText\":\"تاپین\",\"tagline\":\"مستندات رسمی تاپین\",\"actions\":[{\"text\":\"شروع کنید\",\"link\":\"/Connections/\",\"type\":\"primary\"},{\"text\":\"تماس با ما\",\"link\":\"/contact/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"سریع و خشن\",\"details\":\"نمیدونم چرا اینو نوشتم\"},{\"title\":\"ساده و سریع\",\"details\":\"مستندات کامل و قابل فهم برای توسعه‌دهندگان.\"},{\"title\":\"قابل توسعه\",\"details\":\"براحتی می‌توانید سفارشی‌سازی کنید.\"},{\"title\":\"پشتیبانی کامل\",\"details\":\"همیشه همراه شما هستیم.\"}],\"footer\":\"ما برای وصل کردن آمده‌ایم | کپی‌رایت © ۲۰۲۵\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://example.com/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"تاپین\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"fa-IR\"}]]},\"readingTime\":{\"minutes\":0.1,\"words\":30},\"filePathRelative\":\"README.md\"}")
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
