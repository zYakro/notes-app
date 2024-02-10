import { ScrollView, Text, View } from "react-native";
import styled from "styled-components";

export const FormContainer = styled(ScrollView).attrs(() => ({
  contentContainerStyle: {
    rowGap: 15,
    justifyContent: 'center',
    flexGrow: 1,
  }
}))`
  display: flex;
  padding: 0 15px;
  flex: 1;
  width: 100%;
  height: 100%;
`

export const ViewContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  height: 100%;
  padding: 20px;
`

export const ButtonContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 15px 15%;
`

export const ProgressContainer = styled(View)`
  width: 100%;
  height: 25px;
  flex-direction: row;
`

export const OptionsBar = styled(View)`
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  gap: 5px;
  padding: 0px 15px;
`

export const OptionBarText = styled(Text)`
  color: ${({ theme }) => theme.text.color};
`

export const CoinsContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15px;
`

export const CoinsPanel = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-left-width: 2px;
  border-right-width: 2px;
  border-color: ${({ theme }) => theme.onBackgroundColor};
  flex-direction: row;
  gap: 3px;
`

export const Stat = styled(Text)`
  color: ${({ theme }) => theme.text.color};
  display: flex;
  gap: 5px;
  opacity: 0.9;
`