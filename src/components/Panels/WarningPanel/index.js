import { View, Text } from 'react-native'
import React from 'react'
import { Container, FadeInOutContent } from './styled'
import { DraggablePanel } from '../DraggablePanel'

export const WarningPanel = ({ children, title, isTabOpen, style }) => {
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