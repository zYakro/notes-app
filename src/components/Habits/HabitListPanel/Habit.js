import React from 'react'
import { HabitContainer, HabitName, TouchableContainer } from './styled'
import { HabitProgress } from '../HabitProgress'
import { PlusCircle } from './PlusCircle'

export const Habit = ({ id, name, progress, onPress }) => {
  return (
    <HabitContainer>
      <PlusCircle />
      <TouchableContainer onPress={() => onPress(id)}>
        <HabitName>
          {name}
        </HabitName>
      </TouchableContainer>
      <HabitProgress progress={progress} />
    </HabitContainer>
  )
}