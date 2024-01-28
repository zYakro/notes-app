import React from 'react'
import { TypingText } from '../TypingText'
import { ErrorTag, ErrorTextContainer, ErrorTypingText } from './styled'

export const ErrorMessage = ({ text }) => {
  return (
    <ErrorTextContainer>
      <ErrorTag>
        error
      </ErrorTag>
      <ErrorTypingText
        text={text}
        duration={500}
        delay={500}
        velocity={1}
        typingChar='|'
      />
    </ErrorTextContainer>
  )
}