import React, { useState } from 'react'
import { HabitsPanel } from '../HabitsPanel'
import { Goals } from '../Goals'
import { ViewContainer } from './styled'
import { Form } from './Form'
import { Options } from './Options'
import { AreYouSurePanel } from '../../Panels/AreYouSurePanel'

export const EditHabitPanel = ({ habit = {} }) => {
  const [name, setName] = useState('asdd')
  const [motivation, setMotivation] = useState('asdad')
  const [difficulty, setDifficulty] = useState('medium')
  const [progress, setProgress] = useState(20)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const onComplete = () => {

  }

  const showModal = () => setIsModalVisible(true)

  const closeModal = () => setIsModalVisible(false)

  const onSave = () => {

  }

  const onDelete = () => {
    closeModal()
  }

  return (
    <ViewContainer>
      <HabitsPanel title={"▣ Edit habit"}>
        <Options onDelete={showModal} onSave={onSave}/>
        <Form
          name={name}
          setName={setName}
          motivation={motivation}
          setMotivation={setMotivation}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          onComplete={onComplete}
        />
      </HabitsPanel>
      <Goals />
      <AreYouSurePanel 
        visible={isModalVisible}
        panelTitle={"▣ Are you sure?"}
        text={"Are you sure you want to delete this habit? This action can not be undone"}
        onNo={closeModal}
        onYes={onDelete}
        onCloseModal={closeModal}
      />
    </ViewContainer>
  )
}