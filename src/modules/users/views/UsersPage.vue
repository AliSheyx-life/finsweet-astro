<script setup lang="ts">
import UsersList from "../components/UsersList";
import { onMounted } from "vue";
import { useUsersStore } from "../store/users.store";

const usersStore = useUsersStore();

onMounted(() => {
    usersStore.fetchUsers();
});
</script>

<template>
    <div class="py-5 intro-y">
       <UsersList :users="usersStore.users" />
    </div>
</template>