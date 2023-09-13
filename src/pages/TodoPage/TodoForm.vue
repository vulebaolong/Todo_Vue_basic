<script setup>
import axios from "axios";
import { reactive, ref } from "vue";
import { error, success } from "../../helpers/messageHelper";
import { useStore } from "vuex";

const store = useStore();
const emit = defineEmits(["todo-add"]);
const formRef = ref();
const formState = reactive({
    title: "",
});
const resetForm = () => {
    formRef.value.resetFields();
};
const onFinish = async (values) => {
    try {
        console.log(values);

        await axios.post("http://localhost:3001/todo", values);

        success("Thêm todo thành công");

        resetForm();

        store.dispatch("todo/getTodo");
    } catch (err) {
        error("Thêm todo không thành công");
    }
};
const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};
</script>

<template>
    <a-form ref="formRef" :model="formState" name="basic" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
        <div class="flex gap-5">
            <a-form-item class="w-full" name="title" :rules="[{ required: true, message: 'Please input your todo!' }]">
                <a-input v-model:value="formState.title" />
            </a-form-item>

            <a-form-item>
                <a-button type="primary" html-type="submit">Add todo</a-button>
            </a-form-item>
        </div>
    </a-form>
</template>

<style scoped></style>
