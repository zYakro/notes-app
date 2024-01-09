import React from 'react'
import { SystemBootPanelContainer, SystemBootPanelTitle, SystemBootPanelView } from './styled'
import { AnimatedPanel } from '../../Panels/AnimatedPanel'
import { TerminalPanel } from '../../Panels/TerminalPanel'

export const SystemBootPanel = ({ title, isTabOpen = true, flex = 1, children }) => {
  return (
    <SystemBootPanelContainer flex={flex}>
      <AnimatedPanel isTabOpen={isTabOpen}>
        <TerminalPanel
          title={title}
        >
          {children}
        </TerminalPanel>
      </AnimatedPanel>
    </SystemBootPanelContainer>
  )
}
