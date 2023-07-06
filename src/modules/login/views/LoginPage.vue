<script setup lang="ts">
import DarkModeSwitcher from "@/components/DarkModeSwitcher";
import MainColorSwitcher from "@/components/MainColorSwitcher";
import logoUrl from "@/assets/images/logo.svg";
import illustrationUrl from "@/assets/images/illustration.svg";
import { FormInput, FormCheck } from "@/base-components/Form";
import Button from "@/base-components/Button";
import Dialog from "@/base-components/Headless/Dialog";
import { ref } from "vue";
import { ILogin } from "../types/UserTypes";
import TomSelect from "@/base-components/TomSelect";
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, minLength, maxLength } from '@vuelidate/validators'

const userData = ref<ILogin>({
  login: "",
  password: "",
});

const branchDialog = ref(false);

const userDataRules = {
  login: {
    required: helpers.withMessage('Заполните обязательное поле!', required),
    minLength: helpers.withMessage('Минимальная длинна 3 символа!', minLength(3)),
    maxLength: helpers.withMessage('Максимальная длинна 20 символа!', maxLength(20))
  },
  password: {
    required: helpers.withMessage('Заполните обязательное поле!', required),
    minLength: helpers.withMessage('Минимальная длинна 3 символа!', minLength(3)),
    maxLength: helpers.withMessage('Максимальная длинна 20 символа!', maxLength(20))
  },
}
const branch = ref("");

const $v = useVuelidate(userDataRules, userData.value)

const login = async () => {
  const validate = await $v.value.$validate()
  if (!validate) return
  branchDialog.value = true
};
</script>

<template>
  <div :class="[
    '-m-3 sm:-mx-8 p-3 sm:px-8 relative h-screen lg:overflow-hidden bg-primary xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600',
    'before:hidden before:xl:block before:content-[\'\'] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-primary/20 before:rounded-[100%] before:dark:bg-darkmode-400',
    'after:hidden after:xl:block after:content-[\'\'] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-primary after:rounded-[100%] after:dark:bg-darkmode-700',
  ]">
    <DarkModeSwitcher />
    <MainColorSwitcher />
    <div class="container relative z-10 sm:px-10">
      <div class="block grid-cols-2 gap-4 xl:grid">
        <!-- BEGIN: Login Info -->
        <div class="flex-col hidden min-h-screen xl:flex">
          <a href="" class="flex items-center pt-5 -intro-x">
            <img alt="Midone Tailwind HTML Admin Template" class="w-6" :src="logoUrl" />
            <span class="ml-3 text-lg text-white"> Jet Avia </span>
          </a>
          <div class="my-auto">
            <img alt="Midone Tailwind HTML Admin Template" class="w-1/2 -mt-16 -intro-x" :src="illustrationUrl" />
            <div class="mt-10 text-4xl font-medium leading-tight text-white -intro-x">
              Пару кликов чтобы <br />
              войти в свой аккаунт.
            </div>
            <div class="mt-5 text-lg text-white -intro-x text-opacity-70 dark:text-slate-400">
              Совершайте полеты в любую точку мира с нами.
            </div>
          </div>
        </div>
        <!-- END: Login Info -->
        <!-- BEGIN: Login Form -->
        <div class="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
          <div
            class="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
            <h2 class="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">
              Войти
            </h2>
            <div class="mt-2 text-center intro-x text-slate-400 xl:hidden">
              Пару кликов чтобы
              войти в свой аккаунт. Совершайте полеты в любую точку мира с нами.
            </div>
            <div class="mt-8 intro-x">
              <FormInput type="text" class="block px-4 py-3 intro-x login__input min-w-full xl:min-w-[350px]"
                :class="{ 'border-red-400': $v.login.$errors.length }" placeholder="Логин" v-model="userData.login" />
              <p class="error-message text-red-400 text-xs">{{ $v.login.$errors[0]?.$message }} </p>
              <FormInput type="password" :class="{ 'border-red-400': $v.password.$errors.length }"
                class="block px-4 py-3 mt-4 intro-x login__input min-w-full xl:min-w-[350px]" placeholder="Пароль"
                v-model="userData.password" />
              <p class="error-message text-red-400 text-xs">{{ $v.password.$errors[0]?.$message }} </p>
            </div>
            <div class="mt-5 text-center intro-x xl:mt-8 xl:text-left">
              <Button variant="primary" class="w-full px-4 py-3 align-top xl:w-32 xl:mr-3" @click="login">
                Логин
              </Button>
            </div>
          </div>
        </div>
        <!-- END: Login Form -->
      </div>
    </div>

    <!-- START: Dialog -->
    <Dialog staticBackdrop :open="branchDialog" @close="branchDialog = false">
      <Dialog.Panel class="px-5 py-10">
        <div class="text-center">
          <h2 class="text-xl mb-5">Филиал</h2>
          <div class="mb-4">
            <TomSelect v-model="branch" :options="{
              placeholder: 'Укажите филиал',
            }" class="w-full">
              <option value="Ташкент">Ташкент</option>
              <option value="Бухара">Бухара</option>
              <option value="Наманган">Наманган</option>
              <option value="Сурхандарья">Сурхандарья</option>
            </TomSelect>
          </div>
          <div class="actions">
            <Button type="button" variant="secondary" @click="branchDialog = false" class="w-24">
              Отмена
            </Button>
            <Button type="button" variant="primary" class="ml-3 w-24">
              Готово
            </Button>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
    <!-- END: Dialog -->
  </div>
</template>
