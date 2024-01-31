import React, { useState } from 'react'
import { HabitsPanel } from '../HabitsPanel'
import { BasicTextInput } from '../../Inputs/BasicTextInput'
import { Difficulty } from '../Difficulty'
import { ButtonContainer, Content, ViewContainer } from './styled'
import { Goals } from '../Goals'
import { BasicSubmitButton } from '../../Inputs/BasicSubmitButton'
import { useNavigation } from '@react-navigation/native'
import { HabitDifficulty, IGoals, Routes } from '@/types/types'
import { StackNavigationProp } from '@react-navigation/stack'
import { useUnsavedChangesAlert } from '@/hooks/useUnsavedChangesAlert/useUnsavedChangesAlert'
import { DIFFICULTY_EASY } from '@/constant/habitConsts'
import { useIsTabOpenOnFocus } from '@/hooks/useIsTabOpenOnFocus/useIsTabOpenOnPage'

type ICreateHabit = {
  createHabit: ({ }: { name: string, motivation: string, difficulty: HabitDifficulty, progress: number, goals: IGoals }) => Promise<boolean>
}

export const CreateHabit = ({ createHabit }: ICreateHabit) => {
  const navigation = useNavigation<StackNavigationProp<Routes>>()

  const [isTabOpen, setIsTabOpen] = useIsTabOpenOnFocus(true)

  const [name, setName] = useState('')
  const [motivation, setMotivation] = useState('')
  const [difficulty, setDifficulty] = useState<HabitDifficulty>(DIFFICULTY_EASY)
  const [goals, setGoals] = useState<IGoals>([])

  const hasUnsavedChanges = (name != '')

  useUnsavedChangesAlert(hasUnsavedChanges)

  const onCreateHabit = async () => {
    setIsTabOpen(false)

    const success = await createHabit({
      name,
      motivation,
      difficulty,
      progress: 0,
      goals,
    })

    if (success)
      return navigation.navigate('HabitList')

    setIsTabOpen(true)
  }

  return (
    <ViewContainer>
      <HabitsPanel title={"▣ Create habit"} isTabOpen={isTabOpen}>
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
      <Goals goals={goals} setGoals={setGoals} isTabOpen={isTabOpen} />
    </ViewContainer>
  )
}