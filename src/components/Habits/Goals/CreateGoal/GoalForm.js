import { BasicSubmitButton } from '../../../Inputs/BasicSubmitButton';
import { BasicTextInput } from '../../../Inputs/BasicTextInput';
import { IconSelector } from './IconSelector';
import { FormContainer, SubmitButtonContainer } from './styled'

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
