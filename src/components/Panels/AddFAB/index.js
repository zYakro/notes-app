import React from 'react'
import { useTheme } from 'styled-components'
import { AntDesign } from '@expo/vector-icons';
import { IconContainer, TouchableIcon } from './styles';

export const AddFAB = ({ iconSize = 16, size = 'auto', onPress}) => {
  const theme = useTheme()

  return (
    <IconContainer style={{
      minWidth: size,
      minHeight: size
    }}>
      <TouchableIcon onPress={onPress}>
        <AntDesign name="pluscircle" size={iconSize} color={theme.onBackgroundColor} />
      </TouchableIcon>
  </IconContainer>
  )
}
