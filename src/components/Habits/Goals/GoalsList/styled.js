import { FlatList } from "react-native";
import styled from "styled-components";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

export const GoalListContainer = styled.View`
  display: flex; 
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 0 5px;
  border-left-width: 3px;
  overflow: hidden;
  border-color: ${({ theme }) => theme.panelLines};
`

export const GoalsFlatlist = styled(FlatList)`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  overflow: hidden;
`

export const ButtonContainer = styled(TouchableWithoutFeedback)`
  min-width: 100%;
  height: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  margin-bottom: 5px;
  border-top-width: 2px;
  border-bottom-width: 2px;
  border-color: ${({theme, isFocused}) => isFocused ? theme.onBackgroundColor : theme.backgroundColor};
  padding: 2px 0px;
`

export const AnimatedViewContainer = styled(Animated.View)`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 2px;
  background-color: red;
  padding: 0px 2px;
  border-radius: 1px;
  flex: 1;
`

export const StyledText = styled.Text`
  color: ${({ color }) => color};
  font-size: 15px; 
  text-decoration-line: ${({ isCompleted }) => isCompleted ? 'line-through' : 'none'}
`