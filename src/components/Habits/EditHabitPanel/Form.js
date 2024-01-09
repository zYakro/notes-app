import React from 'react'
import { BasicTextInput } from '../../Inputs/BasicTextInput'
import { Difficulty } from '../Difficulty'
import { ButtonContainer, FormContainer, ProgressContainer } from './styled'
import { BasicSubmitButton } from '../../Inputs/BasicSubmitButton'
import { HabitProgress } from '../HabitProgress'
import { Text, View } from 'react-native'

export const Form = ({ name, setName, motivation, setMotivation, difficulty, setDifficulty, onComplete }) => {
  return (
    <FormContainer>
      <BasicTextInput
        text={name}
        onChangeText={setName}
        placeholder='Name'
        icon='▩'
      />
      <BasicTextInput
        text={motivation}
        onChangeText={setMotivation}
        placeholder='Motivation'
        icon='▩'
      />
      <ProgressContainer>
        <HabitProgress progress={20} />
      </ProgressContainer>
      <Difficulty startingDifficulty={difficulty} onChangeDifficulty={setDifficulty} />
      <ButtonContainer>
        <BasicSubmitButton
          title="Complete"
          onPress={onComplete}
        />
      </ButtonContainer>
    </FormContainer>
  )
}
