import React from 'react'
import { TerminalPanelView, TerminalPanelTitle } from './styled'

type ITerminalPanel = {
  title?: string | undefined
  children: React.ReactNode
}

export const TerminalPanel = ({ title = undefined, children}: ITerminalPanel) => {
  return (
    <TerminalPanelView>
      {title &&
        <TerminalPanelTitle
          text={title}
          duration={400}
          delay={700}
          velocity={1}
          typingChar='|'
        />
      }
      {children}
    </TerminalPanelView>
  )
}