import { useContext, useState } from "react"
import {
  getHabitList as getHabitsFromFirestore,
  getHabitInfo as getHabitInfoFromFirestore,
  updateHabit as updateHabitFromFirestore,
  createHabit as createHabitFromFirestore,
  deleteHabit as deleteHabitFromFirestore
} from "../../services/habits.service"
import { HabitDifficulty, IGoals, IHabitInfo, IHabitList } from "@/types/types"
import { AlertsContext } from "@/context/Alerts/AlertsContext"
import { UserInfoContext } from "@/context/UserInfo/UserInfoContext"
import { getCoinsByProgress } from "@/utils/shop/getCoinsByProgress"
import { getExpByProgress } from "@/utils/shop/getExpByProgress"

type ICreateHabit = {
  name: string
  motivation: string
  difficulty: HabitDifficulty
  goals: IGoals
  progress: number
  createdAt: Date
}

export const useHabits = () => {
  const { userInfo, setCoins, setExp} = useContext(UserInfoContext)
  const { setAlert } = useContext(AlertsContext)

  const [isListLoaded, setIsListLoaded] = useState(false)
  const [habitList, setHabitList] = useState<IHabitList>([])
  const [currentHabitInfo, setCurrentHabitInfo] = useState<IHabitInfo>()

  const getHabitList = async (): Promise<boolean> => {
    try {
      setIsListLoaded(false)

      const habits = await getHabitsFromFirestore()

      setHabitList(habits)

      setIsListLoaded(true)

      return true
    } catch (err) {
      setAlert({
        title: 'Database error',
        message: err.message
      })

      setIsListLoaded(true)

      return false
    }
  }

  const getHabitInfo = async (id: number) => {
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

  const updateHabit = async ({ name, motivation, progress, difficulty, goals }: IHabitInfo): Promise<boolean> => {
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
        difficulty,
        goals
      })

      setHabitList(habitList.map(item => {
        if (item.id === currentHabitInfo.id) {
          return {
            id: item.id,
            name,
            progress,
          }
        }
        return item;
      }))

      setCoins(userInfo.coins + getCoinsByProgress(progress - currentHabitInfo.progress, difficulty))
      setExp(userInfo.exp + getExpByProgress(progress - currentHabitInfo.progress, difficulty))

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
    isListLoaded,
    getHabitList,
    getHabitInfo,
    updateHabit,
    createHabit,
    deleteHabit
  }
}
