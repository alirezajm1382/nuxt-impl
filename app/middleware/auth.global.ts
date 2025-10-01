export default defineNuxtRouteMiddleware((to, from) => {
  const sessionStore = useSessionStore();

  const publicRoutes = ['/auth/login', '/auth/register', '/auth'];

  if (!sessionStore.isAuthenticated && !publicRoutes.includes(to.path)) {
    return navigateTo({ name: 'auth' });
  }

  if (sessionStore.isAuthenticated && publicRoutes.includes(to.path)) {
    return navigateTo({ name: 'index' });
  }
});
