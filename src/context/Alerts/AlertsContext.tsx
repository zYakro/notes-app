import { IAlertProviderReturn } from "@/types/types";
import { createContext } from "react";

export const AlertsContext = createContext<IAlertProviderReturn>({
  setAlert: () => {},
  setAreYouSureAlert: () => {}
})