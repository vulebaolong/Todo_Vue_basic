<script setup>
import { reactive } from "vue";
import axios from "axios";
import { error, success } from "../../helpers/messageHelper";
import { router } from "../../router/router";
import { useStore } from "vuex";
const store = useStore();

const formState = reactive({
    name: "",
    email: "",
    password: "",
});

const onFinish = async (values) => {
    try {
        console.log("Success:", values);

        const { data, status } = await axios.post("http://localhost:3001/auth/register", values);

        console.log({ data, status });

        success("Đăng ký thành công");

        store.commit("user/setAutoFill", values);

        router.push("/login");
    } catch (err) {
        console.log(err);
        error("Đăng ký không thành công");
    }
};

const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};
</script>

<template>
    <div class="container">
        <div class="max-w-xl mx-auto">
            <h1 class="text-5xl font-black">Đăng ký</h1>

            <a-form :model="formState" layout="vertical" name="basic" @finish="onFinish" @finishFailed="onFinishFailed">
                <a-form-item label="Tên" name="name" :rules="[{ required: true, message: 'Please input your name!' }]">
                    <a-input v-model:value="formState.name" />
                </a-form-item>

                <a-form-item label="Email" name="email" :rules="[{ required: true, message: 'Please input your email!' }]">
                    <a-input v-model:value="formState.email" />
                </a-form-item>

                <a-form-item label="Mật khẩu" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
                    <a-input-password v-model:value="formState.password" />
                </a-form-item>

                <a-form-item>
                    <a-button type="primary" html-type="submit">Đăng ký</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<style scoped></style>
