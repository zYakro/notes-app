import { ScrollView, View } from "react-native";
import styled from "styled-components";

export const ViewContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const PanelContainer = styled(View)`
  width: 90%;
  height: 90%;
`

export const PanelContent = styled(ScrollView)`
  width: 100%;
  height: 100%;
  padding: 2px 5px;
  display: flex;
  gap: 15px;
`

export const Options = styled(View)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
`