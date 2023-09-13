<script setup>
import TodoItem from "../pages/TodoPage/TodoItem.vue";

defineProps({
    data: Array,
});

const emit = defineEmits(["todo-delete", "todo-check"]);
</script>

<template>
    <div class="h-[500px] divide-y divide-slate-400 dark:divide-slate-700 rounded-lg border border-slate-400 dark:border-slate-700">
        <TodoItem v-for="(todo) in data" :key="todo.id" :todo="todo" :emit="emit" />
    </div>
</template>

<style scoped></style>
