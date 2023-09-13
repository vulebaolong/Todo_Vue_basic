<script setup>
import { Button } from "ant-design-vue";
import { router } from "../../router/router";
import { useStore } from "vuex";
import { computed } from "vue";
import { lcStorage } from "../../helpers/lcStorage";
import { TOKEN, USER_LOGIN } from "../../contants/configContants";

const store = useStore(); // Lấy store từ Vuex

const name = computed(() => store.state.user.userLogin.name);

const handleLogin = () => {
    router.push("/login");
};
const handleRegister = () => {
    router.push("/register");
};
const handleLogout = () => {
    // Xoá localStorage
    lcStorage.remove(USER_LOGIN);
    lcStorage.remove(TOKEN);

    // Chuyển hướng về trang '/'
    router.push("/");

    // Làm mới trang
    location.reload();
};
</script>

<template>
    <div class="space-x-2" v-if="!name">
        <Button @click="handleLogin" type="primary">Đăng nhập</Button>
        <Button @click="handleRegister" type="primary">Đăng ký</Button>
    </div>
    <div v-if="name">
        <p class="m-0">{{ name }}</p>
        <Button @click="handleLogout" type="primary">Đăng xuất</Button>
    </div>
</template>

<style scoped></style>
