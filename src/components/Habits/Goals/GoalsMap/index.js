import { View, Text } from 'react-native'
import React from 'react'
import { GoalPanel } from '../GoalPanel'
import { Goal } from './Goal'
import { GoalsContainer, StyledFlatList } from './styled.js'

export const GoalsMap = ({ goals, focusedItem, onPress, onLongPress }) => {
  return (
    <GoalPanel title={"▣ Map"}>
      <GoalsContainer>
        <StyledFlatList
          data={goals}
          renderItem={({ item }) =>
            <Goal 
              isFocused={(focusedItem.id == item.id)}
              onPress={onPress}
              onLongPress={onLongPress}
              item={item}
            />
          }
          keyExtractor={item => item.id}
        />
      </GoalsContainer>
    </GoalPanel>
  )
}