import { Text, View } from "react-native";
import styled from "styled-components";

export const Content = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const OptionsBar = styled(View)`
  width: 90%;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  gap: 5px;
`

export const OptionBarText = styled(Text)`
  color: ${({ theme }) => theme.text.color};
`