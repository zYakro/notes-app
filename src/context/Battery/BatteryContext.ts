import { canAddBattery } from "@/services/battery.service";
import { IBatteryProviderReturn } from "@/types/types";
import { createContext } from "react";

export const BatteryContext = createContext<IBatteryProviderReturn>({
  battery: 0,
  increaseBattery: () => {},
  canAddBattery : canAddBattery
})