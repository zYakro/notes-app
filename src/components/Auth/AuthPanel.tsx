import React from 'react'
import { AuthPanelContainer, ContentContainer, ViewContainer } from './styled'
import { AnimatedPanel } from '../Panels/AnimatedPanel'
import { BasicPanel } from '../Panels/BasicPanel'
import { AnimatedPanelOnFocus } from '../Panels/AnimatedPanelOnFocus'

interface AuthPanelProps {
  title: string
  isTabOpen?: boolean
  children: React.ReactNode
}

export const AuthPanel = ({ isTabOpen = true, title, children }: AuthPanelProps) => {
  return (
    <ViewContainer>
      <AuthPanelContainer>
        <AnimatedPanel isTabOpen={isTabOpen}>
          <BasicPanel title={title}>
            <ContentContainer>
              {children}
            </ContentContainer>
          </BasicPanel>
        </AnimatedPanel>
      </AuthPanelContainer>
    </ViewContainer>
  )
}