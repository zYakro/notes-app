import React from 'react'
import { BasicPanelBody, BasicPanelLines, BasicPanelTitle, BasicPanelTitleContainer, BasicPanelView, EndMenu } from './styled'

type IBasicPanel = {
  title?: string | undefined 
  children: React.ReactNode
  titleChildren?: React.ReactNode
}

export const BasicPanel = ({ title = undefined, children, titleChildren = <></>}: IBasicPanel) => {
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