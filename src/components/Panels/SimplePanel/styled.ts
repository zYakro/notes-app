import { TypingText } from "@/components/TypingText";
import { View } from "react-native";
import styled from "styled-components";

export const TitleContainer = styled(View)`
  width: 100%;
  height: 22px;
  background-color: ${({ theme }) => theme.onBackgroundColor};
  padding: 0px 3px;
`;

export const Title = styled(TypingText)`
   color: ${({ theme }) => theme.basicPanel.titleColor};
  font-size: 13px;
  font-family: monospace;
  letter-spacing: 1px; 
`

export const PanelView = styled(View)`
  min-width: 100%;
  height: 100%;
  background-color: transparent;
  padding: 2px 2px;
  border-radius: 2px;
  overflow: hidden;
`

export const Content = styled(View)`
  flex: 1;
  display: flex;
  background-color: ${({ theme }) => theme.basicPanel.background};
  padding: 5px; 
`