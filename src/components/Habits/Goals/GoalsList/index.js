import React from 'react'
import { GoalListContainer, GoalsFlatlist } from './styled'
import { Goal } from './Goal'
import { GoalPanel } from '../GoalPanel'
import { AddFAB } from '../../../Panels/AddFAB'

export const GoalsList = ({ goals, changeFocusedItem, openEditor, focusedItemIndex, onCreateModal }) => {
  return (
    <GoalPanel title={"▣ Goals"}>
      <GoalListContainer>
        <GoalsFlatlist
          data={goals}
          renderItem={({ item, index }) =>
            <Goal
              item={item}
              onPress={() => changeFocusedItem(index)}
              onLongPress={() => openEditor(index)}
              isFocused={(focusedItemIndex === index)}
            />
          }
          keyExtractor={(_, index) => index}
        />
        <AddFAB onPress={onCreateModal} iconSize={25}/>
      </GoalListContainer>
    </GoalPanel>
  )
}