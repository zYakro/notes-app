import React from 'react'
import { OptionsContainer, Option } from './styled'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const PanelTopOption = ({ name, onPress }: { name: string, onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Option>
        {name}
      </Option>
    </TouchableOpacity>
  )
}

export const PanelTopOptions = ({ children }: { children: React.ReactNode }) => {
  return (
    <OptionsContainer>
      {children}
    </OptionsContainer>
  )
}
