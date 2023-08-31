<script setup>
import { reactive, ref } from "vue";
import { nanoid } from "nanoid";
const emit = defineEmits(["todo-add"]);
const formRef = ref();
const formState = reactive({
    name: "",
});
const resetForm = () => {
    formRef.value.resetFields();
};
const onFinish = (values) => {
    console.log("Success:", values);
    values.name = values.name.trim();
    if (values.name === "") return;
    const result = {
        id: nanoid(),
        name: values.name,
        completed: false,
    };
    emit("todo-add", result);
    resetForm();
};
const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};
</script>

<template>
    <a-form ref="formRef" :model="formState" name="basic" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
        <div class="flex gap-5">
            <a-form-item class="w-full" name="name" :rules="[{ required: true, message: 'Please input your todo!' }]">
                <a-input v-model:value="formState.name" />
            </a-form-item>

            <a-form-item>
                <a-button type="primary" html-type="submit">Add todo</a-button>
            </a-form-item>
        </div>
    </a-form>
</template>

<style scoped></style>
