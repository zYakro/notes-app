import { useIsFocused } from '@react-navigation/native'
import React from 'react'
import { AnimatedPanel } from '../AnimatedPanel'

type IAnimatedPanelOnFocus = {
  delay?: number
  children: React.ReactNode
}

export const AnimatedPanelOnFocus = ({ delay, children }: IAnimatedPanelOnFocus) => {
  const isFocused = useIsFocused()

  return (
    <AnimatedPanel isTabOpen={isFocused} delay={delay}>
      {children}
    </AnimatedPanel>
  )
}
