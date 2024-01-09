import React from 'react'
import { ClickableTextContainer, ClickableTextStyle } from './styled'

export const ClickableText = ({ onPress, children }) => {
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