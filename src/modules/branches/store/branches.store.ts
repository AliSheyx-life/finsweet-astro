import { defineStore } from "pinia";
import branchApi from "../branches.api";
import { IBranch } from "../types/Branches";
import { ICompany, ICreateCompany } from "../types/Companies";
import { IPartner } from "../types/Partners";

export const useBranchesStore = defineStore("useBranchesStore", {
  state: () => ({
    branches: [] as IBranch[],
    companies: [] as ICompany[],
    partners: [] as IPartner[],
  }),
  getters: {},
  actions: {

    // branches
    async fetchAllBranches() {
      const { data } = await branchApi.getAllBranches();
      this.branches = data;
    },

    // companies
    async fetchAllCompanies() {
      const { data } = await branchApi.getAllCompanies();
      this.companies = data;
    },
    async createCompany(company: ICreateCompany) {
      const { data } = await branchApi.createCompany(company);
      return data;
    },
    async updateCompany(id: string, company: ICreateCompany) {
      const { data } = await branchApi.updateCompany(id, company);
      return data;
    },
    async deleteCompany(id: string) {
      const { data } = await branchApi.deleteCompany(id);
      return data;
    },

    // partners
    async fetchAllPartners() {
      const { data } = await branchApi.getAllPartners();
      this.partners = data;
    },
  },
});
