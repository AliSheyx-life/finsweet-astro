<script setup lang="ts">
import Button from "@/base-components/Button";
import Lucide from "@/base-components/Lucide";
import { writeXLSX, writeFileXLSX } from "xlsx";
import OrderList from "../components/OrdersList";
import PartnersList from "../components/PartnersList";

const downloadTableAsExel = () => {};
</script>

<template>
  <div class="flex justify-between">
    <!-- orders -->
    <div class="intro-y w-[75%] p-5">
      <div class="mb-5 flex justify-between items-center">
        <h2 class="text-xl font-semibold">Заявки</h2>
        <div class="flex items-center">
          <Button variant="secondary" class="mr-3" @click="downloadTableAsExel">
            <Lucide icon="Printer" size="20px" class="mr-2" />
            <span>Распечатать</span>
          </Button>
          <Button variant="primary">Создать заявку</Button>
        </div>
      </div>
      <div class="">
        <OrderList />
      </div>
    </div>
    <!-- PartnersList -->
    <div class="w-[25%] p-5">
      <div class="mb-5">
        <h2 class="text-xl font-semibold">Партнёры</h2>
      </div>
      <div>
        <PartnersList />
      </div>
    </div>
  </div>
</template>
