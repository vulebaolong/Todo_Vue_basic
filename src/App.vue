<script setup>
import { ref } from "vue";

import Header from "./components/Header.vue";
import Todo from "./components/Todo.vue";

const data = ref([
    {
        id: 1,
        name: "Công việc 1",
        completed: false,
    },
    {
        id: 2,
        name: "Công việc 2",
        completed: false,
    },
    {
        id: 3,
        name: "Công việc 3",
        completed: false,
    },
]);


const handleDelete = (todo) => {
    console.log("Todo clicked:", todo);
    data.value = data.value.filter((item) => {
        return item.id !== todo.id;
    });
};
</script>

<template>
    <div class="container">
        <Header />
        <Todo :data="data" @todo-delete="handleDelete" />
    </div>
</template>

<style scoped></style>
