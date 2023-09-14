import { THEME } from "../../contants/configContants";
import { lcStorage } from "./../../helpers/lcStorage";

const state = {
    themeSelect: lcStorage.get(THEME) || "light",
};

const mutations = {
    toggleTheme(state) {
        const htmlElement = document.querySelector("html");
        htmlElement?.classList.toggle("dark");

        const btnLightEl = document.querySelector(".btnLight");
        btnLightEl?.classList.toggle("hidden");

        const btnNightEl = document.querySelector(".btnNight");
        btnNightEl?.classList.toggle("hidden");

        if (state.themeSelect === "dark") {
            state.themeSelect = "light";
            lcStorage.set(THEME, "light");
        } else {
            state.themeSelect = "dark";
            lcStorage.set(THEME, "dark");
        }
    },
    darkTheme(state) {
        const htmlElement = document.querySelector("html");
        htmlElement?.classList.add("dark");

        const btnLightEl = document.querySelector(".btnLight");
        btnLightEl?.classList.remove("hidden");

        const btnNightEl = document.querySelector(".btnNight");
        btnNightEl?.classList.add("hidden");

        state.themeSelect = "dark";
        lcStorage.set(THEME, "dark");
    },
    lightTheme(state) {
        const htmlElement = document.querySelector("html");
        htmlElement?.classList.remove("dark");

        const btnLightEl = document.querySelector(".btnLight");
        btnLightEl?.classList.add("hidden");

        const btnNightEl = document.querySelector(".btnNight");
        btnNightEl?.classList.remove("hidden");

        state.themeSelect = "light";
        lcStorage.set(THEME, "light");
    },
};

export default {
    namespaced: true,
    state,
    mutations,
};
