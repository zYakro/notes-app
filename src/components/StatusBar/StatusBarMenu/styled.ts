import { View } from "react-native";
import styled from "styled-components";

export const StatusBarContainer = styled(View)`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 10px;
  margin-top: 10px;
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.statusBar.borderLines};
`

export const StatusBarLines = styled(View)`
  min-width: 100%;
  height: 100%;
  padding: 2px;
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.statusBar.shadowLines};
`

export const StatusBarItems = styled(View)`
  min-width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.statusBar.backgroundColor};
  border-right-width: 3px;
  border-left-width: 3px;
  border-color: ${({ theme }) => theme.statusBar.borderLines};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  gap: 10px;
  padding: 0 10px;
`