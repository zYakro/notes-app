import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { AuthPanel } from './AuthPanel'
import { Container } from './styled'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import { animatedPanel } from '../../constant/animationSettings/animatedPanel'

export const Auth = () => {
  const [isPanelActive, setIsPanelActive] = useState(false)
  const [displayPanel, setDisplayPanel] = useState(false)

  const changePanel = () => {
    setIsPanelActive(isActive => !isActive)
  
    setTimeout(() => {
      setDisplayPanel(isActive => !isActive)
    }, animatedPanel.close)
  }

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