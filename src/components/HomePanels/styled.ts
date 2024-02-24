import { Text, View } from "react-native";
import styled from "styled-components";

export const UserInfoText = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.text.color};
  letter-spacing: 1px;
`;

export const LineSeparator = styled(View)`
  width: 100%;
  height: 1px;
  margin: 5px 0;
  background-color: ${({ theme }) => theme.disabledColor};
`

export const CenteredContent = styled(View)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
`