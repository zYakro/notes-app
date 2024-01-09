import { View, Text } from 'react-native'
import React from 'react'
import { BordersContainer, Container, Content, Dot, Line, PanelShadow, TitleContainer, TypedTitle } from './styled'

export const SoloPanel = ({ children, title = null }) => {
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
        <BordersContainer>
          <Dot />
          <Line />
          <Dot />
        </BordersContainer>
        <Content>
          {children}
        </Content>
        <BordersContainer>
          <Dot />
          <Line />
          <Dot />
        </BordersContainer>
      </Container>
    </PanelShadow>
  )
}