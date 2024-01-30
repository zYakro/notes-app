import React from 'react'
import { CircularButtonContainer, CircularButton } from './styled'

export const BasicCircularButton = ({ onPress, children }: { onPress: () => void, children: React.ReactNode }) => {
  return (
    <CircularButtonContainer onPress={onPress}>
      <CircularButton>
        {children}
      </CircularButton>
    </CircularButtonContainer>
  )
}
