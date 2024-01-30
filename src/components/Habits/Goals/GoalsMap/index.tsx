import { ListRenderItemInfo } from 'react-native'
import React from 'react'
import { GoalPanel } from '../GoalPanel'
import { Goal } from './Goal'
import { GoalsContainer, StyledFlatList } from './styled'
import { IGoal, IGoals } from '@/types/types'

type IGoalsMap = {
  goals: IGoals
  focusedItemIndex: number
  openEditor: (index: number) => void
  changeFocusedItem: (index: number) => void
}

export const GoalsMap = ({ goals, focusedItemIndex, openEditor, changeFocusedItem }: IGoalsMap) => {
  return (
    <GoalPanel title={"▣ Map"}>
      <GoalsContainer>
        <StyledFlatList
          data={goals}
          renderItem={({ item, index }: ListRenderItemInfo<IGoal>) =>
            <Goal 
              isFocused={(focusedItemIndex == index)}
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