import React from 'react'
import { HabitContainer, HabitName, TouchableContainer } from './styled'
import { HabitProgress } from '../HabitProgress'

export const Habit = ({ id, name, progress, onPress }) => {
  return (
    <HabitContainer>
      <TouchableContainer onPress={() => onPress(id)}>
        <HabitName>
          {name}
        </HabitName>
      </TouchableContainer>
      <HabitProgress progress={progress} />
    </HabitContainer>
  )
}