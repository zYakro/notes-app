import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { TouchableOpacity } from 'react-native';

export const PlusCircle = ({ onAdd }) => {
  const theme = useTheme()

  return (
    <TouchableOpacity onPress={onAdd} style={{paddingHorizontal: 5}}>
      <AntDesign name="pluscircle" size={14} color={theme.text.color} />
    </TouchableOpacity>
  )
}
