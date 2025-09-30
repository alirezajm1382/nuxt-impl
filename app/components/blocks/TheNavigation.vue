<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { SidebarTrigger } from '~/components/ui/sidebar';
</script>

<template>
  <div class="flex w-full gap-3 p-2">
    <SidebarTrigger />

    <NuxtLink to="/">
      <h1 class="text-lg font-semibold">Nuxt Tutorial</h1>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
