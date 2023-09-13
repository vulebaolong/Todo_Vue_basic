import axios from "axios";

const state = {
    listTodo: [],
};

const mutations = {
    setTodo(state, payload) {
        state.listTodo = payload;
    },
};

const actions = {
    // Hành động để gọi API và cập nhật dữ liệu
    async getTodo({ commit }) {
        try {
            const { data } = await axios.get("http://localhost:3001/todo/user");
            commit("setTodo", data);
        } catch (error) {
            console.error("Lỗi khi gọi API:", error);
        }
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
