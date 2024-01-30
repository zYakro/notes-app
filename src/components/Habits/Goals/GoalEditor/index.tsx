import React, { useContext, useState } from 'react'
import { Content } from './styled'
import { PopupPanel } from '../../../Panels/PopupPanel'
import { Options } from './Options';
import { GoalForm } from '../CreateGoal/GoalForm';
import { IconImage } from '../CreateGoal/IconImage';
import { AlertsContext } from '../../../../context/Alerts/AlertsContext';
import { GoalIcons, IGoal } from '@/types/types';

type IGoalEditor = {
  goal: IGoal
  editGoal: (
    name: string,
    description: string,
    icon: GoalIcons,
    isCompleted: boolean
  ) => void
  deleteGoal: () => void
  closeModal: () => void
}

export const GoalEditor = ({ goal, editGoal, deleteGoal, closeModal }: IGoalEditor) => {
  const [isEditorVisible, setIsEditorVisible] = useState(true)
  const [name, setName] = useState(goal?.name || '')
  const [description, setDescription] = useState(goal?.description || '')
  const [icon, setIcon] = useState(goal?.icon || 'flag')
  const [isCompleted, setIsCompleted] = useState(goal?.isCompleted || false)

  const { setAreYouSureAlert } = useContext(AlertsContext)

  const isCompletedText = (isCompleted) ? 'Uncomplete' : 'Complete'

  const onDelete = () => {
    setIsEditorVisible(false)
    setAreYouSureAlert({
      title: 'Delete goal', 
      message: 'Are you sure you want to delete this goal? This can not be undone, and will be deleted foverer if habit is saved!',
      onYes: () => {
        deleteGoal()
      },
      onNo: () => {
        setIsEditorVisible(true)
      }
    })
  }

  const onSave = () => {
    editGoal(name, description, icon, isCompleted)
    closeModal()
  }

  return (
    <>
      {
        isEditorVisible &&
        <PopupPanel
          title={"▣ Edit goal"}
          onCloseModal={() => {
            setIsEditorVisible(false)
          }}
          visible={true}
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
            <GoalForm
              name={name}
              setName={setName}
              description={description}
              setDescription={setDescription}
              setIcon={setIcon}
              buttonText={isCompletedText}
              onSubmit={() => setIsCompleted(!isCompleted)}
            />
          </Content>
        </PopupPanel>
      }
    </>
  )
}