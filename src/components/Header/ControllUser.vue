<script setup>
import { Button } from "ant-design-vue";
import { router } from "../../router/router";

const handleLogin = () => {
    router.push("/login");
};
const handleRegister = () => {
    router.push("/register");
};
</script>

<template>
    <div class="space-x-2">
        <Button @click="handleLogin" type="primary">Đăng nhập</Button>
        <Button @click="handleRegister" type="primary">Đăng ký</Button>
    </div>
</template>

<style scoped></style>
