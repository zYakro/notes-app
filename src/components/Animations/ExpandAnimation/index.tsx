import React from 'react'
import { useExpandAnimation } from '../../../hooks/Animations/useExpandAnimation'
import Animated from 'react-native-reanimated'

interface IExpandAnimation {
  duration: number
  delay: number
  children: React.ReactNode
}

export const ExpandAnimation = ({ children, duration, delay }: IExpandAnimation) => {
  const width = useExpandAnimation({ duration: duration, delay: delay })
  
  return (
    <Animated.View
      style={{
        minWidth: width,
        width: width,
        height: '100%',
      }}
    >
      {children}
    </Animated.View>
  )
}
