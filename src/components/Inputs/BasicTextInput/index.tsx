import React, { useEffect, useState } from 'react'
import { Input, Placeholder, TextIcon, TextInputContainer, TextInputElements } from './styled'
import { AnimationStyles } from './AnimationStyles'

type IBasicInput = {
  text: string
  onChangeText: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
  icon: string
  securityTextEntry?: boolean
}

export const BasicTextInput = ({ text, onChangeText, placeholder = '', icon = '', securityTextEntry = false }: IBasicInput) => {
  const [isFocused, setIsFocused] = useState(false)

  const [borderStyle, colorStyle] = AnimationStyles(isFocused)

  return (
    <TextInputContainer>
      <Placeholder>
        {placeholder}
      </Placeholder>
      <TextInputElements
        style={borderStyle}
      >
        <TextIcon
          style={colorStyle}
        >
          {isFocused ? `➤` : icon}
        </TextIcon>
        <Input
          onChangeText={onChangeText}
          secureTextEntry={securityTextEntry}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={text}
        >
        </Input>
      </TextInputElements>
    </TextInputContainer>
  )
}