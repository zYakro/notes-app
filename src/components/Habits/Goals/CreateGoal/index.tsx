import React, { useState } from 'react'
import { Content } from './styled'
import { PopupPanel } from '../../../Panels/PopupPanel'
import { IconImage } from './IconImage'
import { GoalForm } from './GoalForm';
import { GoalIcons } from '@/types/types';

type ICreateGoal = {
  createGoal: (name: string, description: string, icon: GoalIcons) => void
  closeModal: () => void
}

export const CreateGoal = ({ createGoal, closeModal }: ICreateGoal) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [icon, setIcon] = useState<GoalIcons>('flag')

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
