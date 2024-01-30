import React, { useState } from 'react'
import { EntryPanel } from '../EntryPanel'
import { EntryForm } from '../EntryForm'
import { PanelTopOptions, PanelTopOption } from '../../Panels/PanelTopOptions'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Routes } from '@/types/types'

type ICreateEntry = {
  createEntry: ({ }: { name: string, text: string }) => Promise<void>
}

export const CreateEntry = ({ createEntry }: ICreateEntry) => {
  const navigation = useNavigation<StackNavigationProp<Routes>>()

  const [name, setName] = useState('')
  const [text, setText] = useState('')

  const onCreate = async () => {
    await createEntry({ name, text })
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

