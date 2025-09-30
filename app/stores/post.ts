import type { Post } from '~/composables/@types/postType';

export const usePostStore = defineStore('post', () => {
  const posts = ref<Post[]>([]);
  const loading = ref(false);

  const { fetchPosts } = usePosts();

  async function loadPosts() {
    loading.value = true;
    try {
      posts.value = await fetchPosts();
    } catch (err) {
      console.error(err);
    } finally {
      loading.value = false;
    }
  }

  return { posts, loading, loadPosts };
});
