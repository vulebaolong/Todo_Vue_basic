<script setup>
import { useStore } from "vuex";
import ControllUser from "./ControllUser.vue";

const store = useStore();

const toggleTheme = () => {
    store.commit("theme/toggleTheme");
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
                <ControllUser />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
