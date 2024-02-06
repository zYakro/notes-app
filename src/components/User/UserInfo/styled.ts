import { View, Text } from "react-native";
import styled from "styled-components";

export const UserInfoContainer = styled(View)`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`

export const UserImage = styled(View)`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.lightDisabledColor};
  border-radius: 5px;
`

export const UserStats = styled(View)`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

export const Level = styled(Text)`
  color: ${({ theme }) => theme.text.color};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Exp = styled(Text)`
  color: ${({ theme }) => theme.text.color};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Coins = styled(Text)`
  color: ${({ theme }) => theme.text.color};
  display: flex;
  align-items: center;
  justify-content: center;
`