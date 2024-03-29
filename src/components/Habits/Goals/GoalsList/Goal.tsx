import React, { useEffect } from 'react'
import { AnimatedViewContainer, ButtonContainer, StyledText } from './styled'
import { MaterialIcons } from '@expo/vector-icons';
import { useColorTransition } from '../../../../hooks/Animations/useColorTransition';
import { useTheme } from 'styled-components';
import { icons } from '../../../../utils/goals/icons';
import { IGoal } from '@/types/types';

type IGoalParams = {
  isFocused: boolean
  onPress: () => void
  onLongPress: () => void
  goal: IGoal
}

export const Goal = ({ isFocused, onPress, goal, onLongPress }: IGoalParams) => {
  const theme = useTheme()

  const color = (isFocused) ? theme.backgroundColor : theme.text.color

  const [transitionStyle, startAnimation] = useColorTransition({
    properties: 'backgroundColor',
    duration: 250,
    colors: ['transparent', '#4C4940']
  });

  const currentIcon = icons[goal.icon]({ size: 16, color: color })

  useEffect(() => {
    if (isFocused) {
      return startAnimation(true)
    }
    return startAnimation(false)
  }, [isFocused])

  return (
    <ButtonContainer onPress={onPress} onLongPress={onLongPress} isFocused={isFocused} >
      <AnimatedViewContainer
        style={transitionStyle}
      >
        {currentIcon}
        <StyledText color={color} isCompleted={goal.isCompleted}>
          {goal.name}
        </StyledText>
      </AnimatedViewContainer>
    </ButtonContainer>
  )
}