import React from 'react'
import { Entypo } from '@expo/vector-icons';

type ILevelIcon = {
  size?: number
  color?: `#${string}`
}

export const LevelIcon = ({ size = 25, color = '#4C4940' }: ILevelIcon) => {
  return (
      <Entypo name="arrow-with-circle-up" size={size} color={color} />
  )
}