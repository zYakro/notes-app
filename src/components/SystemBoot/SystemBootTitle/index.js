import React from 'react'
import { TerminalTitleText, TitleContainer, TitleTypingText } from './styled'
import { useDotsEffect } from '../../../hooks/Animations/useDotsEffect'
import { systemBootConfig } from '../../../constant/animationSettings/systemBootConfig'

export const SystemBootTitle = () => {
  const dotsEffect = useDotsEffect(systemBootConfig.titleDots)

  return (
    <TitleContainer>
      <TitleTypingText
        text={`System booting`}
        velocity={1}
        duration={systemBootConfig.title.duration}
        typingChar='|'
      />
      <TerminalTitleText>
        {dotsEffect}
      </TerminalTitleText>
    </TitleContainer>
  )
}
