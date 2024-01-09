import { Text } from 'react-native'
import React, { useEffect } from 'react'
import { useTypingEffect } from '../../hooks/Animations/useTypingEffect'

export const TypingText = ({ text, duration = 10000, delay = 0, velocity = 8, typingChar = '', onFinish = () => { }, style, children }) => {
  const [typingText, hasFinished] = useTypingEffect(text, duration, delay, velocity)

  useEffect(() => {
    if (hasFinished)
      onFinish()
  }, [hasFinished])

  return (
    <Text
      style={style}
    >
      {typingText}
      {!hasFinished && typingChar}
      {children}
    </Text>
  )
}