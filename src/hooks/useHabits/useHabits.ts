import { useContext, useState } from "react"
import {
  getHabitList as getHabitsFromFirestore,
  getHabitInfo as getHabitInfoFromFirestore,
  updateHabit as updateHabitFromFirestore,
  createHabit as createHabitFromFirestore,
  deleteHabit as deleteHabitFromFirestore
} from "../../services/habits.service"
import { getCurrentServerDate } from "../../utils/firebase/getCurrentServerDate"
import { HabitDifficulty, IGoals, IHabitInfo, IHabitList } from "@/types/types"
import { AlertsContext } from "@/context/Alerts/AlertsContext"

type ICreateHabit = {
  name: string
  motivation: string
  difficulty: HabitDifficulty
  goals: IGoals
  progress: number
  createdAt: Date
}

export const useHabits = () => {
  const { setAlert } = useContext(AlertsContext)

  const [habitList, setHabitList] = useState<IHabitList>([])
  const [currentHabitInfo, setCurrentHabitInfo] = useState<IHabitInfo>()

  const getHabitList = async () => {
    try {
      const habits = await getHabitsFromFirestore()

      setHabitList(habits)
    } catch (err) {
      setAlert({
        title: 'Database error',
        message: err.message
      })
    }
  }

  const getHabitInfo = async (id: string) => {
    try {
      const habitInfo = await getHabitInfoFromFirestore(id)

      setCurrentHabitInfo(habitInfo)
    } catch (err) {
      setAlert({
        title: 'Database error',
        message: err.message
      })
    }
  }

  const updateHabit = async ({ name, motivation, progress, createdAt, difficulty, goals }: IHabitInfo): Promise<boolean> => {
    try {
      if (!name) {
        setAlert({ title: 'Set a name', message: 'You have to set a name for your habit!' })
        return false;
      }

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
        if (item.id === currentHabitInfo.id) {
          return {
            id: item.id,
            name,
            progress,
            createdAt
          }
        }
        return item;
      }))

      return true;
    } catch (err) {
      setAlert({
        title: 'Database error',
        message: err.message
      })

      return false;
    }
  }

  const createHabit = async ({ name, motivation, progress, difficulty, goals }: ICreateHabit): Promise<boolean> => {
    try {
      if (!name) {
        setAlert({ title: 'Set a name', message: 'You have to set a name for your habit!' })
        return false;
      }

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

      return true;
    } catch (err) {
      setAlert({
        title: 'Database error',
        message: err.message
      })

      return false;
    }
  }

  const deleteHabit = async () => {
    try {
      await deleteHabitFromFirestore(currentHabitInfo.id)

      setHabitList(habitList.filter(habit => {
        return habit.id !== currentHabitInfo.id
      }))
    } catch (err) {
      setAlert({
        title: 'Database error',
        message: err.message
      })
    }
  }

  return {
    habitList,
    currentHabitInfo,
    getHabitList,
    getHabitInfo,
    updateHabit,
    createHabit,
    deleteHabit
  }
}
