<script setup lang="ts">
import Button from "@/base-components/Button";
import Lucide from "@/base-components/Lucide";
import Table from "@/base-components/Table";
import Dialog from "@/base-components/Headless/Dialog";
import CreatePartner from "../CreatePartner";
import { ref } from "vue";

const create = ref(false);
</script>

<template>
  <div>
    <div class="flex flex-col items-center intro-y sm:flex-row w-full mb-5">
      <div class="flex justify-between items-center w-full">
        <h2 class="text-xl font-medium mr-auto">Партнёры</h2>
        <Button variant="primary" class="shadow-md" @click="create = true">
          Добавить партнёра
        </Button>
      </div>
    </div>

    <div class="overflow-x-auto p-5 box">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th class="whitespace-nowrap text-center"> Имя </Table.Th>
            <Table.Th class="whitespace-nowrap text-center">
              Действия
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <!--  -->
          <Table.Tr>
            <Table.Td class="whitespace-nowrap text-center"> Cosmos </Table.Td>
            <Table.Td class="whitespace-nowrap text-center">
              <div class="flex justify-center items-center">
                <Button variant="primary" class="mr-2 shadow-md text-xs">
                  <Lucide icon="Pencil" size="14px" />
                </Button>
                <Button variant="danger" class="shadow-md text-xs">
                  <Lucide icon="Trash" size="14px" />
                </Button>
              </div>
            </Table.Td>
          </Table.Tr>
          <!--  -->
        </Table.Tbody>
      </Table>
    </div>
    <!-- dialog -->
    <Dialog :open="create" @close="create = false">
      <Dialog.Panel class="p-5">
        <CreatePartner />
      </Dialog.Panel>
    </Dialog>
  </div>
</template>
