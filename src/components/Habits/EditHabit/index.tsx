import React, { useContext, useState } from 'react'
import { HabitsPanel } from '../HabitsPanel'
import { Goals } from '../Goals'
import { ViewContainer } from './styled'
import { PanelTopOptions, PanelTopOption } from '../../Panels/PanelTopOptions'
import { BasicTextInput } from '../../Inputs/BasicTextInput'
import { Difficulty } from '../Difficulty'
import { ButtonContainer, FormContainer, ProgressContainer } from './styled'
import { BasicSubmitButton } from '../../Inputs/BasicSubmitButton'
import { HabitProgress } from '../HabitProgress'
import { AlertsContext } from '@/context/Alerts/AlertsContext'
import { useNavigation } from '@react-navigation/native'
import { IHabitInfo, Routes } from '@/types/types'
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types'

type EditHabit = {
  habit: IHabitInfo | undefined
  updateHabit: ({}: IHabitInfo) => Promise<void>
  deleteHabit: () => Promise<void>
}

export const EditHabit = ({ habit, updateHabit, deleteHabit }: EditHabit) => {
  const [name, setName] = useState<string | undefined>(habit?.name || '')
  const [motivation, setMotivation] = useState(habit?.motivation || '')
  const [difficulty, setDifficulty] = useState(habit?.difficulty || 'easy')
  const [progress, setProgress] = useState(habit?.progress || 0)
  const [goals, setGoals] = useState(habit?.goals || [])

  const navigation = useNavigation<StackNavigationProp<Routes>>()
  const { setAreYouSureAlert } = useContext(AlertsContext) 

  const onComplete = () => {
    setProgress(progress + 1)
  }

  const onSave = async () => {
    await updateHabit({
      id: habit.id,
      name,
      motivation,
      difficulty, 
      progress,
      goals,
      createdAt: habit.createdAt
    })

    navigation.navigate('HabitList')
  }

  const onDelete = async () => {
    setAreYouSureAlert({
      title: 'Delete habit',
      message: 'Are you sure you want to delete this habit? This action can not be undone.',
      onYes: async () => {
        await deleteHabit()
        navigation.navigate('HabitList')
      },
      onNo: () => {}
    })
  }

  return (
    <ViewContainer>
      <HabitsPanel title={"▣ Edit habit"}>
        <PanelTopOptions>
          <PanelTopOption name="Delete" onPress={onDelete} />
          <PanelTopOption name="Save" onPress={onSave} />
        </PanelTopOptions>
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
            <HabitProgress progress={progress} />
          </ProgressContainer>
          <Difficulty startingDifficulty={difficulty} onChangeDifficulty={setDifficulty} />
          <ButtonContainer>
            <BasicSubmitButton
              title="Complete"
              onPress={onComplete}
            />
          </ButtonContainer>
        </FormContainer>
      </HabitsPanel>
      <Goals goals={goals} setGoals={setGoals}/>
    </ViewContainer>
  )
}