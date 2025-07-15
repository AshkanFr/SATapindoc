import { Tabs } from "/Users/ashkan/Desktop/tapindocs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/ashkan/Desktop/tapindocs/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("Tabs", Tabs);
  },
};
