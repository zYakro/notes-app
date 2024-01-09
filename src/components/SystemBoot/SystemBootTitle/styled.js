import styled from "styled-components"
import { TypingText } from "../../TypingText"
import { TerminalTitle } from "../../../styles/styled-components/TerminalText"

export const TitleContainer = styled.View`
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: row;
`

export const TitleTypingText = styled(TypingText)`
  ${TerminalTitle}
`

export const TerminalTitleText = styled.Text`
  ${TerminalTitle}
`