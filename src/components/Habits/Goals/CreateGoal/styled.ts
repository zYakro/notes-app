import { TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";

export const Content = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.05);
`

export const FormContainer = styled(View)`
  width: 80%;
  padding: 15px 0;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const SubmitButtonContainer = styled(View)`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IconSelectorContainer = styled(View)`
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