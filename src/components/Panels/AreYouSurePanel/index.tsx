import React from 'react'
import { PopupPanel } from '../PopupPanel'
import { Content, PanelText, SubmitButtons } from './styled'
import { BasicSubmitButton } from '../../Inputs/BasicSubmitButton'

type IAreYouSurePanel = {
  visible: boolean
  panelTitle: string
  text: string
  onYes: () => void
  onNo?: () => void
  onCloseModal?: () => void
}

export const AreYouSurePanel = ({ visible, panelTitle, text, onYes, onNo, onCloseModal = () => {}}: IAreYouSurePanel) => {
  return (
    <PopupPanel 
      visible={visible}
      onCloseModal={onCloseModal}
      title={panelTitle}
      style={{
        width: '90%',
        height: 'auto',
        maxHeight: 150
      }}
    >
      <Content>
        <PanelText>
          {text}
        </PanelText>
        <SubmitButtons>
          <BasicSubmitButton title='No' onPress={onNo} />
          <BasicSubmitButton title='Yes' onPress={onYes} />
        </SubmitButtons>
      </Content>    
    </PopupPanel>
  )
}