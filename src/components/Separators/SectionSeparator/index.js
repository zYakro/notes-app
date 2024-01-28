import React from 'react'
import { BordersContainer, Dot, Line } from './styled'

export const SectionSeparator = () => {
  return (
    <BordersContainer>
      <Dot />
      <Line />
      <Dot />
    </BordersContainer>
  )
}
