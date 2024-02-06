import { ScrollToEnd } from "@/components/ScrollToEnd";
import { TypingText } from "@/components/TypingText";
import { HEXColor } from "@/types/types";
import { Image, Text, View } from "react-native";
import styled from "styled-components";

export const Content = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 10px 20px;
  gap: 2px;
`

export const ImageContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 0.8;
`

export const Title = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 0.2;
  color: ${({ theme }) => theme.text.color};
  font-size: 18px;
  letter-spacing: 1px;
  text-align: center;
`

export const Description = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  color: ${({ theme }) => theme.text.color};
  font-size: 16px;
`

export const PriceContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  flex: 0.2;
  gap: 2px;
`

export const Price = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.text.color};
  font-size: 16px;
`

export const ButtonsContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 0.3;
  flex-direction: row;
  padding: 0 45px;
  gap: 25px;
`

export const PanelContainer = styled(View) <{ panelColor: HEXColor }>`
  width: 175px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ panelColor }) => panelColor};
  padding: 2px 2px;
  opacity: 0.95;
`
export const PanelTitle = styled(Text) <{ fontColor: HEXColor }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.2;
  height: 15px;
  padding: 0px 5px;
  color: ${({ fontColor }) => fontColor};
`

export const ScrollToEndPanelContent = styled(ScrollToEnd) <{ panelContentColor: HEXColor }>`
  width: 100%;
  height: 100%;
  flex: 1;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  padding: 2px 5px;
  background-color: ${({ panelContentColor }) => panelContentColor};
`

export const PanelTypingText = styled(TypingText) <{ fontColor: HEXColor }>`
  font-size: 14px;
  font-family: monospace;
  color: ${({ fontColor }) => fontColor};
`

export const TypeImageContainer = styled(View)`
  display: flex;
  width: 100%;
  height: 100%;
`

export const ImageType = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`