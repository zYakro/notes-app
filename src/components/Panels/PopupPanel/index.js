import { OverlayBackground, PopupPanelContainer } from './styled'
import { Modal } from 'react-native'
import { useEffect, useState } from 'react'
import { Panel } from './Panel'

export const PopupPanel = ({ children, onCloseModal, visible, title, style }) => {

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