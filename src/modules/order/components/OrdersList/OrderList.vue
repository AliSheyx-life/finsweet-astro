<script setup lang="ts">
import Button from "@/base-components/Button";
import Lucide from "@/base-components/Lucide";
import Table from "@/base-components/Table";
import Dialog from "@/base-components/Headless/Dialog";
import CreateOrder from "../CreateOrder";
import { ref } from "vue";

const create = ref(false);
</script>

<template>
  <div>
    <div class="overflow-x-auto p-5 box">
      <Table id="OrderList">
        <Table.Thead>
          <Table.Tr>
            <Table.Th class="whitespace-nowrap text-center"
              >Номер заявки</Table.Th
            >
            <Table.Th class="whitespace-nowrap text-center">Оператор </Table.Th>
            <Table.Th class="whitespace-nowrap text-center">Филиал </Table.Th>
            <Table.Th class="whitespace-nowrap text-center"
              >Дата продажи
            </Table.Th>
            <Table.Th class="whitespace-nowrap text-center">Тур ID </Table.Th>
            <Table.Th class="whitespace-nowrap text-center">Билет ID </Table.Th>
            <Table.Th class="whitespace-nowrap text-center"
              >Направление
            </Table.Th>
            <Table.Th class="whitespace-nowrap text-center"
              >Дата вылета
            </Table.Th>
            <Table.Th class="whitespace-nowrap text-center"
              >Срок оплаты
            </Table.Th>
            <Table.Th class="whitespace-nowrap text-center">B2B </Table.Th>
            <Table.Th class="whitespace-nowrap text-center">B2C </Table.Th>
            <Table.Th class="whitespace-nowrap text-center">Маржа </Table.Th>
            <Table.Th class="whitespace-nowrap text-center">Приход </Table.Th>
            <Table.Th class="whitespace-nowrap text-center">Остаток </Table.Th>
            <Table.Th class="whitespace-nowrap text-center">Ф.И.О </Table.Th>
            <Table.Th class="whitespace-nowrap text-center"
              >Дата рождения
            </Table.Th>
            <Table.Th class="whitespace-nowrap text-center">Телефон </Table.Th>
            <Table.Th class="whitespace-nowrap text-center"
              >Серия паспорта
            </Table.Th>
            <Table.Th class="whitespace-nowrap text-center">Действия</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <!--  -->
          <!--  -->
          <!--  -->
          <Table.Tr v-for="i in 15" :key="i">
            <Table.Td class="whitespace-nowrap text-center"> 123456 </Table.Td>
            <Table.Td class="whitespace-nowrap text-center">
              Мадина Акромова
            </Table.Td>
            <Table.Td class="whitespace-nowrap text-center"> Ташкент </Table.Td>
            <Table.Td class="whitespace-nowrap text-center">
              2023-05-05, 15:00
            </Table.Td>
            <Table.Td class="whitespace-nowrap text-center"> #5454 </Table.Td>
            <Table.Td class="whitespace-nowrap text-center"> #964554 </Table.Td>
            <Table.Td class="whitespace-nowrap text-center">
              Tashkent-Dubai
            </Table.Td>
            <Table.Td class="whitespace-nowrap text-center">
              2023-05-15
            </Table.Td>
            <Table.Td class="whitespace-nowrap text-center"> 4 </Table.Td>
            <Table.Td class="whitespace-nowrap text-center"> 250$ </Table.Td>
            <Table.Td class="whitespace-nowrap text-center"> 300$ </Table.Td>
            <Table.Td class="whitespace-nowrap text-center"> 50$ </Table.Td>
            <Table.Td class="whitespace-nowrap text-center"> 150$ </Table.Td>
            <Table.Td class="whitespace-nowrap text-center"> 150$ </Table.Td>
            <Table.Td class="whitespace-nowrap text-center">
              <p>Акмал турсунов</p>
              <p>Немат Расулов</p>
              <p>Нозима Рустамова</p>
            </Table.Td>
            <Table.Td class="whitespace-nowrap text-center">
              <p>1975-05-01</p>
              <p>1982-09-10</p>
              <p>2001-01-30</p>
            </Table.Td>
            <Table.Td class="whitespace-nowrap text-center">
              <p>+998 99 555 11 22</p>
              <p>+998 33 212 98 18</p>
            </Table.Td>
            <Table.Td class="whitespace-nowrap text-center">
              AB4001212
            </Table.Td>
            <!--  -->
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
          <!--  -->
          <!--  -->
        </Table.Tbody>
      </Table>
    </div>
    <!--  -->
    <Dialog :open="create" @close="create = false">
      <Dialog.Panel class="p-5">
        <CreateOrder />
      </Dialog.Panel>
    </Dialog>
  </div>
</template>
