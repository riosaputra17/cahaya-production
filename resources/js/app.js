import "./bootstrap";
import "../css/app.css"; // Import Tailwind CSS

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");
