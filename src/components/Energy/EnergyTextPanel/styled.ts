import styled from "styled-components"
import { ScrollToEnd } from "../../ScrollToEnd"
import { TypingText } from "../../TypingText"
import { View } from "react-native"

export const EnergyPanelContainer = styled(View)`
  width: 80%;
  height: 60%;
  max-width: 400px;
  max-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const EnergyPanelContent = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TypingTextScroll = styled(ScrollToEnd)`
  overflow: scroll;
  height: auto;
  max-height: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
`

export const EnergyPanelTypingText = styled(TypingText)`
  font-size: 14px;
  color: ${({ theme }) => theme.text.color};
  font-family: monospace;
`