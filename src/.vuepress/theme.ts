import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.ts";
import sidebar from "./sidebar.ts";


export default hopeTheme({
    favicon: 'TapinLogo',
    hostname: "https://example.com",
    logo: "/assets/images/TapinLogo.png",
    rtl: true,
    
    repo: "",
    editLink: false,
    docsRepo: "",
    docsBranch: "main",
    docsDir: "src",

    sidebar: sidebar,
    sidebarSorter: 'title',

    navbar:navbar,
    navbarAutoHide: "always",
    navbarLayout: {          //چینش آیتم‌های نوار بالا رو مشخص می‌کنه. تو سه بخش تقسیمش می‌کنه:
        start: ["Brand"],
        end: ["Language","Repo", "Links"],
        center: ["Search"]
    },
    markdown: {              //می‌گه از قابلیت تب‌بندی داخل فایل‌های markdown پشتیبانی کن.
        tabs: true
    },
    custom: {
        navbar: navbar
    },
    plugins: {
        search: true,
    },
});
