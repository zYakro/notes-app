import { TouchableOpacity } from "react-native";
import styled from "styled-components";

export const ClickableTextStyle = styled.Text`
  width: 100%;
  text-align: center;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center; 
  font-size: 14px;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.inputColors.textColor };
`

export const ClickableTextContainer = styled(TouchableOpacity).attrs(({ theme }) => ({
  activeOpacity: theme.touchableOpacity
}))`
  width: auto;
  padding: 10px;
`