import { Pressable, View, Text } from "react-native";
import styled from "styled-components";
import Animated from "react-native-reanimated"

export const Container = styled(View)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 120px;
  gap: 10px;
`

export const Title = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.text.color};
`

export const List = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: row;
  gap: 15px;
`

export const DifficulyItemTitle = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.text.color};
  font-size: 14px;
  font-weight: bold;
`

export const ItemContainer = styled(Pressable)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 100%;
  padding: 2px 2px;
`

export const IconBorder = styled(View)`
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

export const ItemTitle = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.text.color};
  font-size: 14px;
  font-weight: bold;
`