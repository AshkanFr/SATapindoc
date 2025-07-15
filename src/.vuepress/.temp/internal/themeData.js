export const themeData = JSON.parse("{\"encrypt\":{},\"logo\":\"/assets/images/TapinLogo.png\",\"repo\":\"\",\"editLink\":false,\"docsRepo\":\"\",\"docsBranch\":\"main\",\"docsDir\":\"src\",\"navbarAutoHide\":\"always\",\"navbarLayout\":{\"start\":[\"Brand\"],\"end\":[\"Language\",\"Repo\",\"Links\"],\"center\":[\"Search\"]},\"custom\":{\"navbar\":[{\"text\":\"خانه\",\"link\":\"/\"},{\"text\":\"پرداخت مستقیم\",\"link\":\"/DirectPayment/\"},{\"text\":\"ارتباطات\",\"link\":\"/Connections/\"},{\"text\":\"'لیست استان‌ها به همراه شهرها\",\"link\":\"/ProvinceList/\"},{\"text\":\"تماس با ما\",\"link\":\"/contact/\"}]},\"locales\":{\"/\":{\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page\",\"print\":\"Print\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"routerLocales\":{\"skipToContent\":\"Skip to main content\",\"notFoundTitle\":\"Page not found\",\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\"},\"rtl\":true,\"sidebar\":[{\"text\":\"خانه\",\"link\":\"/\"},{\"text\":\"ارتباطات\",\"link\":\"/Connections/\"},{\"text\":\"پرداخت مستقیم\",\"link\":\"/DirectPayment/\"},{\"text\":\"تماس با ما\",\"link\":\"/ContactUs/\"},{\"text\":\"لیست گرفتن استان ها و شهر ها \",\"link\":\"/ProvinceList/\"}],\"navbar\":[{\"text\":\"خانه\",\"link\":\"/\"},{\"text\":\"پرداخت مستقیم\",\"link\":\"/DirectPayment/\"},{\"text\":\"ارتباطات\",\"link\":\"/Connections/\"},{\"text\":\"'لیست استان‌ها به همراه شهرها\",\"link\":\"/ProvinceList/\"},{\"text\":\"تماس با ما\",\"link\":\"/contact/\"}]}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
