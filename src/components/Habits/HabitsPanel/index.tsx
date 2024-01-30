import React from 'react'
import { HabitsPanelContainer } from './styled'
import { AnimatedPanelOnFocus } from '../../Panels/AnimatedPanelOnFocus'
import { BasicPanel } from '../../Panels/BasicPanel'

export const HabitsPanel = ({ children, title }: { children: React.ReactNode, title: string}) => {
  return (
    <HabitsPanelContainer>
      <AnimatedPanelOnFocus>
        <BasicPanel title={title}>
          {children}
        </BasicPanel>
      </AnimatedPanelOnFocus>
    </HabitsPanelContainer>
  )
}