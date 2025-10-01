<script setup lang="ts"></script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <Transition name="fade" mode="out-in">
        <NuxtPage />
      </Transition>
    </NuxtLayout>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
