import { OverlayBackground, PopupPanelContainer } from './styled'
import { Modal, ViewStyle } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Panel } from './Panel'

type IPopupPanel = {
  children: React.ReactNode
  onCloseModal?: () => void
  visible: boolean
  title: string
  style: ViewStyle
}

export const PopupPanel = ({ children, onCloseModal, visible, title, style }: IPopupPanel) => {

  const [isTabOpen, setIsTabOpen] = useState(visible)
  const [isModalVisible, setIsModalVisible] = useState(visible)

  useEffect(() => {
    if (visible) {
      setIsModalVisible(true)
      setIsTabOpen(true)
      return;
    }

    setIsTabOpen(false)

    setIsModalVisible(false)
  }, [visible])

  return (
    <Modal
      transparent
      animationType='fade'
      visible={isModalVisible}
    >
      <OverlayBackground>
        <PopupPanelContainer style={style}>
          <Panel isTabOpen={isTabOpen} onCloseModal={onCloseModal} title={title}>
            {children}
          </Panel>
        </PopupPanelContainer>
      </OverlayBackground>
    </Modal>
  )
}