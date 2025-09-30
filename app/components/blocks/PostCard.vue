<template>
  <NuxtLink :to="{ name: 'posts-id', params: { id: post.id } }" class="block">
    <Card class="shadow-none">
      <CardContent class="p-6">
        <h2 class="mb-3 text-xl font-semibold">
          {{ post.title }}
        </h2>
        <p class="mb-4 line-clamp-3 text-gray-600 dark:text-gray-400">
          {{ post.body }}
        </p>

        <div class="flex items-center justify-end gap-2 text-sm">
          <span>Post #{{ post.id }}</span>
          <IconArrowRight class="h-4 w-4" />
        </div>
      </CardContent>
    </Card>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Post } from '~/composables/@types/postType';
import { Card, CardContent } from '~/components/ui/card';
defineProps<{
  post: Post;
}>();
</script>
