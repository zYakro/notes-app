import { ScrollView } from "react-native";
import styled from "styled-components";

export const Content = styled(ScrollView).attrs(() => ({
  contentContainerStyle: {
    rowGap: 8,
    justifyContent: 'center',
    flexGrow: 1,
  }
}))`
  display: flex;
  padding: 0 15px;
  flex: 1;
  width: 100%;
  height: 100%;
`

export const ViewContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
`

export const ButtonContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 0px 15%;
`