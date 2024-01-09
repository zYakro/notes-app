import React from 'react'
import { GoalListContainer, GoalsFlatlist } from './styled'
import { Goal } from './Goal'
import { GoalPanel } from '../GoalPanel'
import { AddGoalIcon } from './AddGoalIcon'

export const GoalsList = ({ goals, onPress, onLongPress, focusedItem, onCreateModal }) => {
  return (
    <GoalPanel title={"▣ Goals"}>
      <GoalListContainer>
        <GoalsFlatlist
          data={goals}
          renderItem={({ item }) =>
            <Goal
              item={item}
              onPress={onPress}
              onLongPress={onLongPress}
              isFocused={(focusedItem.id === item.id)}
            />
          }
          keyExtractor={item => item.id}
        />
        <AddGoalIcon onPress={onCreateModal} />
      </GoalListContainer>
    </GoalPanel>
  )
}