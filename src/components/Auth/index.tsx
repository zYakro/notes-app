import React, { useEffect } from 'react'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack'
import { Routes } from '@/types/types'
import { supabase } from '@/supabase/config'

const Stack = createStackNavigator()

export const Auth = () => {
  const navigation = useNavigation<StackNavigationProp<Routes>>()

  useEffect(() => {
    supabase.auth.onAuthStateChange((event) => {
      if(event == 'SIGNED_IN' || event == 'INITIAL_SESSION'){
        navigation.navigate('Main')
      }
    })
  }, [])

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}