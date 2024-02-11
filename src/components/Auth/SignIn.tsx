import { AuthPanel } from './AuthPanel'
import { BasicTextInputForm } from '../Inputs/BasicTextInputForm'
import { useContext, useEffect, useState } from 'react'
import { BasicSubmitButton } from '../Inputs/BasicSubmitButton'
import { ClickableText } from './ClickableText'
import { singIn } from '../../services/auth.service'
import { useNavigation } from '@react-navigation/native'
import { ErrorMessage } from './ErrorMessage'
import { StackNavigationProp } from '@react-navigation/stack'
import { Routes } from '@/types/types'
import { ViewContainer } from './styled'
import { DatabaseError, ValidationError } from '@/services/errors.service'
import { AlertsContext } from '@/context/Alerts/AlertsContext'
import { useIsTabOpenOnFocus } from '@/hooks/useIsTabOpenOnFocus/useIsTabOpenOnPage'

export const SignIn = () => {
  const { setAlert } = useContext(AlertsContext)

  const navigation = useNavigation<StackNavigationProp<Routes>>()

  const [isTabOpen, setIsTabOpen] = useIsTabOpenOnFocus(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const signInOnSubmit = async () => {
    setIsTabOpen(false)

    try {
      await singIn(email, password)
    }
    catch (err) {
      setIsTabOpen(true)

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

  const navigateToSignUp = () => {
    navigation.navigate('SignUp')
  }

  return (
    <AuthPanel title={"▣ Sign In"} isTabOpen={isTabOpen}>
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
      {
        error &&
        <ErrorMessage text={error} />
      }
      <BasicSubmitButton
        title={"Sign in"}
        onPress={signInOnSubmit}
      />
      <ClickableText onPress={navigateToSignUp}>
        You don't have an account? Register!
      </ClickableText>
    </AuthPanel>
  )
}