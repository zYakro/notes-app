import { SoloPanel } from '../../Panels/SoloPanel'
import { EntryPanelContainer, ViewContainer } from './styled'
import React from 'react'
import { AnimatedPanel } from '@/components/Panels/AnimatedPanel'

type IEntryPanel = {
  title: string
  children: React.ReactNode
  isTabOpen: boolean
}

export const EntryPanel = ({ title, children, isTabOpen}: IEntryPanel) => {
  return (
    <ViewContainer>
      <EntryPanelContainer>
        <AnimatedPanel isTabOpen={isTabOpen}>
          <SoloPanel title={title}>
            {children}
          </SoloPanel>
        </AnimatedPanel>
      </EntryPanelContainer>
    </ViewContainer>
  )
}