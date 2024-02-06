import React from 'react'
import { Dot, Line, SeparatorContainer } from './styled'

export const CenterDotSeparator= () => {
  return (
    <SeparatorContainer>
      <Line />
      <Dot />
      <Line />
    </SeparatorContainer>
  )
}