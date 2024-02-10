import { EXP_INCREMENT } from "@/constant/habitConsts";
import { HabitDifficulty } from "@/types/types";

export const getExpByProgress = (progress: number, difficulty: HabitDifficulty) => {
  return progress * EXP_INCREMENT[difficulty]
}