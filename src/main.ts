import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import { Tab, Tabs } from 'vant';
import { Icon } from "@iconify/vue";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Tab);
app.use(Tabs);
app.component("Icon", Icon).mount("#app");
