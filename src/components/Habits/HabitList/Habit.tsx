import React from 'react'
import { HabitContainer, HabitName, TouchableContainer } from './styled'
import { HabitProgress } from '../HabitProgress'

type IHabit = {
  id: number
  name: string
  progress: number
  onPress: (id: number) => void
}

export const Habit = ({ id, name, progress, onPress }: IHabit) => {
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