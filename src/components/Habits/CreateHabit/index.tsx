import React, { useState } from 'react'
import { HabitsPanel } from '../HabitsPanel'
import { BasicTextInput } from '../../Inputs/BasicTextInput'
import { Difficulty } from '../Difficulty'
import { ButtonContainer, Content, ViewContainer } from './styled'
import { Goals } from '../Goals'
import { BasicSubmitButton } from '../../Inputs/BasicSubmitButton'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '@/types/types'
import { StackNavigationProp } from '@react-navigation/stack'

export const CreateHabit = ({ createHabit }) => {
  const navigation = useNavigation<StackNavigationProp<Routes>>()

  const [name, setName] = useState('')
  const [motivation, setMotivation] = useState('')
  const [difficulty, setDifficulty] = useState('easy')
  const [goals, setGoals] = useState([])

  const onCreateHabit = () => {
    createHabit({
      name,
      motivation,
      difficulty,
      progress: 0,
      goals,
    })

    navigation.navigate('HabitList')
  }

  return (
    <ViewContainer>
      <HabitsPanel title={"▣ Create habit"}>
        <Content>
          <BasicTextInput
            text={name}
            onChangeText={setName}
            placeholder='Name'
            icon='▩'
          />
          <BasicTextInput
            text={motivation}
            onChangeText={setMotivation}
            placeholder='What is your motivation?'
            icon='▩'
          />
          <Difficulty onChangeDifficulty={setDifficulty} />
          <ButtonContainer>
            <BasicSubmitButton
              title="Create habit"
              onPress={onCreateHabit}
            />
          </ButtonContainer>
        </Content>
      </HabitsPanel>
      <Goals goals={goals} setGoals={setGoals} />
    </ViewContainer>
  )
}