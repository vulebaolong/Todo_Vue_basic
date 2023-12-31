import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage/HomePage.vue";
import RegisterPage from "../pages/RegisterPage/Register.vue";
import LoginPage from "../pages/LoginPage/LoginPage.vue";
import TodoPage from "../pages/TodoPage/TodoPage.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "Home", component: HomePage },
        { path: "/register", name: "Register", component: RegisterPage },
        { path: "/login", name: "Login", component: LoginPage },
        { path: "/todo", name: "Todo", component: TodoPage },
    ],
});
