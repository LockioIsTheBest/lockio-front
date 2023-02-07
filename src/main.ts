import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "../src/router/routes";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronRight);

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");

createApp(App).use(router).mount("#app");
