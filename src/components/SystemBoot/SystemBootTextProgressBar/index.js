import React, { useEffect, useState } from 'react'
import { useTextProgressBar } from '../../../hooks/Animations/useTextProgressBar'
import { TerminalText } from '../../../styles/styled-components/TerminalText'
import { TextProgressBarContainer } from './styled'
import { systemBootConfig } from '../../../constant/animationSettings/systemBootConfig'

export const SystemBootTextProgressBar = ({ onHasFinished = () => { } }) => {
  const [progressBarText, percentage, hasFinished] = useTextProgressBar(systemBootConfig.textProgressBar)

  const [delayedHasFinished, setDelayedHasFinished] = useState(false)

  useEffect(() => {
    if (hasFinished) {
      setTimeout(() => setDelayedHasFinished(true), systemBootConfig.textProgressBarTextDelay)
      onHasFinished();
    }
  }, [hasFinished])

  return (
    <TextProgressBarContainer>
      <TerminalText fontSize={'16px'}>
        {!delayedHasFinished ? `[${progressBarText}] ${percentage}` : `⚠ ACCESS: GRANTED ⚠`}
      </TerminalText>
    </TextProgressBarContainer>
  )
}
