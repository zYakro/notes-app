import React from 'react'
import { TouchableContainer, Content, IconContainer, InfoText, InfoTextContainer, InfoTextScroll, Line, IconBorder } from './styled'
import { useTheme } from 'styled-components';
import { icons } from '../../../../utils/goals/icons';

const GoalInfo = ({ name }) => {
  return (
    <InfoTextContainer >
      <InfoTextScroll>
        <InfoText
          text={name}
          duration={400}
          typingChar='|'
          velocity={1}
        />
      </InfoTextScroll>
    </InfoTextContainer>
  )
}

export const Goal = ({ onPress, onLongPress, goal, isFocused }) => {
  const theme = useTheme()

  const iconColor = (goal.isCompleted || isFocused) ? theme.text.color : theme.disabledColor

  const currentIcon = icons[goal.icon]({ size: 12, color: iconColor })

  const getDate = () => {
    return goal.completedAt.toLocaleString(undefined, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }) 
  }

  return (
    <TouchableContainer onPress={() => onPress(goal)} onLongPress={() => onLongPress(goal)}>
      <Content>
        <IconContainer>
          <IconBorder color={iconColor}>
            {currentIcon}
          </IconBorder>
          {
            isFocused &&
            <GoalInfo name={getDate()} />
          }
        </IconContainer>
        <Line isCompleted={goal.isCompleted} />
      </Content>
    </TouchableContainer>
  )
}