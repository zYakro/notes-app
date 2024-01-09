import React from 'react'
import { Container } from './styled'
import { EditHabitPanel } from '../../../components/Habits/EditHabitPanel'
import { ScreenContainer } from '../styled'

export const EditHabit = () => {
  return (
    <ScreenContainer>
      <Container>
        <EditHabitPanel />
      </Container>
    </ScreenContainer>
  )
}