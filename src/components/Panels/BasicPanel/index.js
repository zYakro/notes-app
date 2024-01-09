import React from 'react'
import { BasicPanelBody, BasicPanelLines, BasicPanelTitle, BasicPanelTitleContainer, BasicPanelView, EndMenu } from './styled'

export const BasicPanel = ({ title = undefined, children, titleChildren = <></>}) => {
  return (
    <BasicPanelView>
      {title &&
        <BasicPanelTitleContainer>
          <BasicPanelTitle
            text={title}
            duration={600}
            velocity={1}
            delay={700}
            typingChar='|'
          />
          <EndMenu>
            { titleChildren }
          </EndMenu>
        </BasicPanelTitleContainer>
      }
      <BasicPanelBody>
        <BasicPanelLines>
          {children}
        </BasicPanelLines>
      </BasicPanelBody>
    </BasicPanelView>
  )
}