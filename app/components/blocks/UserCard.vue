<script setup lang="ts">
import type { User } from '~/composables/@types/userType';
import { Avatar, AvatarFallback } from '~/components/ui/avatar';
const { user } = defineProps<{
  user: User;
}>();
</script>

<template>
  <NuxtLink
    :to="{ name: 'users-id', params: { id: user.id } }"
    class="flex items-center gap-4 rounded-md border-1 border-neutral-100 p-2"
  >
    <Avatar class="size-12">
      <AvatarFallback>{{ user.name[0] }}</AvatarFallback>
    </Avatar>
    <div>
      <p class="text-foreground text-lg">{{ user.name }}</p>
      <p class="text-sm text-neutral-600">@{{ user.username.toLowerCase() }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped></style>
