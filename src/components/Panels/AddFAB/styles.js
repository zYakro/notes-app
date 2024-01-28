import { View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import styled from "styled-components"

export const TouchableIcon = styled(TouchableOpacity)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.backgroundColor};
`

export const IconContainer = styled(View)`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 3%;
  bottom: 2%
`