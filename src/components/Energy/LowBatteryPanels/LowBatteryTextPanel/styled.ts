import styled from "styled-components"
import { FadeInOutLoop } from "../../../Animations/FadeInOutLoop"
import { Entypo } from '@expo/vector-icons';

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 120px;
  margin-top: -50px;
  position: absolute;
`

export const FadeInOutContent = styled(FadeInOutLoop)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

export const WarningIcon = styled(Entypo).attrs(({ theme }) => ({
  color: theme.text.color,
  name: 'warning',
  size: 20
}))``;

export const WarningText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme }) => theme.text.color}
`;