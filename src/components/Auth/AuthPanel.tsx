import React from 'react'
import { AuthPanelContainer, ContentContainer, ViewContainer } from './styled'
import { AnimatedPanel } from '../Panels/AnimatedPanel'
import { BasicPanel } from '../Panels/BasicPanel'
import { AnimatedPanelOnFocus } from '../Panels/AnimatedPanelOnFocus'

interface AuthPanelProps {
  title: string
  children: React.ReactNode
}

export const AuthPanel = ({ title, children }: AuthPanelProps) => {
  return (
    <ViewContainer>
      <AuthPanelContainer>
        <AnimatedPanelOnFocus>
          <BasicPanel title={title}>
            <ContentContainer>
              {children}
            </ContentContainer>
          </BasicPanel>
        </AnimatedPanelOnFocus>
      </AuthPanelContainer>
    </ViewContainer>
  )
}