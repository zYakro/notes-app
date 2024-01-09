import React from 'react'
import { Container, Content } from './styled'
import { AnimatedPanel } from '../../../Panels/AnimatedPanel'
import { SoloPanel } from '../../../Panels/SoloPanel'
import { AnimatedPanelOnFocus } from '../../../Panels/AnimatedPanelOnFocus'

export const GoalPanel = ({ children, title }) => {
  return (
    <Container>
      <AnimatedPanelOnFocus>
        <SoloPanel title={title}>
          <Content>
            { children }
          </Content>
        </SoloPanel>
      </AnimatedPanelOnFocus>
    </Container>
  )
}