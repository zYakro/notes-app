import { View, Text } from 'react-native'
import React from 'react'
import { GoalPanel } from '../GoalPanel'
import { Goal } from './Goal'
import { GoalsContainer, StyledFlatList } from './styled.js'

export const GoalsMap = ({ goals, focusedItemIndex, openEditor, changeFocusedItem }) => {
  return (
    <GoalPanel title={"▣ Map"}>
      <GoalsContainer>
        <StyledFlatList
          data={goals}
          renderItem={({ item, index }) =>
            <Goal 
              isFocused={(focusedItemIndex == index)}
              onPress={() => changeFocusedItem(index)}
              onLongPress={() => openEditor(index)}
              goal={item}
            />
          }
          keyExtractor={(_, index) => index}
        />
      </GoalsContainer>
    </GoalPanel>
  )
}