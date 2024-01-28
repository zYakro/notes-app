import { AuthPanel } from './AuthPanel'
import { BasicTextInputForm } from '../Inputs/BasicTextInputForm'
import { useState } from 'react'
import { BasicSubmitButton } from '../Inputs/BasicSubmitButton'
import { ClickableText } from './ClickableText'
import { singIn } from '../../services/auth.service'
import { useNavigation } from '@react-navigation/native'
import { ErrorMessage } from './ErrorMessage'

export const SignIn = ({ changePanel, isPanelActive }) => {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({
    success: true,
    message: ''
  })

  const signInOnSubmit = async () => {
    const res = await singIn(email, password)

    if(!res.success){
      return setError(res)
    }
  
    navigation.navigate('Main')
  }

  return (
    <AuthPanel
      title={"▣ Sign In"}
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
      {
        !error.success &&
        <ErrorMessage text={error.message} />
      }
      <BasicSubmitButton
        title={"Sign in"}
        onPress={signInOnSubmit}
      />
      <ClickableText onPress={changePanel}>
        You don't have an account? Register!
      </ClickableText>
    </AuthPanel>
  )
}