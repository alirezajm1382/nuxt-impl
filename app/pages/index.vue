<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';

const { data } = useFetch<
  {
    id: string;
    url: string;
    width: number;
    height: number;
  }[]
>('https://api.thecatapi.com/v1/images/search?limit=10', {
  server: false,
  lazy: true,
});
</script>

<template>
  <div class="w-full sm:w-auto">
    <Carousel v-if="data" class="relative mx-auto w-full max-w-xs">
      <CarouselContent>
        <CarouselItem v-for="item in data" :key="item.id" class="rounded-md">
          <div class="aspect-square p-1">
            <NuxtImg :src="item.url" class="h-full w-full rounded-md" />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</template>

<style scoped></style>
