import React, { useEffect } from 'react'
import { EditHabit } from './EditHabit'
import { CreateHabit } from './CreateHabit'
import { HabitList } from './HabitList'
import { createStackNavigator } from '@react-navigation/stack';
import { useHabits } from '../../hooks/useHabits/useHabits';

const Stack = createStackNavigator();

export const Habits = () => {
  const {
    habitList,
    currentHabitInfo,
    getHabitList,
    getHabitInfo,
    updateHabit,
    createHabit,
    deleteHabit
  } = useHabits()

  useEffect(() => {
    getHabitList()
  }, [])

  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="HabitList">
        {(props) => <HabitList {...props} habits={habitList} getHabitInfo={getHabitInfo}/>}
      </Stack.Screen>
      <Stack.Screen name="CreateHabit">
        {(props) => <CreateHabit {...props} createHabit={createHabit}/>}
      </Stack.Screen>
      <Stack.Screen name="EditHabit">
        {(props) => <EditHabit {...props} habit={currentHabitInfo} updateHabit={updateHabit} deleteHabit={deleteHabit} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}