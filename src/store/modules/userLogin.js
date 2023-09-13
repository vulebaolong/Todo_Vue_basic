// store/modules/userLogin.js

import { lcStorage } from "../../helpers/lcStorage";
import { USER_LOGIN } from "../../contants/configContants";

const state = {
    userLogin: lcStorage.get(USER_LOGIN) || {},
    autoFill: {},
};

const mutations = {
    setUserLogin(state, payload) {
        state.userLogin = payload;
    },
    setAutoFill(state, payload) {
        state.autoFill = payload;
    },
};

export default {
    namespaced: true,
    state,
    mutations,
};
