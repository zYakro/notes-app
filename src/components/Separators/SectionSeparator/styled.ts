import { View } from "react-native"
import styled from "styled-components"

export const BordersContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 5px;
  height: 15px;
  flex-direction: row;
`

export const Line = styled(View)`
  flex: 1;
  border-color: ${({ theme }) => theme.soloPanel.panelBorders};
  border-top-width: 1.5px;
  height: 1px;
  border-radius: 1px;
`

export const Dot = styled(View)`
  background-color: ${({ theme }) => theme.soloPanel.panelBorders};
  width: 3px;
  height: 3px;
`