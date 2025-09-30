<script setup lang="ts">
import { Card, CardContent } from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { usePosts } from '~/composables/usePosts';

const route = useRoute();
const id = route.params.id as string;
const { fetchPost } = usePosts();

const { data: post, pending: loading } = useAsyncData(`post-${id}`, () => {
  return fetchPost(id);
});
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="loading" class="flex h-64 items-center justify-center">
      <div
        class="border-primary h-12 w-12 animate-spin rounded-full border-b-2"
      />
    </div>

    <div v-else-if="post" class="mx-auto max-w-4xl">
      <div class="mb-8 text-center">
        <h1 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
          {{ post.title }}
        </h1>
        <div
          class="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400"
        >
          <span>By {{ post.user?.name }}</span>
          <span>•</span>
          <span>Post #{{ post.id }}</span>
        </div>
      </div>

      <Card>
        <CardContent class="p-8">
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p
              class="leading-relaxed whitespace-pre-line text-gray-700 dark:text-gray-300"
            >
              {{ post.body }}
            </p>
          </div>
        </CardContent>
      </Card>

      <div class="mt-6 flex gap-4">
        <Button variant="outline" @click="$router.back()">
          <IconArrowLeft class="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
