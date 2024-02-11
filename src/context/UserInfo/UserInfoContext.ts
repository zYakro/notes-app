import { IUserInfoContext } from "@/types/types";
import { createContext } from "react";

export const UserInfoContext = createContext<IUserInfoContext>({
  userInfo: {
    email: '',
    coins: 0,
    exp: 0,
    preferences: {
      background: 'light-screen.jpg',
      theme: 'main-theme',
    }
  },
  changeUserPreference: () => { },
  setExp: () => { },
  setCoins: () => { }
})