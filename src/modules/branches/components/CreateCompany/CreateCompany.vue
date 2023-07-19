<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import {
  required,
  minLength,
  maxLength,
  helpers
} from "@vuelidate/validators";
import { onMounted, ref } from "vue";
import Button from "@/base-components/Button";
import { FormInput, FormLabel } from "@/base-components/Form";
import { ICompany, ICreateCompany } from "../../types/Companies";
import { useBranchesStore } from "../../store/branches.store";
import LoadingIcon from "@/base-components/LoadingIcon";

const emit = defineEmits<{
  (event: "close"): void;
  (event: "created"): void;
}>();

const props = defineProps<{
  companyToEdit: ICompany | null;
}>();

const branchesStore = useBranchesStore();

const loading = ref(false);
const formData = ref<ICreateCompany>({
  name: props.companyToEdit?.name || "",
});

const formDataRules = {
  name: {
    required: helpers.withMessage("Заполните обязательное поле!", required),
    minLength: helpers.withMessage(
      "Минимальная длинна 1 символ!",
      minLength(1)
    ),
    maxLength: helpers.withMessage(
      "Максимальная длинна 30 символов!",
      maxLength(30)
    ),
  },
}

const $v = useVuelidate(formDataRules, formData.value);

const onSubmit = async () => {
  const validate = await $v.value.$validate();
  if (!validate) return;
  try {
    loading.value = true;
    if(props.companyToEdit?.id) {
      const res = await branchesStore.updateCompany(props.companyToEdit.id, formData.value);
    } else {
      const res = await branchesStore.createCompany(formData.value);
    }
    loading.value = false;
    emit("created");
    emit("close");
  } catch (error) {
    loading.value = false;
    console.log(error);
  }
};
</script>

<template>
  <div>
    <h2 class="text-xl font-semibold mb-5">Создать компанию</h2>

    <form @submit.prevent="onSubmit">
      <div class="mb-4">
        <FormLabel htmlFor="regular-form-1">Название компании</FormLabel>
        <FormInput id="regular-form-1" type="text" placeholder="" v-model.trim="formData.name"
          :class="{ 'border-red-400': $v.name?.$errors?.length }" />
        <p class="error-message text-red-400 text-xs">
          {{ $v.name?.$errors[0]?.$message }}
        </p>
      </div>
      <div class="mt-3">
        <div class="w-[30px] flex justify-center mx-auto" v-if="loading">
          <LoadingIcon icon="three-dots" />
        </div>
        <div class="" v-else>
          <Button variant="primary" type="submit">
            {{ companyToEdit?.id ? 'Изменить' : "Создать" }}
          </Button>
        </div>
      </div>
    </form>
  </div>
</template>
