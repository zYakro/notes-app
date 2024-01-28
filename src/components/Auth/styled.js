import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";
import { TypingText } from "../TypingText";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

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

export const AuthPanelContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 5px;
  overflow: hidden;
  width: 90%;
  height: 50%;
  max-width: 500px;
  max-height: 450px;
`

export const ContentContainer = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: 100%;
  padding: 15px 15px;
`

export const ErrorTextContainer = styled.View`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 5px;
  border-radius: 2px;
  padding: 10px 0px;
`

export const ErrorTypingText = styled(TypingText)`
  color: ${({ theme }) => theme.error.color};
  font-weight: bold;
`

export const ErrorTag = styled.Text`
  background-color: ${({ theme }) => theme.error.color};
  color: ${({ theme }) => theme.backgroundColor};
  padding: 0px 2px;
  border-radius: 2px;
  text-align: center;
  font-weight: bold;
  font-size: 12px;
`