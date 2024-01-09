import styled from "styled-components";
import { ScrollToEnd } from "../../ScrollToEnd";
import { TypingText } from "../../TypingText";

export const TypingTextScroll = styled(ScrollToEnd)`
  overflow: scroll;
  height: auto;
  max-height: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
`

export const TerminalText = styled(TypingText)`
  font-size: 14px;
  color: ${props => props.theme.terminal.fontColor};
  text-shadow: 0 0 10px ${props => props.theme.terminal.textShadowColor};
  font-family: monospace;
`