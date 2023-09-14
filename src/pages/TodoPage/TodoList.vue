<script setup>
import TodoItem from "./TodoItem.vue";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const data = computed(() => store.state.todo.listTodo);

onMounted(async () => {
    store.dispatch("todo/getTodo");
});
</script>

<template>
    <div class="h-[500px] overflow-y-auto divide-y divide-slate-400 dark:divide-slate-700 rounded-lg border border-slate-400 dark:border-slate-700">
        <TodoItem v-for="todo in data" :key="todo._id" :todo="todo" />
    </div>
</template>

<style scoped></style>
