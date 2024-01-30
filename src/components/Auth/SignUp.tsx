import { AuthPanel } from './AuthPanel'
import React, { useContext, useState } from 'react'
import { BasicSubmitButton } from '../Inputs/BasicSubmitButton'
import { ClickableText } from './ClickableText'
import { BasicTextInputForm } from '../Inputs/BasicTextInputForm'
import { signUp } from '../../services/auth.service'
import { ErrorMessage } from './ErrorMessage'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Routes } from '@/types/types'
import { DatabaseError, ValidationError } from '@/services/errors.service'
import { AlertsContext } from '@/context/Alerts/AlertsContext'

export const SignUp = () => {
  const { setAlert } = useContext(AlertsContext)

  const navigation = useNavigation<StackNavigationProp<Routes>>()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmation, setConfirmation] = useState('')
  const [error, setError] = useState('')

  const signUpOnSubmit = async () => {
    try {
      await signUp(email, password, confirmation)
    }
    catch (err) {
      if (err instanceof ValidationError) {
        return setError(err.message)
      }

      if (err instanceof DatabaseError) {
        setAlert({
          title: 'Database error',
          message: err.message
        })
      }
    }
  }

  const navigateToSignIn = () => {
    navigation.navigate('SignIn')
  }

  return (
    <AuthPanel title={"▣ Sign Up"}>
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
        error &&
        <ErrorMessage text={error} />
      }
      <BasicSubmitButton
        title={"Sign up"}
        onPress={signUpOnSubmit}
      />
      <ClickableText onPress={navigateToSignIn}>
        You already have an account? Sign in!
      </ClickableText>
    </AuthPanel>
  )
}