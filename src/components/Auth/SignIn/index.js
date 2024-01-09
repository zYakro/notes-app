import { Text, View } from 'react-native'
import { AuthPanel } from '../AuthPanel'
import { BasicTextInputForm } from '../../Inputs/BasicTextInputForm'
import { useState } from 'react'
import { BasicSubmitButton } from '../../Inputs/BasicSubmitButton'
import { ClickableText } from '../ClickableText'
import { PopupPanel } from '../../Panels/PopupPanel'

export const SignIn = ({ changePanel, isPanelActive }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [isModalVisible, setIsModalVisible] = useState(false)

  const onCloseModal = () => {
    setIsModalVisible(false)
  }

  return (
    <AuthPanel
      title={"▣ Sign In"}
      isTabOpen={isPanelActive}
    >
      <BasicTextInputForm
        text={username}
        onChangeText={setUsername}
        placeholder={"Username"}
        icon="⚉"
      />
      <BasicTextInputForm
        text={password}
        onChangeText={setPassword}
        placeholder={"Password"}
        icon="✱"
        securityTextEntry={true}
      />
      <BasicSubmitButton
        title={"Sign in"}
        onPress={() => { console.log('a') }}
      />
      <ClickableText onPress={changePanel}>
        You don't have an account? Register!
      </ClickableText>
    </AuthPanel>
  )
}