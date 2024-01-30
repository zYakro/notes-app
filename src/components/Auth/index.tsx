import React, { useEffect, useState } from 'react'
import { Container } from './styled'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import { isUserAuthenticated } from '../../services/auth.service'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack'
import { Routes } from '@/types/types'
import { User } from 'firebase/auth'

const Stack = createStackNavigator()

export const Auth = () => {
  const navigation = useNavigation<StackNavigationProp<Routes>>()

  useEffect(() => {
    isUserAuthenticated(async (user: User) => {
      if (user) {
        navigation.navigate('Main')
      }
    })
  }, [])

  return (
    <Stack.Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}