import React from 'react'
import { PopupPanel } from '../PopupPanel'
import { Content, PanelText, SubmitButtons } from './styled'
import { BasicSubmitButton } from '../../Inputs/BasicSubmitButton'

export const AlertPanel = ({ visible, panelTitle, text, onCloseModal = () => {}}) => {
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
          <BasicSubmitButton title='Ok' onPress={onCloseModal} />
        </SubmitButtons>
      </Content>    
    </PopupPanel>
  )
}