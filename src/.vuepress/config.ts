import {defineUserConfig} from "vuepress";

import theme from "./theme.ts";

export default defineUserConfig({
    base: "/",
    locales: {
        "/": {
            lang: "fa-IR",
            title: "تاپین",
            description: "من اورانگوتان نیستم ",
        },
    },
    theme,
});
