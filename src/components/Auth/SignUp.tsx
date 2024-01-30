import { AuthPanel } from './AuthPanel'
import React, { useState } from 'react'
import { BasicSubmitButton } from '../Inputs/BasicSubmitButton'
import { ClickableText } from './ClickableText'
import { BasicTextInputForm } from '../Inputs/BasicTextInputForm'
import { signUp } from '../../services/auth.service'
import { ErrorMessage } from './ErrorMessage'

interface SignUpProps {
  changePanel: () => void,
  isPanelActive: boolean
}

export const SignUp = ({ changePanel, isPanelActive }: SignUpProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmation, setConfirmation] = useState('')
  const [error, setError] = useState({
    success: true,
    message: '...'
  })

  const signUpOnSubmit = async () => {
    const res = await signUp(email, password, confirmation)

    if(!res.success){
      return setError(res)
    }

    changePanel()
  }

  return (
    <AuthPanel
      title={"▣ Sign Up"}
      isTabOpen={isPanelActive}
    >
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
      <BasicTextInputForm
        text={confirmation}
        onChangeText={setConfirmation}
        placeholder={"Confirm password"}
        icon="✱"
        securityTextEntry={true}
      />
      {
        !error.success &&
        <ErrorMessage text={error.message} />
      }
      <BasicSubmitButton
        title={"Sign up"}
        onPress={signUpOnSubmit}
      />
      <ClickableText onPress={changePanel}>
        You already have an account? Sign in!
      </ClickableText>
    </AuthPanel>
  )
}