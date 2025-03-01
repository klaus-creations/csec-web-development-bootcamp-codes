import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useSignupInfo = create(
  immer((set) => ({
    credentials: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    handleInformation: {
      leetcode: "",
      codeforces: "",
      github: "",
    },
    personalInformation: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    setPersonalInformation: (info) =>
      set((state) => {
        state.personalInformation = info;
      }),
    setHandleInformation: (info) =>
      set((state) => {
        state.handleInformation = info;
      }),
    setCredentialsInformation: (info) =>
      set((state) => {
        state.credentials = info;
      }),
  }))
);
