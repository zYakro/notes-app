import { ImageBackground } from "react-native";
import styled from "styled-components";
import { LinearGradient } from 'expo-linear-gradient';

export const TypingTextContainer = styled.View`
  overflow: scroll;
  flex: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 10px;
`

export const Panels = styled.View`
  flex: 10;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 5px;
`

export const PanelRow = styled.View`
  flex: ${props => props.flex || 1};
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: space-evenly;
  justify-content: center;
`