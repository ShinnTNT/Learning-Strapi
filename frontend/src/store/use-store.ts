import { create } from "zustand";
import createAuthSlice, { AuthSlice } from "./auth-slice";

const useStore = create<AuthSlice>((...a) => {
  return { ...createAuthSlice(...a) };
});

const useAuthStore = () => {
  const { token, setToken, resetToken } = useStore((state) => ({
    token: state.token,
    setToken: state.setToken,
    resetToken: state.resetToken,
  }));

  return {
    token,
    setToken,
    resetToken,
  };
};

export default useAuthStore;
