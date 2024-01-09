import React, { useState } from 'react'
import { HabitsPanel } from '../HabitsPanel'
import { BasicTextInput } from '../../Inputs/BasicTextInput'
import { Difficulty } from '../Difficulty'
import { ButtonContainer, Content, ViewContainer } from './styled'
import { Goals } from '../Goals'
import { BasicSubmitButton } from '../../Inputs/BasicSubmitButton'
import { useNavigation } from '@react-navigation/native'

export const CreateHabitPanel = ({ }) => {
  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [motivation, setMotivation] = useState('')
  const [difficulty, setDifficulty] = useState('')

  const onCreateHabit = () => {
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
      <Goals />
    </ViewContainer>
  )
}