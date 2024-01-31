import React, { useState } from 'react'
import { EntryPanel } from '../EntryPanel'
import { EntryForm } from '../EntryForm'
import { PanelTopOptions, PanelTopOption } from '../../Panels/PanelTopOptions'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Routes } from '@/types/types'
import { useUnsavedChangesAlert } from '@/hooks/useUnsavedChangesAlert/useUnsavedChangesAlert'

type ICreateEntry = {
  createEntry: ({ }: { name: string, text: string }) => Promise<boolean>
}

export const CreateEntry = ({ createEntry }: ICreateEntry) => {
  const navigation = useNavigation<StackNavigationProp<Routes>>()

  const [name, setName] = useState('')
  const [text, setText] = useState('')

  const hasUnsavedChanges = (name != '' || text != '')

  useUnsavedChangesAlert(hasUnsavedChanges)

  const onCreate = async () => {
    const success = await createEntry({ name, text })
    if (success)
      navigation.navigate('Entries')
  }

  return (
    <EntryPanel title="▣ Text editor">
      <PanelTopOptions>
        <PanelTopOption name="Create" onPress={onCreate} />
      </PanelTopOptions>
      <EntryForm
        name={name}
        setName={setName}
        text={text}
        setText={setText}
      />
    </EntryPanel>
  )
}

