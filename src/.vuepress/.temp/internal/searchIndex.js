export const SEARCH_INDEX = [
  {
    "title": "",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "گرفتن لیست استان‌ها و شهرها",
    "headers": [],
    "path": "/ProvinceAndCitiesList/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "پرداخت مستقیم",
    "headers": [
      {
        "level": 2,
        "title": "پرداخت مستقیم",
        "slug": "پرداخت-مستقیم",
        "link": "#پرداخت-مستقیم",
        "children": []
      },
      {
        "level": 2,
        "title": "ارسال اطلاعات",
        "slug": "ارسال-اطلاعات",
        "link": "#ارسال-اطلاعات",
        "children": []
      },
      {
        "level": 2,
        "title": "دریافت لیست بانک‌ها",
        "slug": "دریافت-لیست-بانک‌ها",
        "link": "#دریافت-لیست-بانک‌ها",
        "children": []
      },
      {
        "level": 2,
        "title": "صفحه بستن قرارداد",
        "slug": "صفحه-بستن-قرارداد",
        "link": "#صفحه-بستن-قرارداد",
        "children": []
      },
      {
        "level": 2,
        "title": "بازگشت به وب‌سایت پذیرنده",
        "slug": "بازگشت-به-وب‌سایت-پذیرنده",
        "link": "#بازگشت-به-وب‌سایت-پذیرنده",
        "children": []
      },
      {
        "level": 2,
        "title": "دریافت Signature",
        "slug": "دریافت-signature",
        "link": "#دریافت-signature",
        "children": []
      },
      {
        "level": 2,
        "title": "انجام تراکنش مستقیم",
        "slug": "انجام-تراکنش-مستقیم",
        "link": "#انجام-تراکنش-مستقیم",
        "children": []
      },
      {
        "level": 2,
        "title": "لغو قرارداد پرداخت مستقیم",
        "slug": "لغو-قرارداد-پرداخت-مستقیم",
        "link": "#لغو-قرارداد-پرداخت-مستقیم",
        "children": []
      }
    ],
    "path": "/DirectPayment/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "ارتباطات",
    "headers": [
      {
        "level": 2,
        "title": "ارتباطات",
        "slug": "ارتباطات",
        "link": "#ارتباطات",
        "children": []
      },
      {
        "level": 2,
        "title": "ارسال اطلاعات",
        "slug": "ارسال-اطلاعات",
        "link": "#ارسال-اطلاعات",
        "children": []
      }
    ],
    "path": "/Connections/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
