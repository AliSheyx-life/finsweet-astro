import { defineStore } from "pinia";
import usersApi from "../users.api";
import { IUser } from "../types/UserTypes";
import { AxiosPromise } from "axios";

export const useUsersStore = defineStore('useUsersStore', {
    state: () => ({
        users: [] as any[],
        userRoles: [] as string[],
    }),
    getters: {},
    actions: {
        async fetchUsers() {
            const { data } = await usersApi.getUsers();
            this.users = data;
        },
        async createUser(user: IUser): Promise<AxiosPromise<IUser>> {
            const {data} = await usersApi.updateUser(user);
            return data;
        },
        async updateUser(user: IUser): Promise<AxiosPromise<IUser>> {
            const {data} = await usersApi.updateUser(user);
            return data;
        },
        async fetchUserRoles() {
            const {data} = await usersApi.getUserRoles();
            this.userRoles = data;
        }
    },
})