import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-tiptap-vue3-fixed/lib/style.css";
import ElementTiptapPlugin from "element-tiptap-vue3-fixed";
import VDContainer from 'vue-flexable-dnd'
import store from "./store/modules";
import "./assets/style.scss";

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(VDContainer)
app.use(ElementPlus);
app.use(store);
app.use(ElementTiptapPlugin);
app.mount("#app");
