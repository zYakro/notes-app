import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { AnimatedPanel } from '../AnimatedPanel/'
import { BasicPanel } from '../BasicPanel/'
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import { CloseIconContainer } from './styled';

export const Panel = ({ isTabOpen, title, onCloseModal, children }) => {
  const theme = useTheme()

  return (
    <AnimatedPanel
      isTabOpen={isTabOpen}
    >
      <BasicPanel
        title={title}
        titleChildren={
          <CloseIconContainer onPress={onCloseModal} >
            <AntDesign name="close" size={18} color={theme.backgroundColor} />
          </CloseIconContainer>
        }
      >
        {children}
      </BasicPanel>
    </AnimatedPanel>
  )
}