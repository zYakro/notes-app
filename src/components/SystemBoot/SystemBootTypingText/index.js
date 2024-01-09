import React from 'react'
import { TerminalText } from './styled'
import { TypingTextScroll } from './styled'
import { animatedPanel } from '../../../constant/animationSettings/animatedPanel'
import { systemBootConfig } from '../../../constant/animationSettings/systemBootConfig'
  
export const SystemBootTypingText = ({ duration = 5000, velocity = 8, onFinish = () => {}, dataToType }) => {
  return (
    <TypingTextScroll>
      <TerminalText
        text={dataToType}
        duration={duration}
        delay={animatedPanel.open + systemBootConfig.typingPanels.delay}  
        velocity={velocity}
        onFinish={onFinish} 
        typingChar='█'
      />
    </TypingTextScroll>
  )
}
