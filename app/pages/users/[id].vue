<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Label } from '~/components/ui/label';
import { useUsers } from '~/composables/useUsers';
import { Button } from '~/components/ui/button';

const route = useRoute();
const id = route.params.id as string;

const { fetchUser } = useUsers();

const { data: singleUser, pending: loading } = useAsyncData(
  `user-${id}`,
  () => {
    return fetchUser(id);
  },
);
</script>

<template>
  <div class="container mx-auto px-4 pb-8">
    <div class="mb-8 w-full">
      <Button variant="ghost" @click="$router.back()">
        <IconArrowLeft />
        Back</Button
      >
    </div>
    <div v-if="singleUser" class="mx-auto max-w-2xl">
      <div class="mb-8 text-center">
        <h1 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          {{ singleUser.name }}
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          @{{ singleUser.username }}
        </p>
      </div>

      <Card class="mb-6">
        <CardHeader>
          <CardTitle class="flex items-center gap-2">
            <IconUser2 class="h-5 w-5" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label class="text-sm font-medium text-gray-500">Email</Label>
              <p class="text-gray-900 dark:text-white">
                {{ singleUser.email }}
              </p>
            </div>
            <div>
              <Label class="text-sm font-medium text-gray-500">Phone</Label>
              <p class="text-gray-900 dark:text-white">
                {{ singleUser.phone }}
              </p>
            </div>
            <div>
              <Label class="text-sm font-medium text-gray-500">Website</Label>
              <p class="text-gray-900 dark:text-white">
                {{ singleUser.website }}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card class="mb-6">
        <CardHeader>
          <CardTitle class="flex items-center gap-2">
            <IconMapPin class="h-5 w-5" />
            Address
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label class="text-sm font-medium text-gray-500">Street</Label>
              <p class="text-gray-900 dark:text-white">
                {{ singleUser.address.street }}
              </p>
            </div>
            <div>
              <Label class="text-sm font-medium text-gray-500">Suite</Label>
              <p class="text-gray-900 dark:text-white">
                {{ singleUser.address.suite }}
              </p>
            </div>
            <div>
              <Label class="text-sm font-medium text-gray-500">City</Label>
              <p class="text-gray-900 dark:text-white">
                {{ singleUser.address.city }}
              </p>
            </div>
            <div>
              <Label class="text-sm font-medium text-gray-500">Zipcode</Label>
              <p class="text-gray-900 dark:text-white">
                {{ singleUser.address.zipcode }}
              </p>
            </div>
            <div class="md:col-span-2">
              <Label class="text-sm font-medium text-gray-500"
                >Coordinates</Label
              >
              <p class="text-gray-900 dark:text-white">
                Lat: {{ singleUser.address.geo.lat }}, Lng:
                {{ singleUser.address.geo.lng }}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle class="flex items-center gap-2">
            <IconBuilding class="h-5 w-5" />
            Company
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-4">
          <div>
            <Label class="text-sm font-medium text-gray-500"
              >Company Name</Label
            >
            <p class="text-gray-900 dark:text-white">
              {{ singleUser.company.name }}
            </p>
          </div>
          <div>
            <Label class="text-sm font-medium text-gray-500"
              >Catch Phrase</Label
            >
            <p class="text-gray-900 italic dark:text-white">
              {{ singleUser.company.catchPhrase }}
            </p>
          </div>
          <div>
            <Label class="text-sm font-medium text-gray-500">Business</Label>
            <p class="text-gray-900 dark:text-white">
              {{ singleUser.company.bs }}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
    <div v-else-if="loading" class="flex h-64 items-center justify-center">
      <div
        class="border-primary h-12 w-12 animate-spin rounded-full border-b-2"
      />
    </div>
  </div>
</template>
