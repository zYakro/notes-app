import styled from "styled-components"
import { FadeInOutLoop } from "../../Animations/FadeInOutLoop"
import { View } from "react-native"

export const Container = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 130px;
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

