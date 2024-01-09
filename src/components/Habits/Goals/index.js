import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { GoalsContainer } from './styled'
import { GoalsList } from './GoalsList'
import { GoalsMap } from './GoalsMap'
import { GoalInfo } from './GoalInfo'
import { AreYouSurePanel } from '../../Panels/AreYouSurePanel'
import { CreateGoal } from './CreateGoal'

export const Goals = () => {
  const [focusedItem, setFocusedItem] = useState({})
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [showCreateGoal, setShowCreateGoal] = useState(false)

  const info = [
    {
      id: 0,
      name: 'adsasdasddsadas',
      description: 'adss',
      isCompleted: true,
      icon: 'flag'
    },
    {
      id: 1,
      name: 'ads',
      description: 'adss',
      isCompleted: false,
      icon: 'barbell'
    },
    {
      id: 2,
      name: 'ads',
      description: 'adss',
      isCompleted: false,
      icon: 'book'
    },
    {
      id: 3,
      name: 'ads',
      description: 'adss',
      isCompleted: false,
      icon: 'dog'
    },
    {
      id: 4,
      name: 'ads',
      description: 'adss',
      isCompleted: false,
      icon: 'flag'
    }
  ]

  const changeFocusItem = (item) => {
    setFocusedItem(item)
  }

  const closeModal = () => {
    setIsModalVisible(false)
  }

  const setModalVisible = (item) => {
    setFocusedItem(item)
    setIsModalVisible(true)
  }

  const closeCreateGoalModal = () => {
    setShowCreateGoal(false)
  }

  const showCreateGoalModal = () =>{
    setShowCreateGoal(true)
  }

  return (
    <GoalsContainer>
      <GoalsList
        goals={info}
        onPress={changeFocusItem}
        onLongPress={setModalVisible}
        onCreateModal={showCreateGoalModal}
        focusedItem={focusedItem} />
      <GoalsMap
        goals={info}
        onPress={changeFocusItem}
        onLongPress={setModalVisible}
        focusedItem={focusedItem} />
      <GoalInfo info={focusedItem} closeModal={closeModal} isVisible={isModalVisible}/>
      <CreateGoal closeModal={closeCreateGoalModal} isVisible={showCreateGoal}/>
    </GoalsContainer>
  )
}