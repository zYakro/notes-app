import React from 'react'
import { ClickableTextContainer, ClickableTextStyle } from './styled'

interface ClickableTextProps {
  onPress: () => void
  children: React.ReactNode
}

export const ClickableText = ({ onPress, children }: ClickableTextProps) => {
  return (
    <ClickableTextContainer
      onPress={onPress}
    >
      <ClickableTextStyle>
        {children}
      </ClickableTextStyle>
    </ClickableTextContainer>
  )
}