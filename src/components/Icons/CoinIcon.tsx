import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

type ICoinIcon = {
  size?: number
  color?: `#${string}`
}

export const CoinIcon = ({ size = 25, color = '#4C4940' }: ICoinIcon) => {
  return (
    <MaterialCommunityIcons name="bitcoin" size={size} color={color}/>
  )
}