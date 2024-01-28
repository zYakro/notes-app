import React, { useState } from 'react'
import { Content } from './styled'
import { PopupPanel } from '../../../Panels/PopupPanel'
import { IconImage } from './IconImage'
import { GoalForm } from './GoalForm';

export const CreateGoal = ({ createGoal, closeModal }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [icon, setIcon] = useState('flag')

  const onCreateGoal = () => {
    createGoal(name, description, icon) 
    closeModal()
  }

  return (
    <PopupPanel
      title={"▣ Create a goal"}
      onCloseModal={closeModal}
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
