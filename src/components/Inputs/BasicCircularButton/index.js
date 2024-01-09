import { View, Text } from 'react-native'
import React from 'react'
import { CircularButtonContainer, CircularButton } from './styled'

export const BasicCircularButton = ({ onPress, children }) => {
  return (
    <CircularButtonContainer
      onPress={onPress}
    >
      <CircularButton>
        {children}
      </CircularButton>
    </CircularButtonContainer>
  )
}
