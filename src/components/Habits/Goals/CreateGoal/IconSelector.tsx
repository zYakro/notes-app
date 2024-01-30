import React from 'react'
import { IconItem, IconList, IconSelectorContainer } from './styled'
import { icons } from '../../../../utils/goals/icons'
import { GoalIcons } from '@/types/types'

export const IconSelector = ({ onIconPress = () => {} }: {onIconPress?: (icon: GoalIcons) => void}) => {
  const iconProps = {
    size: 18,
    color: '#4C4940'
  }

  return (
    <IconSelectorContainer>
      <IconList horizontal>
        {Object.keys(icons).map((iconName: GoalIcons) => (
          <IconItem key={iconName} onPress={() => onIconPress(iconName)}>
            {icons[iconName](iconProps)}
          </IconItem>
        ))}
      </IconList>
    </IconSelectorContainer>
  )
}
