import { IUserInfoContext } from "@/types/types";
import { createContext } from "react";

export const UserInfoContext = createContext<IUserInfoContext>({
  userInfo: {
    background: 'light-screen.jpg',
    theme: 'main-theme'
  },
  changeUserInfo: () => {}
})