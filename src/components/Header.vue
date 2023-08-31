<script setup>
import { lcStorage } from "../helpers/lcStorage";
import { THEME } from "../contants/configContants";

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
    <div class="flex items-center gap-5 justify-center">
        <h1 class="text-6xl font-black m-0">Todo</h1>
        <div class="">
            <div @click="toggleTheme" className="btnLight cursor-pointer">
                <v-icon scale="2" name="md-darkmode" />
            </div>
            <div @click="toggleTheme" className="btnNight hidden cursor-pointer">
                <v-icon scale="2" name="md-sunny" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
