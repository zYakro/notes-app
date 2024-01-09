import React, { useEffect, useState } from 'react'
import { InfoPanel } from './InfoPanel'
import { AreYouSurePanel } from '../../../Panels/AreYouSurePanel'

export const GoalInfo = ({ isVisible, info, closeModal }) => {
  const [isInfoPanelVisible, setIsInfoPanelVisible] = useState(isVisible)
  const [isDesitionPanelVisible, setIsDesitionPanelVisible] = useState(false)

  useEffect(() => {
    setIsInfoPanelVisible(isVisible)
    setIsDesitionPanelVisible(false)
  }, [isVisible])

  const onCompleted = () => {
    closeModal()
  }

  const onDelete = () => {
    setIsInfoPanelVisible(false)
    setIsDesitionPanelVisible(true)
  }

  const onSave = () => {
    closeModal()
  }

  const onYes = () => {
    // Delete
    closeModal()
  }

  const onNo = () => {
    setIsInfoPanelVisible(true)
    setIsDesitionPanelVisible(false)
  }

  return (
    <>
      <InfoPanel
        isVisible={isInfoPanelVisible}
        info={info}
        closeModal={closeModal}
        onCompleted={onCompleted}
        onDelete={onDelete}
        onSave={onSave}
      />
      <AreYouSurePanel 
        visible={isDesitionPanelVisible} 
        panelTitle={"▣ Are you sure?"}
        text={"Are you sure you want to delete this goal?"}
        onCloseModal={closeModal}
        onYes={onYes}  
        onNo={onNo}
      />
    </>
  )
}
