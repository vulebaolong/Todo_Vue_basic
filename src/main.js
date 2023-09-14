import './api/apiConfig';
import { createApp } from "vue";
import "./style.css";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/reset.css";

import { OhVueIcon, addIcons } from "oh-vue-icons";

import { MdDarkmode, MdSunny, RiEditFill, RiCheckboxCircleFill, RiCloseCircleFill } from "oh-vue-icons/icons";

import { router } from "../src/router/router";
import store from "./store/store";

addIcons(MdDarkmode, MdSunny, RiEditFill, RiCheckboxCircleFill, RiCloseCircleFill );

createApp(App).use(Antd).use(router).use(store).component("v-icon", OhVueIcon).mount("#app");
