import styled from "styled-components"
import { TypingText } from "../../TypingText"
import { View } from "react-native"

export const TerminalPanelView = styled(View)`
  width: 100%;
  height: 100%;
  max-height: 100%;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${props => props.theme.terminal.titleBackground};
  border-radius: 2px;
`

export const TerminalPanelTitle = styled(TypingText)`
  font-size: 16px;
  color: ${props => props.theme.terminal.titleColor};
  text-shadow: 0 0 10px ${props => props.theme.terminal.textShadowColor};
  font-family: monospace;
  min-width: 100%;
  border-bottom-width: 0.5px;
  margin-bottom: 5px;
  font-weight: bold;  
  background-color: ${props => props.theme.terminal.titleBackground};
  max-height: 30px;
  overflow: hidden;
`