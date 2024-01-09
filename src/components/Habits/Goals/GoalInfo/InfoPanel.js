import React, { useState, useEffect } from 'react'
import { Content, ImageContainer, } from './styled'
import { icons } from '../../../../utils/goals/icons'
import { PopupPanel } from '../../../Panels/PopupPanel'
import { Options } from './Options';
import { Form } from '../CreateGoal/Form';
import { IconImage } from '../CreateGoal/IconImage';

export const InfoPanel = ({ info, isVisible, closeModal, onCompleted, onDelete, onSave }) => {
  const [name, setName] = useState(info.name)
  const [description, setDescription] = useState(info.description)
  const [icon, setIcon] = useState(info.icon || 'flag')

  useEffect(() => {
    setName(info.name)
    setDescription(info.description)
    setIcon(info.icon || 'flag')
  }, [info])

  const submitButtonText = (info.isCompleted) ? 'Uncomplete' : 'Complete'

  return (
    <PopupPanel
      title={"▣ Goal Info"}
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
        <Options onSave={onSave} onDelete={onDelete} />
        <IconImage icon={icon} />
        <Form
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          setIcon={setIcon}
          buttonText={submitButtonText}
          onSubmit={onCompleted}
        />
      </Content>
    </PopupPanel>
  )
}

