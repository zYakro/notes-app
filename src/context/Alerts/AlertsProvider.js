import React, { useEffect, useRef, useState } from 'react'
import { AlertsContext } from './AlertsContext'
import { AreYouSurePanel } from '../../components/Panels/AreYouSurePanel'
import { AlertPanel } from '../../components/Panels/AlertPanel'

export const AlertsProvider = ({ children }) => {
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const onYesFunction = useRef(() => {})
  const onNoFunction = useRef(() => {})

  const [isAreYouSurePanelVisible, setIsAreYouSurePanelVisible] = useState(false)
  const [isAlertPanelVisible, setIsAlertPanelVisible] = useState(false)

  const setAlert = ({ title, message }) => {
    setTitle(title)
    setMessage(message)
    setIsAlertPanelVisible(true)
  }

  const setAreYouSureAlert = ({ title, message, onYes, onNo = () => {} }) => {
    setTitle(title)
    setMessage(message)
    onYesFunction.current = onYes 
    onNoFunction.current = onNo
    setIsAreYouSurePanelVisible(true)
  }

  const onNo = () => {
    onNoFunction.current()
    setIsAreYouSurePanelVisible(false)
  }

  const onYes = () => {
    onYesFunction.current()
    setIsAreYouSurePanelVisible(false)
  }

  return (
    <AlertsContext.Provider value={{ setAlert, setAreYouSureAlert }}>
      {children}
      { 
        isAreYouSurePanelVisible &&
        <AreYouSurePanel 
          panelTitle={title} 
          text={message}
          onYes={onYes}
          onNo={onNo}
          visible={true}
          onCloseModal={() => {
            setIsAreYouSurePanelVisible(false)
          }}
        />
      }
      {
        isAlertPanelVisible && 
        <AlertPanel 
          panelTitle={title}
          text={message}
          visible={true}
          onCloseModal={() => {
            setIsAlertPanelVisible(false)
          }}
        />
      }
    </AlertsContext.Provider>
  )
}

