import { Pressable, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";

export const HabitListContainer = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`

export const HabitContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 35px;
  padding: 5px 5px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.lightDisabledColor};
  gap: 5px;
`

export const HabitName = styled(Text)`
  color: ${({ theme }) => theme.text.color};
  font-weight: bold;
  font-style: italic;
  font-size: 14px;
  text-decoration-line: underline;
`

export const TouchableContainer = styled(Pressable)`
  width: 100%;
  height: 100%;
  flex: 0.7;
`

export const CreateHabitPanelContainer = styled(View)`
  width: 120px;
  height: 120px;
  bottom: 15px;
  position: absolute;
   display: flex;
  align-items: center;
  justify-content: center;
`

export const CreateHabitPanelContent = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TouchableIconContainer = styled(TouchableOpacity)`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.onBackgroundColor};
`

export const ViewContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 60px 20px;
`