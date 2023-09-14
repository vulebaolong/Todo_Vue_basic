<script setup>
import { Button } from "ant-design-vue";
import { router } from "../../router/router";
import { useStore } from "vuex";
import { computed } from "vue";
import { lcStorage } from "../../helpers/lcStorage";
import { TOKEN, USER_LOGIN } from "../../contants/configContants";

const store = useStore(); // Lấy store từ Vuex

const userLogin = computed(() => store.state.user.userLogin);

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

    store.commit("user/resetUser");

    // setTimeout(() => {
    //     // Làm mới trang
    //     location.reload();
    // }, 1);
};
</script>

<template>
    <div class="space-x-2" v-if="!userLogin.name">
        <Button @click="handleLogin" type="primary">Đăng nhập</Button>
        <Button @click="handleRegister" type="primary">Đăng ký</Button>
    </div>
    <div v-if="userLogin.name" class="flex items-center gap-2">
        <p class="m-0">{{ userLogin.name }}</p>
        <Button @click="handleLogout" type="primary">Đăng xuất</Button>
    </div>
</template>

<style scoped></style>
