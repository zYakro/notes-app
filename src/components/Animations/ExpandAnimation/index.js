import React from 'react'
import { useExpandAnimation } from '../../../hooks/Animations/useExpandAnimation'
import Animated from 'react-native-reanimated'

export const ExpandAnimation = ({ children, duration, delay }) => {
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
