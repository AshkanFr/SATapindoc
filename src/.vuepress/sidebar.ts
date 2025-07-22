import { sidebar } from "vuepress-theme-hope";

export default sidebar([
    { text: "خانه", link: "/" },
    // {
    //     text: "ارتباطات",
    //     link: "/Connections/",
    // },
    // {
    //     text: "پرداخت مستقیم",
    //     link: "/DirectPayment/",
    // },
    {   text: " استان‌ها و شهرها ",
        collapsible: true,
        children: [
            {
                text: "گرفتن لیست استان‌ها و شهرها",
                link: "/ProvinceAndCitiesList/#getProvinceAndCitiesList"
            },
            {
                text: "گرفتن لیست استان‌ها ",
                link: "/ProvinceAndCitiesList/#getProvinceList"
            },
            {
                text: "گرفتن لیست شهرها ",
                link: "/ProvinceAndCitiesList/#getCitiesList"
            },
        ],
        
    },
    
    {   text: "فروشگاه‌ها",
        collapsible: true,
        children: [
            {
                text: " گرفتن لیست فروشگاه‌ها ",
                link: "/Shops/#getShopsList"
            },
            {
                text: "ثبت فروشگاه ", 
                link: "/Shops/#createShop"
            },
            {
                text: "جزییات فروشگاه",
                link: "/Shops/#shopDetail"
            },
        ],
        
    },

    {
  text: "سفارشات",
  collapsible: true,
  children: [
    {
      text: "اطلاعات پایه و ثبت سفارش",
      collapsible: true,
      children: [
        { text: "اطلاعات پایه سفارش", link: "/Orders/CreateOrder/#basicInfo" },
        { text: "ثبت سفارش", link: "/Orders/CreateOrder/#createOrder" },
        { text: "لیست بسته‌های پستی", link: "/Orders/CreateOrder/#packagesList" },
        { text: "کیوسک‌های سفارشات پستی", link: "/Orders/CreateOrder/#kioskList" },
      ]
    },
    {
      text: "جزییات سفارش",
      collapsible: true,
      children: [
        { text: "جزییات سفارشات", link: "/Orders/OrderDetail/#orderDetails" },
        { text: "جزییات سفارشات HTML", link: "/Orders/OrderDetail/#ordeHTMLDetails" },
        { text: "جزییات گروهی سفارشات HTML", link: "/Orders/OrderDetail/#orderGroupHTMLList" },
        { text: "لیست سفارشات", link: "/Orders/OrderDetail/#orderList" }
      ]
    },
    {
      text: " وضعیت سفارشات",
      collapsible: true,
      children: [
        { text: "تغییر وضعیت سفارشات", link: "/Orders/OrderStatus/#changeOrderStatus" },
        { text: "تغییر وضعیت گروهی سفارشات", link: "/Orders/OrderStatus/#changeOrderGroupStatus" },
        { text: "دریافت وضعیت سفارشات بدون فروشگاه", link: "/Orders/OrderStatus/#getOrderWhitoutShop" },
        { text: "آخرین تغییر وضعیت سفارش", link: "/Orders/OrderStatus/#lastChangedStatus" },
        { text: "لیست وضعیت و بارکد گروهی سفارشات", link: "/Orders/OrderStatus/#statusAndBarcodeGroupOrder" },
        { text: "تغییر وضعیت روزانه", link: "/Orders/OrderStatus/#dailyChangeStatus" },
        { text: "تغییر وضعیت در بازه مشخص", link: "/Orders/OrderStatus/#changeStatusRightSpan" }
      ]
    },
    {
      text: "لیبل و بسته پستی",
      collapsible: true,
      children: [
        { text: "لیبل سفارشات", link: "/Orders/#orderList" },
        { text: "لیبل با فیلتر تاریخ", link: "/Orders/#orderList" },
        { text: "محصولات سفارشات HTML", link: "/Orders/#orderList" },
        { text: "بارکدهای سفارشات آماده ارسال HTML", link: "/Orders/#orderList" }
      ]
    },
    {
      text: "راهنمای سفارشات",
      link: "/Orders/OrderGuide/"
    }
  ]
},

    {   text: "محصولات",
        collapsible: true,
        children: [
            {
                text: "ساخت محصول",
                link: "/Products/#createProduct"
            },
            {
                text: "ویرایش محصول ", 
                link: "/Products/#editProduct"
            },
            {
                text: "حذف محصول",
                link: "/Products/#deleteProduct"
            },
            {
                text: "لیست محصولات",
                link: "/Products/#productList"
            },
            {
                text: "لیست دسته‌بندی محصولات",
                link: "/Products/#productCTGList"
            },
            
            
        ],
        
    },
    {   text: "مالی",
        collapsible: true,
        children: [
            {
                text: " درگاه بانکی - افزایش اعتبار ", 
                link: "/Financial/#bankPortal"
            },
            {
                text: "اعتبار فروشگاه",
                link: "/Financial/#shopCredit"
            },
            {
                text: "لیست تراکنش‌های آنلاین ",
                link: "/Financial/#onlineTransactionList"
            },
        ],
        
    },

    {   text: "مشتریان",
        collapsible: true,
        children: [
            {
                text: "لیست مشتریان", 
                link: "/Customer/#bankPortal"
            },
            {
                text: "لیست دسته بندی مشتریان",
                link: "/Customer/#customerCTGList"
            },
            
        ],
        
    },

    {   text: "کارها",
        collapsible: true,
        children: [
            {
                text: "لیست کارها", 
                link: "/Tasks/#taskList"
            },
            {
                text: "جزییات کارها",
                link: "/Tasks/#taskDetail"
            },
            
        ],
        
    },

    {
        text: "کارمندان",
        link: "/Employee/",
    },

    {
        text: "تماس با ما",
        link: "/ContactUs/",
    },
    
]);
