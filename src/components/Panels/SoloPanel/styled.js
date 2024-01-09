import { styled } from 'styled-components'
import { TypingText } from '../../TypingText'

export const PanelShadow = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 100%;
  height: 100%;
  border-bottom-width: 2px;
  border-right-width: 2px;
  border-color: ${({ theme }) => theme.soloPanel.panelShadow};
  padding: 2px;
`

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.soloPanel.background};
  width: 100%;
  height: 100%;
  padding: 0px 5px;
  border-radius: 1px;
`

export const BordersContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 5px;
  height: 15px;
  flex-direction: row;
`

export const Line = styled.View`
  flex: 1;
  border-color: ${({ theme }) => theme.soloPanel.panelBorders};
  border-top-width: 1.5px;
  height: 1px;
  border-radius: 1px;
`

export const Dot = styled.View`
  background-color: ${({ theme }) => theme.soloPanel.panelBorders};
  width: 3px;
  height: 3px;
`

export const Content = styled.View`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`

export const TitleContainer = styled.View`
  min-width: 100%;
  height: 22px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`

export const TypedTitle = styled(TypingText)`
  color: ${({ theme }) => theme.text.color};
  font-size: 14px;
  font-family: monospace;
  letter-spacing: 1px;
`