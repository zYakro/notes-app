import React, { useContext, useState } from 'react'
import { getCurrentServerDate } from '../../utils/firebase/getCurrentServerDate'
import { GoalIcons, IGoals } from '@/types/types'
import { AlertsContext } from '@/context/Alerts/AlertsContext'

export const useGoals = (goals: IGoals, setGoals: React.Dispatch<React.SetStateAction<IGoals>>) => {
  const { setAlert } = useContext(AlertsContext)

  const [currentIndex, setCurrentIndex] = useState(0)

  const createGoal = (name: string, description: string, icon: GoalIcons): boolean => {
    if (!name) {
      setAlert({ title: 'Set a name', message: 'You have to set a name for your goal' })
      return false;
    }

    setGoals([
      ...goals,
      {
        name,
        description,
        icon,
        isCompleted: false,
        completedAt: getCurrentServerDate(),
        createdAt: getCurrentServerDate()
      }
    ])

    return true;
  }

  const editGoal = (name: string, description: string, icon: GoalIcons, isCompleted: boolean): boolean => {
    if (!name) {
      setAlert({ title: 'Set a name', message: 'You have to set a name for your goal' })
      return false;
    }

    // Replaces the habit in the focused item index with the new data
    setGoals(goals.map((item, index) => {
      if (index === currentIndex) {
        const hasBeenCompleted = (item.isCompleted !== isCompleted)

        return {
          name,
          description,
          icon,
          isCompleted: isCompleted,
          completedAt: (hasBeenCompleted) ? getCurrentServerDate() : item.completedAt,
          createdAt: item.createdAt,
        }
      }
      return item;
    }))

    return true;
  }

  const deleteGoal = () => {
    setGoals(goals.filter((_, index) => {
      return index !== currentIndex
    }))
  }

  return {
    currentIndex,
    setCurrentIndex,
    createGoal,
    editGoal,
    deleteGoal
  }
}
