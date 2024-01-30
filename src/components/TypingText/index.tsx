import { StyleProp, Text, ViewStyle } from 'react-native'
import React, { useEffect } from 'react'
import { useTypingEffect } from '../../hooks/Animations/useTypingEffect'

type ITypingText = {
  text: string
  duration?: number
  delay?: number
  velocity?: number
  typingChar?: string
  style?: ViewStyle
  children?: React.ReactNode
  onFinish?: () => void
}

export const TypingText = ({
  text,
  duration = 10000,
  delay = 0,
  velocity = 8,
  typingChar = '',
  onFinish = () => { },
  style,
  children
}: ITypingText) => {
  const [typingText, hasFinished] = useTypingEffect({textToType: text, duration, delay, velocity})

  useEffect(() => {
    if (hasFinished)
      onFinish()
  }, [hasFinished])

  return (
    <Text style={style}>
      { typingText }
      { !hasFinished && typingChar }
      { children }
    </Text>
  )
}