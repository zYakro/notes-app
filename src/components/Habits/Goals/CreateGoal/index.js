import React, { useState } from 'react'
import { Content, ImageContainer } from './styled'
import { Form } from './Form'
import { PopupPanel } from '../../../Panels/PopupPanel'
import { IconImage } from './IconImage'

export const CreateGoal = ({ isVisible, closeModal}) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [icon, setIcon] = useState('flag')

  const onCreateGoal = () => {
    closeModal()  
  }

  return (
    <PopupPanel
      title={"▣ Create a goal"}
      onCloseModal={closeModal}
      visible={isVisible}
      style={{
        width: '100%',
        maxWidth: 450,
        height: '90%',
        maxHeight: 500
      }}
    >
      <Content>
        <IconImage icon={icon} />
        <Form
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          setIcon={setIcon}
          buttonText={'Create Goal'}
          onSubmit={onCreateGoal}
        />
      </Content>
    </PopupPanel>
  )
}
