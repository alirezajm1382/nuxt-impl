import type { User } from '~/composables/@types/userType';

export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>([]);
  const loading = ref(false);

  const { fetchUsers } = useUsers();

  async function loadUsers() {
    loading.value = true;
    try {
      users.value = await fetchUsers();
    } catch (err) {
      console.error(err);
    } finally {
      loading.value = false;
    }
  }

  return { users, loading, loadUsers };
});
