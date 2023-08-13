import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import ElementTiptapPlugin from "element-tiptap-vue3-fixed";
import "element-tiptap-vue3-fixed/lib/style.css";

import store from "./store/modules";

import { GridLayout, GridItem } from 'grid-layout-plus'
app.component('GridLayout', GridLayout)
app.component('GridItem', GridItem)

app.use(ElementPlus);
app.use(store);
app.use(ElementTiptapPlugin);
app.mount("#app");
