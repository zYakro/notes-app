import React from 'react'
import { SubmitButtonContainer, SubmitButtonText, SubmitButton } from './styled'

export const BasicSubmitButton = ({ title, onPress = () => { } }) => {
  return (
    <SubmitButtonContainer
      onPress={onPress}
    >
      <SubmitButton>
        <SubmitButtonText>
          {title}
        </SubmitButtonText>
      </SubmitButton>
    </SubmitButtonContainer>
  )
}