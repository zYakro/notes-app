import { ScrollView, View } from "react-native";
import styled from "styled-components";

export const ViewContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
`

export const ButtonContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 15px 15%;
`

export const Content = styled(View).attrs(() => ({
  contentContainerStyle: {
    rowGap: 8,
    justifyContent: 'center',
    flexGrow: 1,
  }
}))`
  display: flex;
  padding: 0 15px;
  min-width: 100%;
  min-height: 100%;
`