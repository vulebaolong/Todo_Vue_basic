<script setup>
import { lcStorage } from "../../helpers/lcStorage";
import { THEME } from "../../contants/configContants";
import ControllUser from "./ControllUser.vue";

const emit = defineEmits(["todo-toggleTheme"]);
const toggleTheme = () => {
    const htmlElement = document.querySelector("html");
    htmlElement?.classList.toggle("dark");

    const btnLightEl = document.querySelector(".btnLight");
    btnLightEl?.classList.toggle("hidden");

    const btnNightEl = document.querySelector(".btnNight");
    btnNightEl?.classList.toggle("hidden");

    if (htmlElement?.classList.value === "dark") {
        lcStorage.set(THEME, "dark");
    } else {
        lcStorage.set(THEME, "light");
    }

    emit("todo-toggleTheme", htmlElement?.classList.value);
};
</script>

<template>
    <div class="flex items-center justify-between gap-5 px-10">
        <h1 class="m-0 text-6xl font-black">Todo</h1>
        <div class="flex items-center gap-5">
            <!-- TOOGLE THEME -->
            <div>
                <div @click="toggleTheme" className="btnLight cursor-pointer">
                    <v-icon scale="2" name="md-darkmode" />
                </div>
                <div @click="toggleTheme" className="btnNight hidden cursor-pointer">
                    <v-icon scale="2" name="md-sunny" />
                </div>
            </div>

            <!-- CONTROL USER -->
            <div>
                <ControllUser/>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
