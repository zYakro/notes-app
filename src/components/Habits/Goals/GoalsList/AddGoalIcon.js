import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled, { useTheme } from 'styled-components'
import { AntDesign } from '@expo/vector-icons';

const TouchableContainer = styled(TouchableOpacity)`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 8%;
  bottom: 2%;
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.onBackgroundColor};
`

export const AddGoalIcon = ({ onPress }) => {
  const theme = useTheme()

  return (
    <TouchableContainer onPress={onPress}>
      <AntDesign name="plus" size={16} color={theme.backgroundColor} />
    </TouchableContainer>
  )
}
