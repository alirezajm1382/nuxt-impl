<script setup lang="ts">
import { Label } from '~/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';

definePageMeta({
  layout: 'auth',
});
useHead({
  title: 'Nuxt Tutorial | Register',
});
</script>

<template>
  <Card class="w-lg max-w-sm gap-4">
    <CardHeader>
      <CardTitle>Create an account</CardTitle>
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
      <div class="flex flex-col space-y-1.5">
        <Label for="password_confirmation">Confirm Password</Label>
        <Input
          id="password_confirmation"
          placeholder="Repeat the password"
          type="password"
        />
      </div>
    </CardContent>
    <Button class="mx-6">Create</Button>
  </Card>
</template>

<style scoped></style>
