<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Button } from '~/components/ui/button';
definePageMeta({
  layout: 'auth',
});
useHead({
  title: "Nuxt Tutorial | Login"
})
</script>

<template>
  <Card class="w-lg max-w-sm gap-4">
    <CardHeader>
      <CardTitle>Log into your account</CardTitle>
    </CardHeader>
    <CardContent class="flex flex-col gap-4">
      <div class="flex flex-col space-y-1.5">
        <Label for="email">Email</Label>
        <Input id="email" placeholder="user@email.com" type="email" />
      </div>
      <div class="flex flex-col space-y-1.5">
        <Label for="password">Password</Label>
        <Input id="password" placeholder="Enter here" type="password" />
      </div>
    </CardContent>
    <Button class="mx-6">Sign In</Button>
  </Card>
</template>

<style scoped></style>
