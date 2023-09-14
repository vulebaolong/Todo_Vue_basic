<script setup>
import { computed, reactive, ref, watch } from "vue";
import axios from "axios";
import { success, error } from "../../helpers/messageHelper";
import { router } from "../../router/router";
import { lcStorage } from "../../helpers/lcStorage";
import { TOKEN, USER_LOGIN } from "../../contants/configContants";
import { useStore } from "vuex";
const store = useStore();

const emailFill = store.state.user.autoFill.email;
const passwordFill = store.state.user.autoFill.password;

const formState = reactive({
    email: emailFill || "",
    password: passwordFill || "",
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

const handleFillUser = () => {
    formState.email = "long@gmail.com";
    formState.password = "123456";
};
</script>

<template>
    <div class="container pt-20">
        <div class="max-w-xl mx-auto">
            <h1 class="text-5xl font-black">Đăng nhập</h1>

            <a-form :model="formState" layout="vertical" name="basic" @finish="onFinish" @finishFailed="onFinishFailed">
                <!-- EMAIL -->
                <a-form-item label="Email" name="email" :rules="[{ required: true, message: 'Please input your email!' }]">
                    <a-input autocomplete="email" v-model:value="formState.email" />
                </a-form-item>

                <!-- PASSWORD -->
                <a-form-item label="Mật khẩu" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
                    <a-input-password autocomplete="current-password" v-model:value="formState.password" />
                </a-form-item>

                <!-- BUTTON -->
                <div class="flex items-center gap-2">
                    <a-form-item>
                        <a-button type="primary" html-type="submit">Đăng nhập</a-button>
                    </a-form-item>
                    <a-form-item>
                        <a-button @click="handleFillUser" type="primary" html-type="button">User</a-button>
                    </a-form-item>
                </div>
            </a-form>
        </div>
    </div>
</template>

<style scoped></style>
