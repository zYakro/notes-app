import React, { useEffect, useState } from 'react'
import { Container } from './styled'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import { animatedPanel } from '../../constant/animationSettings/animatedPanel'
import { isUserAuthenticated } from '../../services/auth.service'
import { useNavigation } from '@react-navigation/native'

export const Auth = () => {
  const navigation = useNavigation()
  
  const [isPanelActive, setIsPanelActive] = useState(true)
  const [displayPanel, setDisplayPanel] = useState(true)

  const changePanel = () => {
    setIsPanelActive(isActive => !isActive)
  
    setTimeout(() => {
      setDisplayPanel(isActive => !isActive)
    }, animatedPanel.close)
  }

  useEffect(() => {
    isUserAuthenticated(async user => {
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