import React from 'react'
import { OptionBarText, OptionsBar } from './styled'
import { TouchableOpacity } from 'react-native'

export const Options = ({ onDelete, onSave }) => {
  return (
    <OptionsBar>
      <TouchableOpacity onPress={onDelete}>
        <OptionBarText>Delete</OptionBarText>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSave}>
        <OptionBarText>Save</OptionBarText>
      </TouchableOpacity>
    </OptionsBar>
  )
}