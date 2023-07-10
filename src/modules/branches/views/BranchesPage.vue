<script setup lang="ts">
// import LeafletMap from "@/components/LeafletMap";
import BranchesTable from "../components/BranchesTable";
import CompaniesList from "../components/CompaniesList";
import PartnersList from "../components/PartnersList";
</script>

<template>
  <div class="py-5">
    <!-- branches -->
    <div class="flex intro-y">
      <div class="p-5 w-1/2">
        <BranchesTable />
      </div>
      <div class="p-5 w-1/4">
        <CompaniesList />
      </div>
      <div class="p-5 w-1/4">
        <PartnersList />
      </div>
    </div>
  </div>
</template>
