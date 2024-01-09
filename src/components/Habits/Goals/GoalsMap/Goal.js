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

export const Goal = ({ onPress, onLongPress, item, isFocused }) => {
  const theme = useTheme()

  const iconColor = (item.isCompleted || isFocused) ? theme.text.color : theme.disabledColor

  const currentIcon = icons[item.icon]({ size: 12, color: iconColor })

  return (
    <TouchableContainer onPress={() => onPress(item)} onLongPress={() => onLongPress(item)}>
      <Content>
        <IconContainer>
          <IconBorder color={iconColor}>
            {currentIcon}
          </IconBorder>
          {
            isFocused &&
            <GoalInfo name={"01/05/24"} />
          }
        </IconContainer>
        <Line isCompleted={item.isCompleted} />
      </Content>
    </TouchableContainer>
  )
}