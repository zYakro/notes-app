import { Pressable } from "react-native";
import styled from "styled-components";

export const Container = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 120px;
  gap: 10px;
`

export const Title = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.text.color};
`

export const List = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: row;
  gap: 15px;
`

export const ItemContainer = styled(Pressable)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 100%;
  padding: 1px 2px;
  border-bottom-width: ${({ isFocused }) => isFocused ? "2px" : "0"};
  border-color: ${({ theme }) => theme.onBackgroundColor};
`

export const IconContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.onBackgroundColor};
  border-radius: 5px;
`

export const DifficulyItemTitle = styled.Text`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.text.color};
  font-size: 14px;
  font-weight: bold;
`