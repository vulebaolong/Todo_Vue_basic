<script setup>
import { EditOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons-vue";
import axios from "axios";
import { ref } from "vue";
import { useStore } from "vuex";
import { error, success } from "../../helpers/messageHelper";
import { nextTick } from "vue";

const store = useStore();

const loadingBtnDelete = ref(false);
const loadingBtnComplete = ref(false);
const loadingBtnUpdate = ref(false);
const valueInput = ref("");
const inputRef = ref(null);
const isEdit = ref(false);

const props = defineProps({
    todo: Object,
});

valueInput.value = props.todo.title;

const openEdit = () => {
    isEdit.value = true;
};
const closeEdit = () => {
    isEdit.value = false;
};

const handleDelete = async (id) => {
    try {
        loadingBtnDelete.value = true;

        await axios.delete(`http://localhost:3001/todo/user/${id}`);

        success("Xoá todo thành công");

        store.dispatch("todo/getTodo");
    } catch (err) {
        console.log(err);
        error("Xoá todo không thành công");
    } finally {
        loadingBtnDelete.value = false;
    }
};

const handleComplete = async (id, complete) => {
    try {
        loadingBtnComplete.value = true;

        await axios.put(`http://localhost:3001/todo/user/${id}`, { completed: complete });

        if (complete) success("Hoàn thành todo thành công");
        if (!complete) success("Hoàn tác todo thành công");

        store.dispatch("todo/getTodo");
    } catch (err) {
        console.log(err);
        if (complete) error("Hoàn thành todo không thành công");
        if (!complete) error("Hoàn tác todo không thành công");
    } finally {
        loadingBtnComplete.value = false;
    }
};

const handleOpenEdit = () => {
    openEdit();

    /**
     * thực hiện mã JavaScript sau khi DOM đã được cập nhật
     * Trong ngữ cảnh của Vue, khi bạn thay đổi dữ liệu hoặc thực hiện một tác vụ gây ra sự thay đổi trên DOM,
     * Vue có thể không cập nhật DOM ngay lập tức, mà sẽ sắp xếp nó vào một "hàng đợi" để thực hiện sau
     * nextTick cho phép bạn thực hiện mã sau khi Vue đã thực sự cập nhật DOM, đảm bảo rằng bạn đang làm việc trên DOM mới nhất.
     * Điều này thường được sử dụng khi bạn cần truy cập hoặc tương tác với DOM sau khi nó đã được cập nhật,
     * ví dụ: focus vào một phần tử, đo lường kích thước của một phần tử, hoặc thực hiện các tác vụ DOM khác
     */
    nextTick(() => {
        inputRef.value.focus();
    });
};

const handleCloseEdit = () => {
    closeEdit();
};

const handleUpdate = async (id) => {
    console.log(id);
    console.log(valueInput.value);
    try {
        loadingBtnUpdate.value = true;

        await axios.put(`http://localhost:3001/todo/user/${id}`, { title: valueInput.value });

        success("Sửa todo thành công");

        store.dispatch("todo/getTodo");

        closeEdit();
    } catch (err) {
        console.log(err);
        error("Sửa todo không thành công");
    } finally {
        loadingBtnUpdate.value = false;
    }
};
</script>

<template>
    <div class="flex items-center justify-between px-5 py-2">
        <div class="flex items-center flex-1">
            <a-input
                ref="inputRef"
                :disabled="!isEdit"
                v-model:value="valueInput"
                :bordered="false"
                class="dark:!text-white/70 !text-black/70 text-lg font-bold truncate"
                :class="{ completed: todo.completed }"
            />
        </div>
        <div class="flex items-center gap-2">
            <!-- BUTTON OPEN EDIT -->
            <a-button @click="handleOpenEdit" v-if="!isEdit" type="primary" class="flex items-center justify-center">
                <template #icon>
                    <EditOutlined />
                </template>
            </a-button>

            <!-- ICON UPDATE -->
            <a-button :loading="loadingBtnUpdate" @click="handleUpdate(todo._id)" v-if="isEdit" class="flex items-center justify-center">
                <template #icon>
                    <CheckOutlined />
                </template>
            </a-button>

            <!-- ICON CLOSE EDIT -->
            <a-button @click="handleCloseEdit" danger v-if="isEdit" class="flex items-center justify-center">
                <template #icon>
                    <CloseOutlined />
                </template>
            </a-button>

            <!-- BUTTON HOÀN THÀNH -->
            <a-button v-if="!todo.completed" :loading="loadingBtnComplete" @click="handleComplete(todo._id, true)" type="primary">Hoàn thành</a-button>

            <!-- BUTTON HOÀN TÁC -->
            <a-button v-if="todo.completed" :loading="loadingBtnComplete" @click="handleComplete(todo._id, false)" type="primary">Hoàn tác</a-button>

            <!-- BUTTON XOÁ -->
            <a-button :loading="loadingBtnDelete" @click="handleDelete(todo._id)" type="primary" danger>Xoá</a-button>
        </div>
    </div>
</template>

<style scoped>
.completed {
    @apply line-through !text-black/30 dark:!text-white/30 italic font-light;
}
</style>
