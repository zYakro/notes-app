import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { MainNavigation } from './MainNavigation';
import { AuthView } from '../views/AuthView'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export const Navigation = () => {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "rgba(0, 0, 0, 0)"
    }
  }



  return (
    <>
      <NavigationContainer theme={theme} >
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Auth'>
          <Stack.Screen name="Main" component={MainNavigation} />
          <Stack.Screen name="Auth" component={AuthView} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}