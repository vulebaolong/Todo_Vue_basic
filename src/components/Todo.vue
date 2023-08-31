<script setup>
import TodoItem from "./TodoItem.vue";

defineProps({
    data: Array,
});

const emit = defineEmits(["todo-delete"]);
</script>

<template>
    <TodoItem v-for="(todo, index) in data" :key="index" :todo="todo" :emit="emit" />
</template>

<style scoped></style>
