<script setup>
import Header from "../components/Header/Header.vue";
</script>

<template>
    <div class="py-24">
        <Header />
        <router-view></router-view>
        <!-- <TodoForm @todo-add="handleAdd" /> -->
        <!-- <Todo :data="data" @todo-delete="handleDelete" @todo-check="handleCheck" /> -->
    </div>
</template>

<style scoped></style>
