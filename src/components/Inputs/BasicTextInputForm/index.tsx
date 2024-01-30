import React, { useState } from 'react'
import { BasicTextInput } from '../BasicTextInput'

interface BasicTextInputFormProps {
  text: string
  onChangeText: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
  icon: string
  securityTextEntry?: boolean
}

export const BasicTextInputForm = ({ text, onChangeText, placeholder, icon, securityTextEntry = false}: BasicTextInputFormProps) => {
  return (
    <>
      <BasicTextInput
        text={text}
        onChangeText={onChangeText}
        placeholder={placeholder}
        icon={icon}
        securityTextEntry={securityTextEntry}
      />
    </>
  )
}
