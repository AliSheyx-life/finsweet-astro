import { defineStore } from "pinia";
import branchApi from "../branches.api";

export const useBranchesStore = defineStore('useBranchesStore', {
    state: () => ({
        branches: [],
    }),
    getters: {},
    actions: {
        async fetchAllBranches() {
            const { data } = await branchApi.getAllBranches();
            this.branches = data;
        }
    }
})