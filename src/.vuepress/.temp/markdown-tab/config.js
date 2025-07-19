import { Tabs } from "/Users/sarinaslaptop/Desktop/SATapindoc/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/sarinaslaptop/Desktop/SATapindoc/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("Tabs", Tabs);
  },
};
