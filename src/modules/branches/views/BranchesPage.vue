<script setup lang="ts">
import { onMounted } from "vue";
import BranchesTable from "../components/BranchesTable";
import CompaniesList from "../components/CompaniesList";
import PartnersList from "../components/PartnersList";
import { useBranchesStore } from "../store/branches.store";

const branchesStore = useBranchesStore();

onMounted(() => {
  branchesStore.fetchAllBranches();
  branchesStore.fetchAllCompanies();
  branchesStore.fetchAllPartners();
});
</script>

<template>
  <div class="py-5">
    <!-- branches -->
    <div class="flex intro-y">
      <div class="p-5 w-1/2">
        <BranchesTable />
      </div>
      <div class="p-5 w-1/4">
        <CompaniesList :companies="branchesStore.companies" @created="branchesStore.fetchAllCompanies();" />
      </div>
      <div class="p-5 w-1/4">
        <PartnersList />
      </div>
    </div>
  </div>
</template>
