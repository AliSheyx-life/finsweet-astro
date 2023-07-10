<script setup lang="ts">
import { computed, ref } from "vue";
import Lucide from "../../base-components/Lucide";
import logoUrl from "../../assets/images/logo.svg";
// import Breadcrumb from "../../base-components/Breadcrumb";
// import { FormInput } from "../../base-components/Form";
import { Menu, Popover } from "../../base-components/Headless";
import fakerData from "../../utils/faker";
import _ from "lodash";
import { TransitionRoot } from "@headlessui/vue";
import { useRouter } from "vue-router";
import useJwt from "@/utils/useJwt";

const props = defineProps<{
  layout?: "side-menu" | "simple-menu" | "top-menu";
}>();

const router = useRouter();

const getUserInfo = computed(() => {
  return useJwt.getUserData();
});

const searchDropdown = ref(false);
const showSearchDropdown = () => {
  searchDropdown.value = true;
};
const hideSearchDropdown = () => {
  searchDropdown.value = false;
};
</script>

<template>
  <div
    :class="[
      'h-[70px] md:h-[65px] z-[51] border-b border-white/[0.08] mt-12 md:mt-0 -mx-3 sm:-mx-8 md:-mx-0 px-3 md:border-b-0 relative md:fixed md:inset-x-0 md:top-0 sm:px-8 md:px-10 md:pt-10 md:bg-gradient-to-b md:from-slate-100 md:to-transparent dark:md:from-darkmode-700',
      props.layout == 'top-menu' && 'dark:md:from-darkmode-800',
      'before:content-[\'\'] before:absolute before:h-[65px] before:inset-0 before:top-0 before:mx-7 before:bg-primary/30 before:mt-3 before:rounded-xl before:hidden before:md:block before:dark:bg-darkmode-600/30',
      'after:content-[\'\'] after:absolute after:inset-0 after:h-[65px] after:mx-3 after:bg-primary after:mt-5 after:rounded-xl after:shadow-md after:hidden after:md:block after:dark:bg-darkmode-600',
    ]"
  >
    <div class="flex items-center h-full">
      <!-- BEGIN: Logo -->
      <RouterLink
        :to="{ name: 'home' }"
        :class="[
          '-intro-x hidden md:flex',
          props.layout == 'side-menu' && 'xl:w-[180px]',
          props.layout == 'simple-menu' && 'xl:w-auto',
          props.layout == 'top-menu' && 'w-auto',
        ]"
      >
        <img alt="Jet Avia" class="w-6" :src="logoUrl" />
        <span
          :class="[
            'ml-3 text-lg text-white',
            props.layout == 'side-menu' && 'hidden xl:block',
            props.layout == 'simple-menu' && 'hidden',
          ]"
        >
          Jet Avia
        </span>
      </RouterLink>
      <!-- END: Logo -->
      <!-- BEGIN: Account Menu -->
      <Menu class="ml-auto flex items-center">
        <Menu.Button class="block text-right zoom-in intro-x mr-2">
          <div class="font-medium text-white/70 dark:text-slate-500">
            {{ getUserInfo?.login }}
          </div>
          <div class="text-xs text-white/70 dark:text-slate-500">
            {{ getUserInfo?.role }}
          </div>
        </Menu.Button>
        <Menu.Button
          class="w-8 h-8 overflow-hidden rounded-full shadow-lg image-fit zoom-in intro-x flex items-center justify-center border border-white"
        >
          <img
            :alt="getUserInfo?.login"
            :src="getUserInfo?.photo"
            v-if="getUserInfo?.photo"
          />
          <Lucide icon="User" class="text-white" v-else />
        </Menu.Button>
        <Menu.Items
          class="w-56 mt-px relative bg-primary/80 before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-white"
        >
          <Menu.Header class="font-normal">
            <div class="font-medium">{{ getUserInfo?.login }}</div>
            <div class="text-xs text-white/70 mt-0.5 dark:text-slate-500">
              {{ getUserInfo?.role }}
            </div>
          </Menu.Header>
          <Menu.Divider class="bg-white/[0.08]" />
          <Menu.Item class="hover:bg-white/5">
            <Lucide icon="Edit" class="w-4 h-4 mr-2" /> Редактировать профиль
          </Menu.Item>
          <Menu.Divider class="bg-white/[0.08]" />
          <Menu.Item class="hover:bg-white/5">
            <Lucide icon="LogOut" class="w-4 h-4 mr-2" /> Выйти
          </Menu.Item>
        </Menu.Items>
      </Menu>
      <!-- END: Account Menu -->
    </div>
  </div>
</template>
