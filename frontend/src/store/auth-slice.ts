import { StateCreator } from "zustand";
import Cookie from "js-cookie";

const authToken = Cookie.get("token");

export interface AuthSlice {
  token: string;
  setToken: (token: string) => void;
  resetToken: () => void;
}

const createAuthSlice: StateCreator<AuthSlice> = (set) => {
  return {
    token: authToken ? authToken : "",
    setToken: (token: string) => {
      Cookie.set("token", token);
      set((state) => ({
        ...state,
        token,
      }));
    },
    resetToken: () => {
      Cookie.remove("token");
      set((state) => ({
        ...state,
        token: "",
      }));
    },
  };
};

export default createAuthSlice;
