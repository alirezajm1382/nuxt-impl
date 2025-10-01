<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '~/components/ui/navigation-menu';
import CenteredBlock from '~/components/blocks/CenteredBlock.vue';

const route = useRoute();
const navigationRoute = computed(() => {
  if (route.path.split('/').length > 2) return '/auth';
  else return '/';
});
</script>

<template>
  <div>
    <div class="w-full p-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NuxtLink
              v-slot="{ isActive, href, navigate }"
              :to="navigationRoute"
              custom
            >
              <NavigationMenuLink
                :active="isActive"
                :href
                :class="navigationMenuTriggerStyle()"
                @click="navigate"
              >
                <span class="flex items-center gap-2"
                  ><IconArrowLeft class="text-foreground" :size="20" /> Back to
                  {{ navigationRoute === '/' ? 'Home' : 'Auth' }}</span
                >
              </NavigationMenuLink>
            </NuxtLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    <div class="relative h-[calc(100vh-68px)]">
      <CenteredBlock>
        <slot />
      </CenteredBlock>
    </div>
  </div>
</template>

<style scoped></style>
