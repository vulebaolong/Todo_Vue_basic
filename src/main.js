import { createApp } from "vue";
import "./style.css";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/reset.css";

import { OhVueIcon, addIcons } from "oh-vue-icons";

import { MdDarkmode } from "oh-vue-icons/icons";
import { MdSunny } from "oh-vue-icons/icons";
import { router } from "../src/router/router";

addIcons(MdDarkmode, MdSunny);

createApp(App).use(Antd).use(router).component("v-icon", OhVueIcon).mount("#app");
