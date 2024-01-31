import { View, Text } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";

export const EntriesContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 100%;
  min-height: 90%;
  padding: 0 15px;
`

export const SearchContainer = styled(View)`
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  gap: 15px;
  width: 80%;
  height: 45px;
  flex-direction: row;
`

export const SearchIconContainer = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1000px;
  padding: 2px;
`

export const EntryContainer = styled(TouchableOpacity)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-width: 100%;
  height: 45px;
  gap: 5px;
`

export const EntryName = styled(Text)`
  color: ${({ theme }) => theme.text.color};
  width: 100%;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.lightDisabledColor};
  font-size: 16px;
`

export const StyledFlatList = styled(FlatList)`
  width: 100%;
  flex: 1;
`

export const EntriesPanelContainer = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: 70%;
`

export const ViewContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  height: 100%;
  padding: 20px;
`

export const ListLoadingContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex: 1;
`