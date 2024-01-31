import React from 'react'
import { GoalListContainer, GoalsFlatlist } from './styled'
import { Goal } from './Goal'
import { GoalPanel } from '../GoalPanel'
import { AddFAB } from '../../../Panels/AddFAB'
import { IGoal, IGoals } from '@/types/types'
import { ListRenderItemInfo } from 'react-native'

type IGoalsList = {
  goals: IGoals
  changeFocusedItem: (index: number) => void
  openEditor: (index: number) => void
  onCreateModal: () => void
  currentIndex: number
  isTabOpen: boolean
}

export const GoalsList = ({ goals, changeFocusedItem, openEditor, currentIndex, onCreateModal, isTabOpen }: IGoalsList) => {
  return (
    <GoalPanel title={"▣ Goals"} isTabOpen={isTabOpen}>
      <GoalListContainer>
        <GoalsFlatlist
          data={goals}
          renderItem={({ item, index }: ListRenderItemInfo<IGoal>) =>
            <Goal
              goal={item}
              onPress={() => changeFocusedItem(index)}
              onLongPress={() => openEditor(index)}
              isFocused={(currentIndex === index)}
            />
          }
          keyExtractor={(_, index) => index.toString()}
        />
        <AddFAB onPress={onCreateModal} iconSize={25} />
      </GoalListContainer>
    </GoalPanel>
  )
}