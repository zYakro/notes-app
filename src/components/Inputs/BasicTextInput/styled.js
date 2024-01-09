import { TextInput } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components";

export const TextInputContainer = styled(Animated.View)`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

export const TextInputElements = styled(Animated.View)`
  flex: 1;
  width: 100%;
  max-height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  border-top-width: 2px;
  border-bottom-width: 2px;
`

export const Input = styled(TextInput)`
  flex: 1;
  width: 100%;
  letter-spacing: 1px;
  font-family: monospace;
  font-size: 14px;
  color: ${({ theme }) => theme.inputColors.textColor};
`

export const TextIcon = styled(Animated.Text)`
  width: 25px;
  height: auto;
  padding: 5px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.inputColors.textColor};
`

export const Placeholder = styled(Animated.Text)`
  width: auto;
  text-align: center;
  height: auto;
  margin-right: 5px;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: center; 
  font-size: 14px;
  color: ${({ theme }) => theme.inputColors.textColor}
`