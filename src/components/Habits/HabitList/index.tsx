import React from 'react'
import { HabitsPanel } from '../HabitsPanel'
import { HabitListContainer, ViewContainer } from './styled'
import { Habit } from './Habit'
import { useNavigation } from '@react-navigation/native';
import { CreateHabitIconPanel } from './CreateHabitIconPanel';
import { IHabitList, Routes } from '@/types/types';
import { StackNavigationProp } from '@react-navigation/stack';

type IHabitListParams = {
  habits: IHabitList
  getHabitInfo: (id: string) => Promise<void>
}

export const HabitList = ({ habits, getHabitInfo }: IHabitListParams) => {
  const navigation = useNavigation<StackNavigationProp<Routes>>()

  const onEditHabit = async (id: string) => {
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