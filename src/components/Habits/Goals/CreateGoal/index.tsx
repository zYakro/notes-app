import React, { useContext, useState } from 'react'
import { Content } from './styled'
import { PopupPanel } from '../../../Panels/PopupPanel'
import { IconImage } from './IconImage'
import { GoalForm } from './GoalForm';
import { GoalIcons } from '@/types/types';
import { AlertsContext } from '@/context/Alerts/AlertsContext';

type ICreateGoal = {
  createGoal: (name: string, description: string, icon: GoalIcons) => boolean
  closeModal: () => void 
}

export const CreateGoal = ({ createGoal, closeModal }: ICreateGoal) => {
  const { setAreYouSureAlert } = useContext(AlertsContext)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [icon, setIcon] = useState<GoalIcons>('flag')

  const hasUnsavedChanges = (name != '')

  const onCreateGoal = () => {
    const success = createGoal(name, description, icon) 
    if(success)
      closeModal()
  }

  const onCloseEditor = () => {
    if (hasUnsavedChanges) {
      return setAreYouSureAlert({
        title: 'Unsaved changes',
        message: "You have unsaved changes, are you sure you want to discard them?",
        onYes: () => {
          closeModal()
        }
      })
    }

    closeModal()
  }

  return (
    <PopupPanel
      title={"▣ Create a goal"}
      onCloseModal={onCloseEditor}
      visible={true}
      style={{
        width: '100%',
        maxWidth: 450,
        height: '90%',
        maxHeight: 500
      }}
    >
      <Content>
        <IconImage icon={icon} />
        <GoalForm 
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          setIcon={setIcon}
          onSubmit={onCreateGoal}
          buttonText={"Create goal"}
        />
      </Content>
    </PopupPanel>
  )
}
