import React from 'react'
import { Content, PanelView, Title, TitleContainer } from './styled'

export const SimplePanel = ({ children, title }: { children: React.ReactNode, title: string }) => {
  return (
    <PanelView>
      {
        title &&
        <TitleContainer>
          <Title
            text={title}
            duration={600}
            velocity={1}
            delay={700}
            typingChar='|'
          />
        </TitleContainer>
      }
      <Content>
        {children}
      </Content>
    </PanelView>
  )
}
