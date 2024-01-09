import styled, { css } from "styled-components";

export const TerminalText = styled.Text`
  font-size: ${props => props.fontSize || '14px'};
  color: ${props => props.theme.terminal.fontColor};
  text-shadow: 0 0 10px #c8c8c8;
  font-family: monospace;
`

export const TerminalTitle = css`
  font-size: 30px;
  color: #fff;
  text-shadow: 0 0 10px ${props => props.theme.terminal.textShadowColor};
  font-family: monospace;
  letter-spacing: 3px;
`