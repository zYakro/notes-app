import React from 'react'
import { OptionsContainer, Option } from './styled'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const PanelTopOption = ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Option>
        {name}
      </Option>
    </TouchableOpacity>
  )
}

export const PanelTopOptions = ({ children }) => {
  return (
    <OptionsContainer>
      {children}
    </OptionsContainer>
  )
}
