<script setup>
import { computed, reactive } from "vue";
import axios from "axios";
import { success, error } from "../../helpers/messageHelper";
import { router } from "../../router/router";
import { lcStorage } from "../../helpers/lcStorage";
import { TOKEN, USER_LOGIN } from "../../contants/configContants";
import { useStore } from "vuex";
const store = useStore();

const formState = reactive({
    email: computed(() => store.state.user.autoFill.email),
    password: computed(() => store.state.user.autoFill.password),
});

const onFinish = async (values) => {
    try {
        console.log("Success:", values);

        const { data, status } = await axios.post("http://localhost:3001/auth/login", values);

        console.log({ data, status });

        success("Đăng nhập thành công");

        lcStorage.set(USER_LOGIN, data);

        lcStorage.set(TOKEN, data.token);

        store.commit("user/setUserLogin", data);

        router.push("/todo");
    } catch (err) {
        console.log(err);
        error("Đăng nhập thành công");
    }
};
const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};
</script>

<template>
    <div class="container">
        <div class="max-w-xl mx-auto">
            <h1 class="text-5xl font-black">Đăng nhập</h1>

            <a-form :model="formState" layout="vertical" name="basic" @finish="onFinish" @finishFailed="onFinishFailed">
                <a-form-item label="Email" name="email" :rules="[{ required: true, message: 'Please input your email!' }]">
                    <a-input v-model:value="formState.email" />
                </a-form-item>

                <a-form-item label="Mật khẩu" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
                    <a-input-password v-model:value="formState.password" />
                </a-form-item>

                <a-form-item>
                    <a-button type="primary" html-type="submit">Đăng nhập</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<style scoped></style>
