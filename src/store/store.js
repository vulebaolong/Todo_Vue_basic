// store.js
import { createStore } from "vuex";
import userLoginModule from "./modules/userLogin";
import todoModule from "./modules/todo";

export default createStore({
    modules: {
        user: userLoginModule,
        todo: todoModule,
    },
});
