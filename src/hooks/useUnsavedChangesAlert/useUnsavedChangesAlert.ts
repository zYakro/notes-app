import { AlertsContext } from '@/context/Alerts/AlertsContext'
import { Routes } from '@/types/types'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useContext, useEffect } from 'react'

export const useUnsavedChangesAlert = (hasUnsavedChanges: boolean) => {
  const { setAreYouSureAlert } = useContext(AlertsContext)

  const navigation = useNavigation<StackNavigationProp<Routes>>()

  const onUnsavedChanges = (event: any) => {
    // The only way to navigate through this is using `navigate`
    // If user uses the back button or touches the current tab
    // It'll execute the alert. `POP_TO_POP` refers to pressing
    // the current tab in the tab menu which would navigate to 
    // the initialroute.
    if(event.data.action.type != 'GO_BACK' && event.data.action.type !== "POP_TO_TOP"){
      return;
    }

    if (!hasUnsavedChanges) {
      return;
    }

    event.preventDefault()

    setAreYouSureAlert({
      title: 'Unsaved changes',
      message: "You have unsaved changes, are you sure you want to discard them?",
      onYes: () => {
        // Continue the action
        navigation.dispatch(event.data.action)
      },
    })
  }

  useEffect(() => {
    navigation.removeListener('beforeRemove', onUnsavedChanges)

    navigation.addListener('beforeRemove', onUnsavedChanges)

    return () => {
      navigation.removeListener('beforeRemove', onUnsavedChanges)
    }
  }, [navigation, hasUnsavedChanges])


}
