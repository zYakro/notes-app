import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components'

export const LoadingIndicator = (props: any) => {
  const theme = useTheme()

  return (
    <ActivityIndicator color={theme.text.color} {...props} />
  )
}
