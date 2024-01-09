import { View, Text } from 'react-native'
import React from 'react'
import { Container } from './styled'
import { HabitListPanel } from '../../../components/Habits/HabitListPanel'
import { ScreenContainer } from '../styled'
import { CreateHabitIconPanel } from '../../../components/Habits/HabitListPanel/CreateHabitIconPanel'

export const HabitList = ({ }) => {
  return (
    <ScreenContainer>
      <Container>
        <HabitListPanel />
        <CreateHabitIconPanel />
      </Container>
    </ScreenContainer>
  )
}