import { useState } from "react"
import { 
  getHabitList as getHabitsFromFirestore,
  getHabitInfo as getHabitInfoFromFirestore,
  updateHabit as updateHabitFromFirestore,
  createHabit as createHabitFromFirestore,
  deleteHabit as deleteHabitFromFirestore
} from "../../services/habits.service"
import { getCurrentServerDate } from "../../utils/firebase/getCurrentServerDate"

export const useHabits = () => {
  const [habitList, setHabitList]= useState([])
  const [currentHabitInfo, setCurrentHabitInfo] = useState({})
  
  const getHabitList = async () => {
    const habits = await getHabitsFromFirestore() 

    setHabitList(habits)
  }

  const getHabitInfo = async (id) => {
    const habitInfo = await getHabitInfoFromFirestore(id) 

    setCurrentHabitInfo(habitInfo)
  }

  const updateHabit = async ({ name, motivation, progress, createdAt, difficulty, goals}) => {
    await updateHabitFromFirestore(currentHabitInfo.id, {
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

  const createHabit = async ({ name, motivation, progress, difficulty, goals}) => {
    const habit = {
      name,
      motivation,
      progress,
      difficulty,
      goals,
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
