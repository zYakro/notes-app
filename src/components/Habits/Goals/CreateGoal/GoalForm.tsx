import { GoalIcons } from '@/types/types';
import { BasicSubmitButton } from '../../../Inputs/BasicSubmitButton';
import { BasicTextInput } from '../../../Inputs/BasicTextInput';
import { IconSelector } from './IconSelector';
import { FormContainer, SubmitButtonContainer } from './styled'

type IGoalForm = {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  description: string
  setDescription: React.Dispatch<React.SetStateAction<string>>
  setIcon: React.Dispatch<React.SetStateAction<GoalIcons>>
  onSubmit: () => void
  buttonText: string
}

export const GoalForm = ({ name, setName, description, setDescription, setIcon, onSubmit, buttonText}) => {
  return (
    <FormContainer>
      <IconSelector onIconPress={setIcon} />
      <BasicTextInput
        placeholder='Name'
        icon='◘'
        text={name}
        onChangeText={setName}
      />
      <BasicTextInput
        placeholder='Description'
        icon='◘'
        text={description}
        onChangeText={setDescription}
      />
      <SubmitButtonContainer>
        <BasicSubmitButton title={buttonText} onPress={onSubmit} />
      </SubmitButtonContainer>
    </FormContainer>
  )
}
