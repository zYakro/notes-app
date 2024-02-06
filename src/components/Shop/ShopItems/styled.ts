import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";

export const ShopItemsContainer = styled(View)`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  flex-direction: row;
  gap: 5px;
`

export const ShopItemsSection = styled(View)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 5px 0;
`

export const ShopSectionTitle = styled(Text)`
  width: 100%;
  padding: 5px 2px;
  font-size: 16px;
  color: ${({ theme }) => theme.text.color}
`

export const ShopItemContainer = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px; 
  width: 70px;
  height: 90px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-color: ${({ theme }) => theme.onBackgroundColor};
  border-width: 1px;
  padding: 2px 5px;
  border-radius: 1px;
`

export const ShopItemImageContainer = styled(View)`
  flex: 1;
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ShopItemPrice = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2px;
`

export const Price = styled(Text)`
  color: ${({ theme }) => theme.text.color};
  font-size: 12px;
`

export const ThemePanelContainer = styled(View) <{ backgroundColor?: `#${string}` }>`
  width: 32px;
  height: 30px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-color: ${({ backgroundColor }) => backgroundColor};
  border-width: 2px;
  padding-top: 5px;
`

export const ThemePanel = styled(View) <{ backgroundColor?: `#${string}` }>`
  width: 100%;
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor} ;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 1px;
`

export const ImageContainer = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`