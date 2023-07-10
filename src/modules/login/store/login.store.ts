import { defineStore } from "pinia";
import { ILogin } from "../types/UserTypes";
import loginApi from "../login.api";
import auth from "@/api/auth";
import useJwt from "@/utils/useJwt";

export const useLoginStore = defineStore("useLoginStore", {
  state: () => ({
    userInfo: {} as any,
  }),
  getters: {},
  actions: {
    async login(userData: ILogin) {
      const { data } = await loginApi.login(userData);
      return data;
    },
    async fetchUserInfo() {
      const { data } = await auth.getUserInfo();
      return data;
    },
  },
});
