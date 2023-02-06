import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./js/store";
import AosVue from "aos-vue";

import "./assets/style.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(AosVue);
app.mount("#root");
