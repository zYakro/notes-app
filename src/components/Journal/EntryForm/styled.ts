import { TextInput, View } from "react-native";
import styled from "styled-components";

export const TextArea = styled(TextInput)`
  vertical-align: top;
  min-width: 100%;
  flex: 1;
  padding: 5px;
  background-color: ${({ theme }) => theme.disabledColorBackground};
  color: ${({ theme }) => theme.text.color};
`

export const EditorContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
  padding: 5px 15px;
`