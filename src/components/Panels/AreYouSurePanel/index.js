import React from 'react'
import { PopupPanel } from '../PopupPanel'
import { Content, PanelText, SubmitButtons, Title } from './styled'
import { BasicSubmitButton } from '../../Inputs/BasicSubmitButton'

export const AreYouSurePanel = ({ visible, panelTitle, text, onYes, onNo, onCloseModal = () => {}}) => {
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
          <BasicSubmitButton title='Yes' onPress={onYes} />
          <BasicSubmitButton title='No' onPress={onNo} />
        </SubmitButtons>
      </Content>    
    </PopupPanel>
  )
}