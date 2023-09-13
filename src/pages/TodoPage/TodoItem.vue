<script setup>
const props = defineProps({
    todo: Object,
});

const handleCheckBox = () => {
    console.log("handleCheckBox");
};
const handleDelete = () => {
    console.log("handleDelete");
};
</script>

<template>
    <div class="flex items-center justify-between px-5 py-2">
        <div class="flex items-center gap-2">
            <a-checkbox @change="handleCheckBox" :checked="todo.completed"></a-checkbox>
            <p class="m-0" :class="{ 'line-through': todo.completed }">{{ todo.title }}</p>
        </div>
        <a-button @click="handleDelete" type="primary" danger>Delete</a-button>
    </div>
</template>

<style scoped></style>
