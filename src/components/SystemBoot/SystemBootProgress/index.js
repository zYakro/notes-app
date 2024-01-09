import React from 'react'
import { TerminalText } from '../../../styles/styled-components/TerminalText'
import { InLineProgressBar } from '../../ProgressBars/InLineProgressBar'
import { SystemBootProgressContainer, SystemBootItemContainer } from './styled'
import { animatedPanel } from '../../../constant/animationSettings/animatedPanel'


const SystemBootItem = ({ text }) => {
  const getRandomDuration = () => Math.floor(Math.random() * 4000) + 2000
  const getRandomDelay = () => Math.floor(Math.random() * 2000) + animatedPanel.open

  return (
    <SystemBootItemContainer>
      <TerminalText>{ text }</TerminalText>
      <InLineProgressBar duration={getRandomDuration()} delay={getRandomDelay()} />
    </SystemBootItemContainer>
  )
}

export const SystemBootProgress = () => {
  return (
    <SystemBootProgressContainer>
      <SystemBootItem text="Initiating systems..." />
      <SystemBootItem text="Connecting to the network..." />
      <SystemBootItem text="Updating systems..." />
      <SystemBootItem text="Verifying systems..." />
      <SystemBootItem text="Getting data from [REDACTED]" />
      <SystemBootItem text="Updating user info..." />
      <SystemBootItem text="Getting cache data..." />
    </SystemBootProgressContainer>
  )
}
