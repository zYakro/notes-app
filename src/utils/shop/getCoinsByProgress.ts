import { COINS_INCREMENT } from "@/constant/habitConsts";
import { HabitDifficulty } from "@/types/types";

export const getCoinsByProgress = (progress: number, difficulty: HabitDifficulty) => {
  return progress * COINS_INCREMENT[difficulty]
}