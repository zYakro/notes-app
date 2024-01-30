import React from 'react'
import { Container, Content, PanelShadow, TitleContainer, TypedTitle } from './styled'
import { SectionSeparator } from '../../Separators/SectionSeparator'

type ISoloPanel = {
  children: React.ReactNode
  title?: string | null
}

export const SoloPanel = ({ children, title = null }: ISoloPanel) => {
  return (
    <PanelShadow>
      <Container>
        { title && 
          <TitleContainer>
            <TypedTitle
              text={title}
              duration={600}
              velocity={1}
              delay={700}
              typingChar='|'
            />
          </TitleContainer>
        }
        <SectionSeparator />
        <Content>
          {children}
        </Content>
        <SectionSeparator />
      </Container>
    </PanelShadow>
  )
}