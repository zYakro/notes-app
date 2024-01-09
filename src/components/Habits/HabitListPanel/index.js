import React from 'react'
import { HabitsPanel } from '../HabitsPanel'
import { HabitListContainer } from './styled'
import { Habit } from './Habit'
import { useNavigation } from '@react-navigation/native';

export const HabitListPanel = () => {
  const habits = [{
    id: 0,
    name: 'Habit 1',
    motivation: 'asdad',
    progress: 5,
    goals: [
      {
        id: 0,
        name: 'asdad',
        isCompleted: false,
      },
      {
        id: 1,
        name: 'eee',
        isCompleted: false,
      }
    ]
  }, {
    id: 1,
    name: 'Habit 2',
    motivation: 'asdad',
    progress: 20,
    goals: [
      {
        id: 0,
        name: 'asdad',
        isCompleted: false,
      },
      {
        id: 1,
        name: 'eee',
        isCompleted: false,
      }
    ]
  }]

  const navigation = useNavigation()

  const onEditHabit = (id) => {
    navigation.navigate('EditHabit')
  }

  const onCreateHabit = () => {
    navigation.navigate('CreateHabit')
  }

  return (
    <HabitsPanel title={"▣ Habits"}>
      <HabitListContainer>
        {
          habits.map(item => <Habit key={item.id} onPress={onEditHabit} {...item} />)
        }
      </HabitListContainer>
    </HabitsPanel>
  )
}