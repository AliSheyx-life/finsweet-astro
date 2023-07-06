import { defineStore } from "pinia";
import loginApi from "../login.api";
import { ILogin } from "../types/UserTypes";

export const useLoginStore = defineStore('useLoginStore', {
    state: () => ({}),
    getters: {},
    actions: {
        async login(userData: ILogin) {
            const { data } = await loginApi.login(userData);
            return data;
        }
    }
})