import React from 'react'
import { useTheme } from 'styled-components'
import { AntDesign } from '@expo/vector-icons';
import { CreateHabitPanelContainer, CreateHabitPanelContent, TouchableIconContainer } from './styled';
import { AnimatedPanelOnFocus } from '../../Panels/AnimatedPanelOnFocus';
import { BasicPanel } from '../../Panels/BasicPanel';

export const CreateHabitIconPanel = ({ onPress }: { onPress: () => void}) => {
  const theme = useTheme()

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


