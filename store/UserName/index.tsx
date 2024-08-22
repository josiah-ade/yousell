import { create } from "zustand";

interface UserProps {
  userName: string;
  addUserName: (search: string) => void;
}

export const useUserNameStore = create<UserProps>((set) => ({
  userName: "",
  addUserName: (newUser: string) => set({ userName: newUser }),
}));
