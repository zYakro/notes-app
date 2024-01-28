import React, { useState } from 'react'
import { getCurrentServerDate } from '../../utils/firebase/getCurrentServerDate'

export const useGoals = (goals, setGoals) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const createGoal = (name, description, icon) => {
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
  }

  const editGoal = (name, description, icon, isCompleted) => {
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
