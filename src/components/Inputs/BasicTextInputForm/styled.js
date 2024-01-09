import styled from "styled-components";
import { TypingText } from "../../TypingText";

export const ErrorTextContainer = styled.View`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

export const ErrorTypingText = styled(TypingText)`
  color: ${({ theme }) => theme.text.color}
`