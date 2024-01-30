import React from 'react'
import { SubmitButtonContainer, SubmitButtonText, SubmitButton } from './styled'

export const BasicSubmitButton = ({ title, onPress = () => { } }: { title: string, onPress?: () => void }) => {
  return (
    <SubmitButtonContainer onPress={onPress}>
      <SubmitButton>
        <SubmitButtonText>
          {title}
        </SubmitButtonText>
      </SubmitButton>
    </SubmitButtonContainer>
  )
}