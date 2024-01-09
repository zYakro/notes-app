import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BasicTextInput } from '../BasicTextInput'
import { ErrorTextContainer } from './styled'
import { TypingText } from '../../TypingText'

export const BasicTextInputForm = ({ text, onChangeText, placeholder, icon, hasError = false, errorText = '' }) => {
  return (
    <>
      <BasicTextInput
        text={text}
        onChangeText={onChangeText}
        placeholder={placeholder}
        icon={(hasError) ? '⚠' : icon}
      />
      {
        hasError &&
        <ErrorTextContainer>
          <TypingText
            text={`⚠ ${errorText} ⚠`}
            duration={500}
            delay={500}
            velocity={1}
            typingChar='|'
          />
        </ErrorTextContainer>
      }
    </>
  )
}
