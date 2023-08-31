<script setup>
import { ref } from "vue";

const checked = ref(false);

const props = defineProps({
    todo: Object,
    emit: Function,
});

// const handleDelete = () => {
//     emit("todo-delete", props.todo);
// };
</script>

<template>
    <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
            <a-checkbox v-model:checked="checked"></a-checkbox>
            <p class="m-0">{{ todo.name }}</p>
        </div>
        <a-button @click="emit('todo-delete', todo)" type="primary" danger>Delete todo</a-button>
    </div>
</template>

<style scoped></style>
