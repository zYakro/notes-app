import React from 'react'
import { EnergyPanelContainer, EnergyPanelContent, EnergyPanelTypingText, TypingTextScroll } from './styled'
import { energyInfo } from '../../../utils/energy/energyInfo'
import { animatedPanel } from '../../../constant/animationSettings/animatedPanel'
import { BasicPanel } from '../../Panels/BasicPanel'
import { AnimatedPanelOnFocus } from '../../Panels/AnimatedPanelOnFocus'

export const EnergyTextPanel = () => {
  return (
    <EnergyPanelContainer>
      <AnimatedPanelOnFocus>
        <BasicPanel title="▣ Battery Info">
          <EnergyPanelContent>
            <TypingTextScroll>
              <EnergyPanelTypingText
                text={energyInfo}
                duration={5000}
                delay={animatedPanel.open}
                velocity={8}
                typingChar='█'
              />
            </TypingTextScroll>
          </EnergyPanelContent>
        </BasicPanel>
      </AnimatedPanelOnFocus>
    </EnergyPanelContainer>
  )
}