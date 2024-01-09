import { AuthPanel } from '../AuthPanel'
import { BasicTextInput } from '../../Inputs/BasicTextInput'
import { useState } from 'react'
import { BasicSubmitButton } from '../../Inputs/BasicSubmitButton'
import { ClickableText } from '../ClickableText'
import { BasicTextInputForm } from '../../Inputs/BasicTextInputForm'

export const SignUp = ({ changePanel, isPanelActive }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <AuthPanel
      title={"▣ Sign Up"}
      isTabOpen={isPanelActive}
    >
      <BasicTextInputForm
        text={username}
        onChangeText={setUsername}
        placeholder={"Username"}
        icon="⚉"
      />
      <BasicTextInputForm
        text={email}
        onChangeText={setEmail}
        placeholder={"Email"}
        icon="@"
      />
      <BasicTextInputForm
        text={password}
        onChangeText={setPassword}
        placeholder={"Password"}
        icon="✱"
        securityTextEntry={true}
      />
      <BasicSubmitButton
        title={"Sign up"}
        onPress={() => {console.log('a')}}
      />
      <ClickableText onPress={changePanel}>
        You already have an account? Sign in!
      </ClickableText>
    </AuthPanel>
  )
}