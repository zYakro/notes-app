import { TouchableOpacity } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";

export const Container = styled.View`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.disabledColor};
  border-radius: 2px;
`

export const IconList = styled(ScrollView)`
  width: auto;
  height: auto;
`

export const IconItem = styled(TouchableOpacity)`
  width: auto;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  padding: 0 2px;
`