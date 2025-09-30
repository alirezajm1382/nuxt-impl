<script setup lang="ts">
import { useUserStore } from '~/stores/user';
import UserCard from '~/components/blocks/UserCard.vue';

const usersStore = useUserStore();

onMounted(() => {
  usersStore.loadUsers();
});
</script>

<template>
  <section class="container mx-auto px-4 py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
        All Users
      </h1>
      <p class="mt-2 text-gray-600 dark:text-gray-400">
        Find everyone with an account
      </p>
    </div>
    <div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
      <UserCard v-for="user in usersStore.users" :key="user.id" :user="user" />
    </div>
  </section>
</template>

<style scoped></style>
