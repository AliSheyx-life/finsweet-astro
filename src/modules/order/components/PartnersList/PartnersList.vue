<script setup lang="ts">
import Lucide from "@/base-components/Lucide";
</script>

<template>
  <div class="box px-5 py-1">
    <div class="partners-item" v-for="i in 7" :key="i">
      <a
        href=""
        target="_blank"
        class="flex py-4 items-center"
        :class="i === 1 ? 'border-none' : 'border-t'"
      >
        <Lucide icon="Link" />
        <span class="ml-2 font-semibold">Partner {{ i }}</span>
      </a>
    </div>
  </div>
</template>
