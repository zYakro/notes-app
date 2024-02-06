import { View } from "react-native";
import styled from "styled-components";

export const SeparatorContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;  
  width: 100%;
  gap: 5px;
`

export const Line = styled(View)`
  flex: 1;
  border-color: ${({ theme }) => theme.soloPanel.panelBorders};
  border-top-width: 1.5px;
  height: 1px;
  border-radius: 1px;
`

export const Dot = styled(View)`
  border-color: ${({ theme }) => theme.soloPanel.panelBorders};
  background-color: transparent; 
  border-radius: 1000px;
  border-width: 1.5px;
  width: 5px;
  height: 5px;
`