import React from 'react'
import { useTheme } from 'styled-components'
import { AntDesign } from '@expo/vector-icons';
import { IconContainer, TouchableIcon } from './styles';
import { DimensionValue, StyleProp, ViewStyle } from 'react-native';

type IAddFAB = {
  iconSize?: number
  size?: DimensionValue
  onPress: () => void
}

export const AddFAB = ({ iconSize = 16, size = 'auto', onPress}: IAddFAB) => {
  const theme = useTheme()

  const style: StyleProp<ViewStyle> = {
    minWidth: size,
    minHeight: size
  }

  return (
    <IconContainer style={style}>
      <TouchableIcon onPress={onPress}>
        <AntDesign name="pluscircle" size={iconSize} color={theme.onBackgroundColor} />
      </TouchableIcon>
  </IconContainer>
  )
}
