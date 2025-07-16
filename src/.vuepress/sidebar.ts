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
            {
                text: "اعتبار فروشگاه",
                link: "/Shops/#shopCredit"
            },
        ],
        
    },



    {
        text: "تماس با ما",
        link: "/ContactUs/",
    },
    
]);
