import React from 'react'
import { Container } from './styled'
import { EditHabit } from './EditHabit'
import { CreateHabit } from './CreateHabit'
import { HabitList } from './HabitList'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const HabitsView = () => {
  return (
    <Stack.Navigator initialRouteName='HabitList' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HabitList" component={HabitList} />
      <Stack.Screen name="CreateHabit" component={CreateHabit} />
      <Stack.Screen name="EditHabit" component={EditHabit} />
    </Stack.Navigator>
  )
}