<script setup>
import { onMounted, ref, watch } from "vue";
import { theme } from "ant-design-vue";
import { lcStorage } from "./helpers/lcStorage";
import { THEME } from "./contants/configContants";
import { message } from "ant-design-vue";
import { setMessageApi } from "./helpers/messageHelper";
import { computed } from "vue";
import { useStore } from "vuex";
import BaseLayout from "./layouts/BaseLayout.vue";

const store = useStore();

const [messageApi, contextHolder] = message.useMessage();
setMessageApi(messageApi);

const themeSelectRef = ref();

onMounted(() => {
    const themeLc = lcStorage.get(THEME) || "light";
    if (themeLc === "dark") {
        store.commit("theme/darkTheme");
        themeSelectRef.value = theme.darkAlgorithm;
    }
    if (themeLc === "light") {
        store.commit("theme/lightTheme");
        themeSelectRef.value = undefined;
    }
});

const themeSelect = computed(() => store.state.theme.themeSelect);

watch(themeSelect, (newThemeSelect, oldThemeSelect) => {
    if (themeSelect.value === "dark") themeSelectRef.value = theme.darkAlgorithm;
    if (themeSelect.value === "light") themeSelectRef.value = undefined;
});
</script>

<template>
    <a-config-provider
        :theme="{
            algorithm: themeSelectRef,
        }"
    >
        <context-holder />
        <BaseLayout />
    </a-config-provider>
</template>

<style scoped></style>
