import { hasGlobalComponent } from "/Users/ashkan/Desktop/tapindocs/node_modules/vuepress-plugin-components/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "/Users/ashkan/Desktop/tapindocs/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";

import "/Users/ashkan/Desktop/tapindocs/node_modules/vuepress-plugin-components/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
