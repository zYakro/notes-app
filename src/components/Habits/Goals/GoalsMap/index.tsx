import { ListRenderItemInfo } from 'react-native'
import React from 'react'
import { GoalPanel } from '../GoalPanel'
import { Goal } from './Goal'
import { GoalsContainer, StyledFlatList } from './styled'
import { IGoal, IGoals } from '@/types/types'

type IGoalsMap = {
  goals: IGoals
  currentIndex: number
  openEditor: (index: number) => void
  changeFocusedItem: (index: number) => void
  isTabOpen: boolean
}

export const GoalsMap = ({ goals, currentIndex, openEditor, changeFocusedItem, isTabOpen }: IGoalsMap) => {
  return (
    <GoalPanel title={"▣ Map"} isTabOpen={isTabOpen}>
      <GoalsContainer>
        <StyledFlatList
          data={goals}
          renderItem={({ item, index }: ListRenderItemInfo<IGoal>) =>
            <Goal 
              isFocused={(currentIndex == index)}
              onPress={() => changeFocusedItem(index)}
              onLongPress={() => openEditor(index)}
              goal={item}
            />
          }
          keyExtractor={(_, index) => index.toString()}
        />
      </GoalsContainer>
    </GoalPanel>
  )
}