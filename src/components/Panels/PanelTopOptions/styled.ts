import { View, Text } from "react-native"
import styled from "styled-components"

export const OptionsContainer = styled(View)`
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  gap: 5px;
  padding: 0px 15px;
`

export const Option = styled(Text)`
  color: ${({ theme }) => theme.text.color};
`