import { Pressable } from "react-native"
import Animated from "react-native-reanimated"
import styled from "styled-components"

export const ItemContainer = styled(Pressable)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 100%;
  padding: 2px 2px;
`

export const IconBorder = styled.View`
  background-color: transparent;
  border-top-width: 2px;
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.onBackgroundColor};
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 0;
`

export const IconContainer = styled(Animated.View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  width: 100%;
`

export const ItemTitle = styled.Text`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.text.color};
  font-size: 14px;
  font-weight: bold;
`