<script setup>


const props = defineProps({
    todo: Object,
    emit: Function,
});
const renderClass = () => {
    if (props.todo.completed) {
        return "line-through";
    }
};
</script>

<template>
    <div class="flex items-center justify-between px-5 py-2">
        <div class="flex items-center gap-2">
            <a-checkbox @change="emit('todo-check', todo)"></a-checkbox>
            <p class="m-0" :class="{ 'line-through': todo.completed }">{{ todo.name }}</p>
        </div>
        <a-button @click="emit('todo-delete', todo)" type="primary" danger>Delete</a-button>
    </div>
</template>

<style scoped></style>
