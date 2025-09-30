<script setup lang="ts">
import { SidebarInset, SidebarProvider } from '~/components/ui/sidebar';
import TheSidebar from '~/components/blocks/TheSidebar.vue';
import TheNavigation from '~/components/blocks/TheNavigation.vue';
</script>

<template>
  <SidebarProvider>
    <TheSidebar />
    <SidebarInset class="relative">
      <div class="min-h-[calc(100vh-4rem)]">
        <TheNavigation />
        <div class="p-8">
          <slot />
        </div>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>

<style scoped></style>
