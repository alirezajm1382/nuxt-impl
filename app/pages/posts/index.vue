<script setup lang="ts">
import PostCard from '~/components/blocks/PostCard.vue';
import { usePostStore } from '~/stores/post';

const postStore = usePostStore();
onMounted(() => {
  postStore.loadPosts();
});
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
        All Posts
      </h1>
      <p class="mt-2 text-gray-600 dark:text-gray-400">
        Browse through all available posts
      </p>
    </div>

    <div v-if="postStore.loading" class="flex h-64 items-center justify-center">
      <div
        class="border-primary h-12 w-12 animate-spin rounded-full border-b-2"
      />
    </div>

    <div v-else-if="postStore" class="grid gap-6">
      <PostCard v-for="post in postStore.posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>
