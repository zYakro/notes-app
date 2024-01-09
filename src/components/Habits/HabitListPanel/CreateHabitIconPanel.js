import React from 'react'
import { useTheme } from 'styled-components'
import { AntDesign } from '@expo/vector-icons';
import { CreateHabitPanelContainer, CreateHabitPanelContent, TouchableIconContainer } from './styled';
import { AnimatedPanelOnFocus } from '../../Panels/AnimatedPanelOnFocus';
import { BasicPanel } from '../../Panels/BasicPanel';
import { useNavigation } from '@react-navigation/native';

export const CreateHabitIconPanel = () => {
  const navigation = useNavigation()
  const theme = useTheme()

  const onPress = () => {
    navigation.navigate('CreateHabit')
  }

  return (
    <CreateHabitPanelContainer>
      <AnimatedPanelOnFocus>
        <BasicPanel title={"▣ Create habit"}>
          <CreateHabitPanelContent>
            <TouchableIconContainer onPress={onPress}>
              <AntDesign name="plus" size={22} color={theme.backgroundColor} />
            </TouchableIconContainer>
          </CreateHabitPanelContent>
        </BasicPanel>
      </AnimatedPanelOnFocus>
    </CreateHabitPanelContainer>
  )
}


