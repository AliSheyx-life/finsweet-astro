<script lang="ts" setup>
import EasyDataTable from "vue3-easy-data-table";

import type { Header } from "vue3-easy-data-table";
import { PropType } from "vue";

// -> props
defineProps({
  headers: {
    type: Array as PropType<Header[]>,
    default: () => [],
  },
  items: {
    type: Array as PropType<any>,
    default: () => [],
  },
  hightLight: {
    type: Number as PropType<any>,
    default: () => 5,
  },
  showIndex: {
    type: Boolean as PropType<any>,
    default: false,
  },
  fixedIndex: {
    type: Boolean as PropType<any>,
    default: false,
  },
  hideFooter: {
    type: Boolean as PropType<any>,
    default: true,
  },
  bodyRowClassName: {
    type: String as PropType<any>,
    default: "",
  },
});
</script>

<template>
  <div class="custome-table">
    <div class="overflow-x-scroll">
      <div class="table p-5" id="tb-table">
        <EasyDataTable
          :body-row-class-name="bodyRowClassName"
          :showIndex="showIndex"
          :fixedIndex="fixedIndex"
          :headers="headers"
          :items="items"
          table-class-name="tb-table shadow-c"
          header-class-name="tb-header"
          header-item-class-name="tb-header-item"
          body-item-class-name="tb-body-item"
          :hide-footer="hideFooter"
          @click-row="$emit('click-row', $event)"
        >
          <template #header="header">
            {{ header.text.toLocaleUpperCase() }}
          </template>
          <template v-for="(_, name) in $slots" #[name]="slotData">
            <slot :name="name" v-bind="slotData || {}" />
          </template>
        </EasyDataTable>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "vue3-easy-data-table/dist/style.css";

#tb-table {
  width: 100% !important;

  .tb-table {
    border: none !important;
    overflow: hidden !important;
    border-top-right-radius: 25px !important;
    border-top-left-radius: 25px !important;
  }

  .tb-header {
    border: none !important;
    border-radius: 30px !important;
    overflow: hidden !important;
  }

  .tb-header-item {
    color: #9e9e9e !important;
    text-transform: uppercase;
    padding-top: 15px !important;
    padding-bottom: 15px !important;
    text-align: center !important;
  }
}

#tb-table .tb-header-item .header {
  display: flex;
  justify-content: center;
}

#tb-table .tb-body-item {
  border-color: #f3f1ef !important;
  text-align: center;
  padding-top: 5px !important;
  padding-bottom: 5px !important;
}

/* #tb-table .tb-body-item:nth-child(2n + 5) {
  background: #f3f1ef !important;
} */
</style>
