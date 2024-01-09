import React from 'react'
import { Container } from './styled'
import { CreateHabitPanel } from '../../../components/Habits/CreateHabitPanel'
import { ScreenContainer } from '../styled'

export const CreateHabit = () => {
  return (
    <ScreenContainer>
      <Container>
        <CreateHabitPanel />
      </Container>
    </ScreenContainer>
  )
}