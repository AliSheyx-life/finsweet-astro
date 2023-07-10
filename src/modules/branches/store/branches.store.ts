import { defineStore } from "pinia";
import branchApi from "../branches.api";
import { IBranch } from "../types/Branches";

export const useBranchesStore = defineStore("useBranchesStore", {
  state: () => ({
    branches: [] as IBranch[],
  }),
  getters: {},
  actions: {
    async fetchAllBranches() {
      const { data } = await branchApi.getAllBranches();
      this.branches = data;
    },
  },
});
