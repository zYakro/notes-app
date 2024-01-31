import React from 'react'
import { HabitsPanelContainer } from './styled'
import { AnimatedPanelOnFocus } from '../../Panels/AnimatedPanelOnFocus'
import { BasicPanel } from '../../Panels/BasicPanel'
import { AnimatedPanel } from '@/components/Panels/AnimatedPanel'

export const HabitsPanel = ({ isTabOpen = true, children, title }: { children: React.ReactNode, title: string, isTabOpen?: boolean}) => {
  return (
    <HabitsPanelContainer>
      <AnimatedPanel isTabOpen={isTabOpen}>
        <BasicPanel title={title}>
          {children}
        </BasicPanel>
      </AnimatedPanel>
    </HabitsPanelContainer>
  )
}