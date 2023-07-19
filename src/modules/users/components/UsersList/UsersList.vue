<script setup lang="ts">
import Button from "../../../../base-components/Button";
import Lucide from "../../../../base-components/Lucide";
import Dialog from "../../../../base-components/Headless/Dialog";
import TheTable from "../../../../components/TheTable";
import type { Header } from "vue3-easy-data-table";
import { PropType, ref } from "vue";
import UserAction from "../UserAction";

const emit = defineEmits<{
    (event: "created"): void;
}>();

const props = defineProps({
    users: {
        type: Array as PropType<any[]>,
        required: true,
    },
});

const create = ref(true);
const userToEdit = ref<any | null>(null);
const headers: Header[] = [
    { text: 'ID', value: 'id' },
    { text: 'Фото', value: 'photo' },
    { text: 'Полное имя', value: 'fullName' },
    { text: 'Основной номер', value: 'mainPhone' },
    { text: 'Доп. номера', value: 'phones' },
    { text: 'Серия паспорта / ID карты', value: 'passportSeries' },
    { text: 'Филиал', value: 'branch' },
    { text: 'Роль', value: 'role' },
    { text: 'Статус', value: 'status' },
    { text: 'Действия', value: 'actions' }
]

const setEditUser = (user: any) => {
    userToEdit.value = user;
    create.value = true;
}
</script>

<template>
    <div>
        <div class="flex flex-col items-center intro-y sm:flex-row w-full mb-5">
            <div class="flex justify-between items-center w-full">
                <h2 class="text-xl font-medium mr-auto">Пользователи</h2>
                <Button variant="primary" class="shadow-md" @click="create = true">
                    Создать пользователя
                </Button>
            </div>
        </div>

        <div class="overflow-x-auto box">
            <TheTable :headers="headers" :items="users">
                <!-- <template #item-action">
          <div class="flex justify-center items-center">
            <Button variant="primary">
              <Lucide icon="Pencil" size="14px" />
            </Button>
          </div>
        </template> -->
            </TheTable>
        </div>
        <!--  -->
        <Dialog :open="create" @close="create = false">
            <Dialog.Panel class="p-5">
                <UserAction :userToEdit="userToEdit" />
            </Dialog.Panel>
        </Dialog>
        <!--  -->
    </div>
</template>
