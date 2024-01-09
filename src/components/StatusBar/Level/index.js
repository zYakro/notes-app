import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { IconContainer, IconText } from '../StatusBarIcon';

export const Level = () => {
  const iconColor = '#4C4940'

  return (
    <IconContainer>
      <Entypo name="arrow-with-circle-up" size={18} color={iconColor} />
      <IconText color={iconColor}>10</IconText>
    </IconContainer>
  )
}
