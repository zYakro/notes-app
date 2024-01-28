import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BasicTextInput } from '../BasicTextInput'

export const BasicTextInputForm = ({ text, onChangeText, placeholder, icon}) => {
  return (
    <>
      <BasicTextInput
        text={text}
        onChangeText={onChangeText}
        placeholder={placeholder}
        icon={icon}
      />
    </>
  )
}
