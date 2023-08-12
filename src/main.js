import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import ElementTiptapPlugin from "element-tiptap-vue3-fixed";
import "element-tiptap-vue3-fixed/lib/style.css";
import App from "./App.vue";

const app = createApp(App);

app.use(ElementPlus);
app.use(ElementTiptapPlugin);
app.mount("#app");
