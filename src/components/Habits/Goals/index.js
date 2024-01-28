import React, { useState } from 'react'
import { GoalsContainer } from './styled'
import { GoalsList } from './GoalsList'
import { GoalsMap } from './GoalsMap'
import { GoalEditor } from './GoalEditor'
import { CreateGoal } from './CreateGoal'
import { useGoals } from '../../../hooks/useGoals/useGoals'

export const Goals = ({ goals, setGoals }) => {
  const {
    currentIndex,
    setCurrentIndex,
    createGoal,
    editGoal,
    deleteGoal
  } = useGoals(goals, setGoals)

  const [isEditorVisible, setIsEditorVisible] = useState(false)
  const [isCreateGoalVisible, setIsCreateGoalVisible] = useState(false)

  const closeEditor = () => {
    setIsEditorVisible(false)
  }

  const openEditor = (index) => {
    setCurrentIndex(index)
    setIsEditorVisible(true)
  }

  const closeCreateGoal = () => {
    setIsCreateGoalVisible(false)
  }

  const openCreateGoal = () =>{
    setIsCreateGoalVisible(true)
  }

  return (
    <GoalsContainer>
      <GoalsList
        goals={goals}
        changeFocusedItem={setCurrentIndex}
        openEditor={openEditor}
        onCreateModal={openCreateGoal}
        focusedItemIndex={currentIndex} />
      <GoalsMap
        goals={goals}
        changeFocusedItem={setCurrentIndex}
        openEditor={openEditor}
        focusedItemIndex={currentIndex} />
      { 
        isEditorVisible &&
        <GoalEditor
          goal={goals[currentIndex]} 
          closeModal={closeEditor} 
          deleteGoal={deleteGoal}
          editGoal={editGoal}
        />
      }
      { 
        isCreateGoalVisible && 
        <CreateGoal
          closeModal={closeCreateGoal} 
          createGoal={createGoal}
        />
      }
    </GoalsContainer>
  )
}