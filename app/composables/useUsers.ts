import type { User } from '~/composables/@types/userType';

export const useUsers = () => {
  const fetchUsers = async () => {
    return await $fetch<User[]>('https://jsonplaceholder.typicode.com/users');
  };
  const fetchUser = async (userId?: string) => {
    if (!userId) return;
    return await $fetch<User[]>('https://jsonplaceholder.typicode.com/users', {
      params: {
        id: userId,
      },
    }).then((data) => data[0]);
  };

  return { fetchUsers, fetchUser };
};
