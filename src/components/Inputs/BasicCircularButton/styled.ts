import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const CircularButtonContainer = styled(TouchableOpacity).attrs(({ theme }) => ({
  activeOpacity: theme.touchableOpacity
}))`
  width: 45px;
  height: 45px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.buttonColors.background};
  padding: 5px;
  background-color: inherit;
  border-radius: 1000px;
`

export const CircularButton = styled(View)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.buttonColors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1000px;
`