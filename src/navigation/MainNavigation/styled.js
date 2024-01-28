import { TouchableOpacity } from "react-native";
import styled from "styled-components";

export const TabBarContainer = styled.View`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 75px;
  padding: 5px 10px;
  border-top-width: 2px;
  border-color: ${({ theme }) => theme.tabBar.borderColor};
`

export const TabBarMenu = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  max-width: 100%;
  height: 100%;
`

export const TabItem = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isFocused }) =>
    (isFocused)
      ? theme.tabBar.focusBackgroundColor
      : theme.tabBar.backgroundColor
  };
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-color: ${({ theme }) => theme.tabBar.borderColor};
  border-bottom-width: 2px;
`

export const TabContainer = styled(TouchableOpacity)`
  max-width: 75px;
  width: 100%;
  height: 100%;
  padding: 5px 5px;
  border-bottom-width: 3px;
  border-color: ${({ theme }) => theme.tabBar.borderColor};
`