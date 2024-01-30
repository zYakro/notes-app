import { View, Text, ViewStyle } from 'react-native'
import React from 'react'
import { Container, FadeInOutContent } from './styled'
import { DraggablePanel } from '../DraggablePanel'

type WarningPanel = {
  title: string
  isTabOpen: boolean
  style: ViewStyle
  children: React.ReactNode
}

export const WarningPanel = ({ children, title, isTabOpen, style }: WarningPanel) => {
  return (
    <Container style={style}>
      <DraggablePanel title={title} isTabOpen={isTabOpen} delay={800} >
        <FadeInOutContent duration={800} delay={100}>
          {children}
        </FadeInOutContent>
      </DraggablePanel>
    </Container>
  )
}