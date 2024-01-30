import { ScrollView, View, Text } from "react-native";
import styled from "styled-components";

export const HabitProgressScroll = styled(ScrollView)`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  border-left-width: 1px;
  border-right-width: 1px;
  border-color: ${({ theme }) => theme.habits.border};
  padding: 0 2px;
  overflow: hidden;
`

export const HabitProgressContainer = styled(View)`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`

export const ProgressNumber = styled(Text)`
  color: ${({ theme }) => theme.text.color};
  width: 20px;
  font-size: 13px;
`

export const ProgressRect = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4px;
  margin-right: 2px;
  height: 100%;
  background-color: transparent;
`

export const ColoredRect = styled(View) <{ isDisabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme, isDisabled }) =>
    (isDisabled)
      ? theme.disabledColor
      : theme.habits.progressRect
  };
`