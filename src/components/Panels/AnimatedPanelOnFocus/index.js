import { useIsFocused } from '@react-navigation/native'
import React from 'react'
import { AnimatedPanel } from '../AnimatedPanel'

export const AnimatedPanelOnFocus = ({ delay, children }) => {
  const isFocused = useIsFocused()

  return (
    <AnimatedPanel isTabOpen={isFocused} delay={delay}>
      {children}
    </AnimatedPanel>
  )
}
