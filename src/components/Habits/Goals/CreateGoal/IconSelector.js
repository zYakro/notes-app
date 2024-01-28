import React from 'react'
import { Container, IconItem, IconList, IconSelectorContainer } from './styled'
import { icons } from '../../../../utils/goals/icons'

export const IconSelector = ({ onIconPress = () => {} }) => {
  const iconProps = {
    size: 18,
    color: '#4C4940'
  }

  return (
    <IconSelectorContainer>
      <IconList horizontal>
        {Object.keys(icons).map((iconName) => (
          <IconItem key={iconName} onPress={() => onIconPress(iconName)}>
            {icons[iconName](iconProps)}
          </IconItem>
        ))}
      </IconList>
    </IconSelectorContainer>
  )
}
