import React, { useEffect, useState } from 'react'
import { Container } from './styled'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import { animatedPanel } from '../../constant/animationSettings/animatedPanel'
import { isUserAuthenticated } from '../../services/auth.service'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Routes } from '@/types/types'
import { User } from 'firebase/auth'

export const Auth = () => {
  const navigation = useNavigation<StackNavigationProp<Routes>>()
  
  const [isPanelActive, setIsPanelActive] = useState(true)
  const [displayPanel, setDisplayPanel] = useState(true)

  const changePanel = () => {
    setIsPanelActive(isActive => !isActive)
  
    setTimeout(() => {
      setDisplayPanel(isActive => !isActive)
    }, animatedPanel.close)
  }

  useEffect(() => {
    isUserAuthenticated(async (user: User) => {
      if(user){
        navigation.navigate('Main') 
      }
    })
  }, [])

  return (
    <Container>
      {
        displayPanel &&
        <SignIn changePanel={changePanel} isPanelActive={isPanelActive} />
      }
      {
        !displayPanel &&
        <SignUp changePanel={changePanel} isPanelActive={!isPanelActive} />
      }
    </Container>
  )
}