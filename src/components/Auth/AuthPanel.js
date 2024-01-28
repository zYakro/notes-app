import React from 'react'
import { AuthPanelContainer, ContentContainer } from './styled'
import { AnimatedPanel } from '../Panels/AnimatedPanel'
import { BasicPanel } from '../Panels/BasicPanel'

export const AuthPanel = ({ title, children, isTabOpen }) => {
  return (
    <AuthPanelContainer>
      <AnimatedPanel isTabOpen={isTabOpen}>
        <BasicPanel
          title={title}
        >
          <ContentContainer>
            {children}
          </ContentContainer>
        </BasicPanel>
      </AnimatedPanel>
    </AuthPanelContainer>
  )
}