import type { Post, PostWithUser } from '~/composables/@types/postType';

export const usePosts = () => {
  const fetchPosts = async () => {
    return await $fetch<Post[]>('https://jsonplaceholder.typicode.com/posts');
  };

  const fetchPost = async (postId: string) => {
    const { fetchUser } = useUsers();
    return await $fetch<Post[]>('https://jsonplaceholder.typicode.com/posts', {
      params: {
        id: postId,
      },
    }).then(async (data) => {
      const user = await fetchUser(data[0]?.userId.toString());
      return { ...data[0], ...user } as PostWithUser;
    });
  };

  return { fetchPosts, fetchPost };
};
