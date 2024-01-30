import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { AnimatedPanel } from '../AnimatedPanel'
import { BasicPanel } from '../BasicPanel'
import { useTheme } from 'styled-components';
import { CloseIconContainer } from './styled';

type IPanel = {
  isTabOpen: boolean
  title: string
  onCloseModal?: () => void
  children: React.ReactNode
}

export const Panel = ({ isTabOpen, title, onCloseModal, children }: IPanel) => {
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