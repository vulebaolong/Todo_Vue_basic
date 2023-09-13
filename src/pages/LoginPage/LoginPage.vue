<script setup>
import { reactive } from "vue";
import axios from 'axios'
const formState = reactive({
    username: "",
    password: "",
    remember: true,
});
const onFinish = async (values) => {
    console.log("Success:", values);
    const result = await axios.post('http://localhost:3001/auth/login', values)
    console.log(result);
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

                <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                    <a-button type="primary" html-type="submit">Submit</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<style scoped></style>
