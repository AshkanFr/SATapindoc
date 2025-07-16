export const themeData = JSON.parse("{\"encrypt\":{},\"logo\":\"/assets/images/TapinLogo.png\",\"repo\":\"\",\"editLink\":false,\"docsRepo\":\"\",\"docsBranch\":\"main\",\"docsDir\":\"src\",\"navbarAutoHide\":\"always\",\"navbarLayout\":{\"start\":[\"Brand\"],\"end\":[\"Language\",\"Repo\",\"Links\"],\"center\":[\"Search\"]},\"custom\":{\"navbar\":[{\"text\":\"خانه\",\"link\":\"/\"},{\"text\":\" استان‌ها و شهرها\",\"link\":\"/ProvinceAndCitiesList/\"},{\"text\":\"فروشگاه‌ها\",\"link\":\"/Shops/\"},{\"text\":\"تماس با ما\",\"link\":\"/contact/\"}]},\"locales\":{\"/\":{\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page\",\"print\":\"Print\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"routerLocales\":{\"skipToContent\":\"Skip to main content\",\"notFoundTitle\":\"Page not found\",\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\"},\"rtl\":true,\"sidebar\":[{\"text\":\"خانه\",\"link\":\"/\"},{\"text\":\" استان‌ها و شهرها \",\"collapsible\":true,\"children\":[{\"text\":\"گرفتن لیست استان‌ها و شهرها\",\"link\":\"/ProvinceAndCitiesList/#getProvinceAndCitiesList\"},{\"text\":\"گرفتن لیست استان‌ها \",\"link\":\"/ProvinceAndCitiesList/#getProvinceList\"},{\"text\":\"گرفتن لیست شهرها \",\"link\":\"/ProvinceAndCitiesList/#getCitiesList\"}]},{\"text\":\"فروشگاه‌ها\",\"collapsible\":true,\"children\":[{\"text\":\" گرفتن لیست فروشگاه‌ها \",\"link\":\"/Shops/#getShopsList\"},{\"text\":\"ثبت فروشگاه \",\"link\":\"/Shops/#createShop\"},{\"text\":\"جزییات فروشگاه\",\"link\":\"/Shops/#shopDetail\"},{\"text\":\"اعتبار فروشگاه\",\"link\":\"/Shops/#shopCredit\"}]},{\"text\":\"تماس با ما\",\"link\":\"/ContactUs/\"}],\"navbar\":[{\"text\":\"خانه\",\"link\":\"/\"},{\"text\":\" استان‌ها و شهرها\",\"link\":\"/ProvinceAndCitiesList/\"},{\"text\":\"فروشگاه‌ها\",\"link\":\"/Shops/\"},{\"text\":\"تماس با ما\",\"link\":\"/contact/\"}]}}}")

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
