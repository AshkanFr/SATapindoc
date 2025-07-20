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

    {   text: "سفارشات",
        collapsible: true,
        children: [
            {
                text: "اطلاعات پایه‌ سفارش",
                link: "/Orders/#basicInfo"
            },
            {
                text: "ثبت سفارش",
                link: "/Orders/#createOrder"
            },
            {
                text: "جزییات سفارش ", 
                link: "/Orders/#orderDetails"
            },
            {
                text: "لیست سفارشات",
                link: "/Orders/#orderList"
            },
            {
                text: "راهنمای سفارشات",
                link: "/OrderGuide/"
            },
            
            
        ],
        
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
                text: " درگاه بانکی - افزایش اعتبار) ", 
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

    {
        text: "تماس با ما",
        link: "/ContactUs/",
    },
    
]);
