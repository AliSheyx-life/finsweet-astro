<script setup lang="ts">
import Button from "@/base-components/Button";
import Lucide from "@/base-components/Lucide";
import Dialog from "@/base-components/Headless/Dialog";
import CreateCompany from "../CreateCompany";
import TheTable from "@/components/TheTable";
import type { Header } from "vue3-easy-data-table";
import { PropType, ref } from "vue";
import { ICompany } from "../../types/Companies";

const emit = defineEmits<{
  (event: "created"): void;
}>();

const props = defineProps({
  companies: {
    type: Array as PropType<ICompany[]>,
    required: true,
  },
});

const create = ref(false);
const companyToEdit = ref<ICompany | null>(null);
const headers: Header[] = [
  { text: 'Имя компании', value: 'name' },
  { text: 'Действия', value: 'actions' },
]

const setEditCompany = (company: ICompany) => {
  companyToEdit.value = company;
  create.value = true;
}
</script>

<template>
  <div>
    <div class="flex flex-col items-center intro-y sm:flex-row w-full mb-5">
      <div class="flex justify-between items-center w-full">
        <h2 class="text-xl font-medium mr-auto">Компании</h2>
        <Button variant="primary" class="shadow-md" @click="create = true, companyToEdit = null">
          Добавить компанию
        </Button>
      </div>
    </div>

    <div class="overflow-x-auto box">
      <TheTable :headers="headers" :items="companies">
        <template #item-actions="company">
          <div class="flex justify-center items-center">
            <Button variant="primary" @click="setEditCompany(company)">
              <Lucide icon="Pencil" size="14px" />
            </Button>
          </div>
        </template>
      </TheTable>
    </div>
    <!--  -->
    <Dialog :open="create" @close="create = false">
      <Dialog.Panel class="p-5">
        <CreateCompany @created="emit('created'), companyToEdit = null" @close="create = false, companyToEdit = null"
          :companyToEdit="companyToEdit" />
      </Dialog.Panel>
    </Dialog>
    <!--  -->
  </div>
</template>
