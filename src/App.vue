<script setup>
import { ref } from "vue";
import { theme } from "ant-design-vue";
import { lcStorage } from "./helpers/lcStorage";
import { THEME } from "./contants/configContants";
import MainLayout from "./layouts/mainLayout.vue";

const themeLc = lcStorage.get(THEME);

if (themeLc === "dark") {
    const htmlElement = document.querySelector("html");
    htmlElement?.classList.toggle("dark");
}

const themeSelect = ref(themeLc === "dark" ? theme.darkAlgorithm : undefined);

import { message } from "ant-design-vue";
import { setMessageApi } from "./helpers/messageHelper";
const [messageApi, contextHolder] = message.useMessage();
setMessageApi(messageApi);
</script>

<template>
    <a-config-provider
        :theme="{
            algorithm: themeSelect,
        }"
    >
        <context-holder />
        <MainLayout />
    </a-config-provider>
</template>

<style scoped></style>
