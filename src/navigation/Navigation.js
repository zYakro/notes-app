import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Tabs } from './Tabs';
import { StatusBar } from '../components/StatusBar';

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
      <StatusBar />
      <NavigationContainer theme={theme} >
        <Tabs />
      </NavigationContainer>
    </>
  )
}