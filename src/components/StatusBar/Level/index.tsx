import React from 'react'
import { IconContainer, IconText } from '../StatusBarIcon';
import { LevelIcon } from '@/components/Icons/LevelIcon';

export const Level = () => {
  const iconColor = '#4C4940'

  return (
    <IconContainer>
      <LevelIcon size={18} color={iconColor} />
      <IconText color={iconColor}>10</IconText>
    </IconContainer>
  )
}
