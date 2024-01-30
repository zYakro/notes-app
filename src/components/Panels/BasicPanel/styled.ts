import { View } from "react-native"
import styled from "styled-components"
import { TypingText } from "../../TypingText"

export const BasicPanelView = styled(View)`
  min-width: 100%;
  height: 100%;
  background-color: transparent;
  border-right-width: 3px;
  border-bottom-width: 3px;
  border-color: ${({ theme }) => theme.basicPanel.panelShadow};
  padding: 2px 2px;
  border-radius: 2px;
  overflow: hidden;
`

export const BasicPanelTitleContainer = styled(View)`
  width: 100%;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 8px;
  background-color: ${({ theme }) => theme.basicPanel.titleBackground};
  border-width: 2.8px;
  border-color: ${({ theme }) => theme.basicPanel.panelBorders};
  flex-direction: row;
`

export const BasicPanelTitle = styled(TypingText)`
  color: ${({ theme }) => theme.basicPanel.titleColor};
  font-size: 16px;
  font-family: monospace;
  letter-spacing: 1px;
`

export const BasicPanelLines = styled(View)`
  width: 100%;
  height: 100%;
  border-top-width: 2px;
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.basicPanel.linesColor};
  border-radius: 1px;
  padding: 5px 0;
`

export const BasicPanelBody = styled(View)`
  flex: 1;
  display: flex;
  background-color: ${({ theme }) => theme.basicPanel.background};
  border-width: 2.8px;
  border-color: ${({ theme }) => theme.basicPanel.panelBorders};
  justify-content: center;
  align-items: center;
  padding: 5px;
`

export const EndMenu = styled(View)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  flex: 1;
  height: 100%;
`