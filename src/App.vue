<script setup>
import { ref } from "vue";

import Header from "./components/Header/Header.vue";
import Todo from "./components/Todo.vue";
import TodoForm from "./components/TodoForm.vue";
import { theme } from "ant-design-vue";
import { lcStorage } from "./helpers/lcStorage";
import { THEME } from "./contants/configContants";

const data = ref([
    {
        id: "1",
        name: "Công việc 1",
        completed: false,
    },
    {
        id: "2",
        name: "Công việc 2",
        completed: false,
    },
    {
        id: "3",
        name: "Công việc 3",
        completed: false,
    },
]);

const handleDelete = (todo) => {
    data.value = data.value.filter((item) => {
        return item.id !== todo.id;
    });
};

const handleCheck = (todo) => {
    data.value = data.value.map((item) => {
        if (item.id === todo.id) {
            item.completed = !item.completed;
        }
        return item;
    });
};

const handleAdd = (todo) => {
    data.value.push(todo);
};

const themeLc = lcStorage.get(THEME);

if (themeLc === "dark") {
    const htmlElement = document.querySelector("html");
    htmlElement?.classList.toggle("dark");
}

const themeSelect = ref(themeLc === "dark" ? theme.darkAlgorithm : undefined);

const handleToggleTheme = (flag) => {
    console.log(flag);
    if (flag === "dark") {
        themeSelect.value = theme.darkAlgorithm;
    } else {
        themeSelect.value = undefined;
    }
};
</script>

<template>
    <a-config-provider
        :theme="{
            algorithm: themeSelect,
        }"
    >
        <div class="py-24 space-y-10">
            <Header @todo-toggleTheme="handleToggleTheme" />
            <router-view></router-view>
            <!-- <TodoForm @todo-add="handleAdd" /> -->
            <!-- <Todo :data="data" @todo-delete="handleDelete" @todo-check="handleCheck" /> -->
        </div>
    </a-config-provider>
</template>

<style scoped></style>
