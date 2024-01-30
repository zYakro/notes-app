import React from 'react'
import { Container, Input } from './styled'

type IUnderlineInput = {
  placeholder: string
  text: string
  onChangeText: React.Dispatch<React.SetStateAction<string>>
}

export const UnderlineInput = ({ placeholder = '', text, onChangeText }) => {
  return (
    <Container>
      <Input
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
      />
    </Container>
  )
}