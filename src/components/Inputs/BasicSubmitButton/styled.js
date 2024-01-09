import { TouchableOpacity } from "react-native";
import styled from "styled-components";

export const SubmitButtonContainer = styled(TouchableOpacity).attrs(({ theme }) => ({
  activeOpacity: theme.touchableOpacity
}))`
  width: 60%;
  height: 35px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-color: ${({ theme }) => theme.buttonColors.background};
  padding: 5px 5px;
  background-color: inherit;
`

export const SubmitButton = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.buttonColors.background};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SubmitButtonText = styled.Text`
  color: ${({ theme }) => theme.buttonColors.textColor};
  font-size: 14px;
  letter-spacing: 1.2px;
`