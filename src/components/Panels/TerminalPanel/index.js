import { View, Text } from 'react-native'
import React from 'react'
import { TerminalPanelView, TerminalPanelTitle } from './styled'

export const TerminalPanel = ({ title = undefined, children}) => {
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