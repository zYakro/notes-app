import React from 'react'
import { Container, Input } from './styled'

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