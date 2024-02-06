import React from 'react'
import { Entypo } from '@expo/vector-icons';

type IExpIcon = {
  size?: number
  color?: `#${string}`
}

export const ExpIcon = ({ size = 25, color = '#4C4940' }: IExpIcon) => {
  return (
      <Entypo name="arrow-with-circle-up" size={size} color={color} />
  )
}