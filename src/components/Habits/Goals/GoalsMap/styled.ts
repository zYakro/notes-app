import { FlatList, ScrollView, View } from "react-native";
import styled from "styled-components";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { TypingText } from '../../../TypingText'

export const GoalsContainer = styled(View)`
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 5px;
  flex: 1;
`

export const StyledFlatList = styled(FlatList)`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
`

export const TouchableContainer = styled(TouchableWithoutFeedback)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
`

export const IconContainer = styled(View)`
  min-width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const Line = styled(View) <{ isCompleted: boolean }>`
  flex: 1;
  width: 2px;
  height: 100%;
  border-color: ${({ theme, isCompleted }) => (isCompleted) ? theme.onBackgroundColor : theme.disabledColor};
  border-left-width: 2px;
  border-radius: 2px;
`

export const Content = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const InfoTextContainer = styled(ScrollView)`
  width: 40%;
  position: absolute;
  right: 0;
  height: auto;
`

export const InfoText = styled(TypingText)`
  font-style: italic;
  color: ${({ theme }) => theme.text.color};
  text-decoration: underline;
  font-size: 12px;
  width: 100%;
  height: 100%;
  padding: 2px 0px;
`

export const InfoTextScroll = styled(ScrollView)`
  width: 100%;
  flex-direction: column;
`

export const IconBorder = styled(View) <{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 1000px;
  border-width: 2px;
  border-color: ${({ color }) => color}
`