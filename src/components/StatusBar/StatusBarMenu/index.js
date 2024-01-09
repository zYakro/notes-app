import React from 'react'
import { StatusBarContainer, StatusBarLines, StatusBarItems } from './styled'
import { ExpandAnimation } from '../../Animations/ExpandAnimation'
import { SafeAreaInsets } from '../../SafeAreaInsets'

export const StatusBarMenu = ({ children }) => {
  return (
    <SafeAreaInsets>
      <StatusBarContainer>
        <ExpandAnimation
          duration={250}
          delay={250}
        >
          <StatusBarLines>
            <StatusBarItems>
              { children } 
            </StatusBarItems>
          </StatusBarLines>
        </ExpandAnimation>
      </StatusBarContainer>
    </SafeAreaInsets>
  )
}

