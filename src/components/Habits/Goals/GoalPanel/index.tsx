import React from 'react'
import { Container, Content } from './styled'
import { AnimatedPanel } from '../../../Panels/AnimatedPanel'
import { SoloPanel } from '../../../Panels/SoloPanel'

export const GoalPanel = ({ children, title, isTabOpen }: { children: React.ReactNode, title: string, isTabOpen: boolean }) => {
  return (
    <Container>
      <AnimatedPanel isTabOpen={isTabOpen}>
        <SoloPanel title={title}>
          <Content>
            {children}
          </Content>
        </SoloPanel>
      </AnimatedPanel>
    </Container>
  )
}