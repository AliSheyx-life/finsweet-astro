<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import {
  email,
  integer,
  minLength,
  required,
  url,
} from "@vuelidate/validators";
import { maxLength } from "@vuelidate/validators";
import Toastify from "toastify-js";
import { reactive, toRefs } from "vue";
import Button from "@/base-components/Button";
import { FormInput, FormLabel } from "@/base-components/Form";
import TomSelect from "@/base-components/TomSelect";

const formData = reactive({
  name: "",
  company: "",
});

const rules = {
  name: {
    required,
    minLength: minLength(2),
  },
};

const validate = useVuelidate(rules, toRefs(formData));

const onSubmit = () => {
  validate.value.$touch();
  if (validate.value.$invalid) {
  } else {
  }
};
</script>

<template>
  <div>
    <h2 class="text-xl font-semibold mb-5">Создать филиал</h2>

    <form @submit.prevent="onSubmit">
      <div class="mb-4">
        <FormLabel htmlFor="regular-form-1">Название филиала</FormLabel>
        <FormInput
          id="regular-form-1"
          type="text"
          placeholder=""
          v-model="formData.name"
        />
      </div>
      <label>Basic</label>
      <div class="mt-2">
        <TomSelect
          v-model="formData.company"
          :options="{
            placeholder: 'Select your favorite actors',
          }"
          class="w-full"
        >
          <option value="1">Jet</option>
          <option value="2">Asialux</option>
        </TomSelect>
      </div>
      <div class="mt-3">
        <Button variant="primary" type="submit">Создать</Button>
      </div>
    </form>
  </div>
</template>
