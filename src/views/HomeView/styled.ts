import styled from "styled-components";
import { DraggablePanel } from "../../components/Panels/DraggablePanel";
import { View } from "react-native";

export const Container = styled(View)`
  width: 100%;
  flex-direction: row;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`

export const Column = styled(View)`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const HomeDraggablePanel = styled(DraggablePanel)`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`