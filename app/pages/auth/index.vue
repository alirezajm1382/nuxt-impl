<script setup lang="ts">
import { Label } from '~/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';

definePageMeta({
  layout: 'auth',
});
useHead({
  title: 'Nuxt Tutorial | Auth',
});
</script>

<template>
  <Card class="w-lg max-w-sm gap-8">
    <CardHeader>
      <CardTitle class="text-center">Auth Portal</CardTitle>
    </CardHeader>
    <CardContent class="flex flex-col gap-6">
      <div class="flex flex-col items-center space-y-1.5">
        <Button as-child class="min-w-44">
          <NuxtLink :to="{ name: 'auth-register' }">
            Create an account
          </NuxtLink>
        </Button>
        <p class="m-0 text-sm text-neutral-400">or</p>
        <Button as-child class="min-w-44" variant="ghost">
          <NuxtLink :to="{ name: 'auth-login' }">
            Log into your account
          </NuxtLink>
        </Button>
      </div>
    </CardContent>
  </Card>
</template>

<style scoped></style>
