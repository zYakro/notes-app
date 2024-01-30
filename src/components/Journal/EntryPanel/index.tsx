import { SoloPanel } from '../../Panels/SoloPanel'
import { EntryPanelContainer, ViewContainer } from './styled'
import { AnimatedPanelOnFocus } from '../../Panels/AnimatedPanelOnFocus'
import React from 'react'

type IEntryPanel = {
  title: string
  children: React.ReactNode
}

export const EntryPanel = ({ title, children }: IEntryPanel) => {
  return (
    <ViewContainer>
      <EntryPanelContainer>
        <AnimatedPanelOnFocus>
          <SoloPanel title={title}>
            {children}
          </SoloPanel>
        </AnimatedPanelOnFocus>
      </EntryPanelContainer>
    </ViewContainer>
  )
}