<script setup lang="ts">
import { onMounted, ref } from "vue";
import Button from "../../../../base-components/Button";
import Lucide from "../../../../base-components/Lucide";
import { FormInput, FormLabel } from "../../../../base-components/Form";
import LoadingIcon from "../../../../base-components/LoadingIcon";
import { useUsersStore } from "../../store/users.store";
import { IUser } from "../../types/UserTypes";
import useVuelidate from "@vuelidate/core";
import {
    required,
    minLength,
    maxLength,
    helpers
} from "@vuelidate/validators";

const emit = defineEmits<{
    (event: "close"): void;
    (event: "created"): void;
}>();

const props = defineProps<{
    userToEdit: IUser | null;
}>();

const usersStore = useUsersStore();

const loading = ref(false);
const formData = ref<IUser>(props.userToEdit || {
    fullName: "",
    phones: [],
    mainPhone: "+998",
    photo: "",
    password: "",
    passportSeries: "",
    branchId: "",
    role: "",
    status: true
});

const formDataRules = {
    fullName: {
        required: helpers.withMessage("Заполните обязательное поле!", required),
        minLength: helpers.withMessage(
            "Минимальная длинна 1 символ!",
            minLength(1)
        ),
        maxLength: helpers.withMessage(
            "Максимальная длинна 50 символов!",
            maxLength(50)
        ),
    },
    mainPhone: {
        required: helpers.withMessage("Заполните обязательное поле!", required),
    },
    password: {
        required: helpers.withMessage("Заполните обязательное поле!", required),
    },
    passportSeries: {
        required: helpers.withMessage("Заполните обязательное поле!", required),
    },
    branchId: {
        required: helpers.withMessage("Заполните обязательное поле!", required),
    },
    role: {
        required: helpers.withMessage("Заполните обязательное поле!", required),
    },
}

const $v = useVuelidate(formDataRules, formData.value);

const addMoreNumber = () => {
    formData.value.phones.push("+998");
};
const deleteNumber = (index: number) => {
    formData.value.phones.splice(index, 1);
};

const onSubmit = async () => {
    const validate = await $v.value.$validate();
    if (!validate) return;
    try {
        loading.value = true;
        if (props.userToEdit?.id) {
            const res = await usersStore.updateUser(formData.value);
        } else {
            const res = await usersStore.createUser(formData.value);
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
        <h2 class="text-xl font-semibold mb-5">Создать пользователя</h2>

        <form @submit.prevent>
            <!-- form item -->
            <div class="mb-4">
                <FormLabel htmlFor="regular-form-1">Полное имя (по паспорту)</FormLabel>
                <FormInput id="regular-form-1" type="text" placeholder="" v-model.trim="formData.fullName"
                    :class="{ 'border-red-400': $v.fullName?.$errors?.length }" />
                <p class="error-message text-red-400 text-xs">
                    {{ $v.fullName?.$errors[0]?.$message }}
                </p>
            </div>
            <!-- form item -->
            <!-- form item -->
            <div class="mb-4">
                <FormLabel htmlFor="regular-form-1">Серия паспорта / ID карта</FormLabel>
                <FormInput id="regular-form-1" type="text" placeholder="" v-model.trim="formData.passportSeries"
                    :class="{ 'border-red-400': $v.passportSeries?.$errors?.length }" />
                <p class="error-message text-red-400 text-xs">
                    {{ $v.passportSeries?.$errors[0]?.$message }}
                </p>
            </div>
            <!-- form item -->
            <!-- form item -->
            <div class="mb-4">
                <FormLabel htmlFor="regular-form-1">Основной номер телефона</FormLabel>
                <FormInput id="regular-form-1" type="text" placeholder="" v-model.trim="formData.mainPhone"
                    :class="{ 'border-red-400': $v.mainPhone?.$errors?.length }" />
                <p class="error-message text-red-400 text-xs">
                    {{ $v.mainPhone?.$errors[0]?.$message }}
                </p>
            </div>
            <!-- form item -->
            <!-- form item -->
            <div class="mb-4">
                <FormLabel htmlFor="regular-form-1">Дополнительные номера</FormLabel>
                <template v-for="(phone, idx) in formData.phones" :key="idx">
                    <div class="flex mt-1">
                        <FormInput id="regular-form-1" type="text" placeholder="" v-model.trim="formData.phones[idx]" />
                        <Button variant="danger" class="ml-1" @click="deleteNumber(idx)">
                            <Lucide icon="X" size="14px" />
                        </Button>
                    </div>
                </template>
                <br>
                <Button variant="secondary" type="submit" class="text-[12px]" @click="addMoreNumber">
                    Добавить номер
                </Button>
            </div>
            <!-- form item -->
             <!-- form item -->
             <div class="mb-4">
                <FormLabel htmlFor="regular-form-1">Пароль</FormLabel>
                <FormInput id="regular-form-1" type="text" placeholder="" v-model.trim="formData.password"
                    :class="{ 'border-red-400': $v.password?.$errors?.length }" />
                <p class="error-message text-red-400 text-xs">
                    {{ $v.password?.$errors[0]?.$message }}
                </p>
            </div>
            <!-- form item -->
            <div class="mt-3">
                <div class="w-[30px] flex justify-center mx-auto" v-if="loading">
                    <LoadingIcon icon="three-dots" />
                </div>
                <div class="" v-else>
                    <Button variant="primary" type="submit" class="w-full" @click="onSubmit">
                        {{ userToEdit?.id ? 'Изменить' : "Создать" }}
                    </Button>
                </div>
            </div>
        </form>
    </div>
</template>
