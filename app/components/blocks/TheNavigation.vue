<script setup lang="ts">
import { SidebarTrigger } from '~/components/ui/sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '~/components/ui/breadcrumb';

const route = useRoute();
const routes = computed(() => {
  return route.path.split('/');
});
</script>

<template>
  <div class="flex w-full items-center gap-3 p-2">
    <SidebarTrigger />
    <NuxtLink to="/">
      <h1 class="text-lg font-semibold">Nuxt Tutorial</h1>
    </NuxtLink>
    <Breadcrumb>
      <BreadcrumbList>
        <template v-for="(item, index) in routes" :key="index">
          <BreadcrumbItem>{{
            item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase()
          }}</BreadcrumbItem>
          <BreadcrumbSeparator v-if="index != routes.length - 1" />
        </template>
      </BreadcrumbList>
    </Breadcrumb>
  </div>
</template>

<style scoped></style>
