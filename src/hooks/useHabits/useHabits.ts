import { useState } from "react"
import { 
  getHabitList as getHabitsFromFirestore,
  getHabitInfo as getHabitInfoFromFirestore,
  updateHabit as updateHabitFromFirestore,
  createHabit as createHabitFromFirestore,
  deleteHabit as deleteHabitFromFirestore
} from "../../services/habits.service"
import { getCurrentServerDate } from "../../utils/firebase/getCurrentServerDate"
import { HabitDifficulty, IGoals, IHabitInfo, IHabitList } from "@/types/types"

type ICreateHabit = {
  name: string
  motivation: string
  difficulty: HabitDifficulty
  goals: IGoals
  progress: number
  createdAt: Date 
}

export const useHabits = () => {
  const [habitList, setHabitList] = useState<IHabitList>([])
  const [currentHabitInfo, setCurrentHabitInfo] = useState<IHabitInfo>()
  
  const getHabitList = async () => {
    const habits = await getHabitsFromFirestore() 

    setHabitList(habits)
  }

  const getHabitInfo = async (id: string) => {
    const habitInfo = await getHabitInfoFromFirestore(id) 

    setCurrentHabitInfo(habitInfo)
  }

  const updateHabit = async ({ name, motivation, progress, createdAt, difficulty, goals}: IHabitInfo) => {
    await updateHabitFromFirestore({
      id: currentHabitInfo.id,
      name,
      motivation,
      progress,
      createdAt,
      difficulty,
      goals
    })

    setHabitList(habitList.map(item => {
      if(item.id === currentHabitInfo.id){
        return {
          id: item.id,
          name, 
          progress,
          createdAt
        }
      }
      return item;
    }))
  }

  const createHabit = async ({ name, motivation, progress, difficulty, goals}: ICreateHabit) => {
    const habit = {
      name,
      motivation,
      progress,
      difficulty,
      goals,
      completedAt: getCurrentServerDate(),
      createdAt: getCurrentServerDate()
    }

    const id = await createHabitFromFirestore(habit)

    setHabitList([
      ...habitList, 
      {
        id: id,
        ...habit
      }
    ])
  }

  const deleteHabit = async () => {
    await deleteHabitFromFirestore(currentHabitInfo.id)

    setHabitList(habitList.filter(habit => {
      return habit.id !== currentHabitInfo.id
    }))
  }

  return{
    habitList,
    currentHabitInfo,
    getHabitList,
    getHabitInfo,
    updateHabit,
    createHabit,
    deleteHabit
  }
}
