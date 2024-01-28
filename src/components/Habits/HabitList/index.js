import React from 'react'
import { HabitsPanel } from '../HabitsPanel'
import { HabitListContainer, ViewContainer } from './styled'
import { Habit } from './Habit'
import { useNavigation } from '@react-navigation/native';
import { CreateHabitIconPanel } from './CreateHabitIconPanel';

export const HabitList = ({ habits, getHabitInfo }) => {
  const navigation = useNavigation()

  const onEditHabit = async (id) => {
    await getHabitInfo(id)
    navigation.navigate('EditHabit')
  }

  const onCreateHabit = () => {
    navigation.navigate('CreateHabit')
  }

  return (
    <ViewContainer>
      <HabitsPanel title={"▣ Habits"}>
        <HabitListContainer>
          {
            habits.map(habit => {
              return <Habit key={habit.id} onPress={onEditHabit} {...habit} />
            })
          }
        </HabitListContainer>
      </HabitsPanel>
      <CreateHabitIconPanel onPress={onCreateHabit} />
    </ViewContainer>
  )
}