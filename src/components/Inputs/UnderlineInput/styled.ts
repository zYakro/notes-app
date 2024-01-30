import { TextInput, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  min-width: 100%;
  height: 35px;
`

export const Input = styled(TextInput)`
  min-width: 100%;
  min-height: 100%;
  border-color: ${({ theme }) => theme.onBackgroundColor};
  border-bottom-width: 1px;
  color: ${({ theme }) => theme.text.color};
  padding: 2px;
  flex: 1;
`