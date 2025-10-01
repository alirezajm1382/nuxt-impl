interface LoginPayload {
  email: string;
  password: string;
}

export const useSessionStore = defineStore(
  'session',
  () => {
    const session = ref<LoginPayload | null>(null);
    const isAuthenticated = ref(false);

    function login(payload: LoginPayload) {
      if (
        payload.email === 'alirezajm@hotmail.com' &&
        payload.password === '12341234'
      ) {
        isAuthenticated.value = true;
        session.value = payload;
        return { message: 'Logged in', success: true };
      } else {
        return {
          message: 'Invalid credentials',
          success: false,
        };
      }
    }

    function logout() {
      isAuthenticated.value = false;
      session.value = null;
      return { message: 'Logged out' };
    }

    return { session, isAuthenticated, login, logout };
  },
  { persist: true },
);
