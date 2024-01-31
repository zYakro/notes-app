import React, { useContext, useState } from 'react'
import { PanelTopOptions, PanelTopOption } from '../../Panels/PanelTopOptions'
import { EntryPanel } from '../EntryPanel'
import { EntryForm } from '../EntryForm'
import { AlertsContext } from '../../../context/Alerts/AlertsContext'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { IJournalEntryInfo, Routes } from '@/types/types'
import { useUnsavedChangesAlert } from '@/hooks/useUnsavedChangesAlert/useUnsavedChangesAlert'
import { useIsTabOpenOnFocus } from '@/hooks/useIsTabOpenOnFocus/useIsTabOpenOnPage'

type IEditEntry = {
  entryInfo: IJournalEntryInfo
  updateEntry: ({}: {name: string, text: string}) => Promise<boolean>
  deleteEntry: () => Promise<void>
}

export const EditEntry = ({ entryInfo, updateEntry, deleteEntry }: IEditEntry) => {
  const { setAreYouSureAlert } = useContext(AlertsContext)

  const navigation = useNavigation<StackNavigationProp<Routes>>()

  const [isTabOpen, setIsTabOpen] = useIsTabOpenOnFocus(true)
  const [name, setName] = useState(entryInfo.name)
  const [text, setText] = useState(entryInfo.text)

  const hasUnsavedChanges = (name != entryInfo.name || text != entryInfo.text)

  useUnsavedChangesAlert(hasUnsavedChanges)

  const onSave = async () => {
    await updateEntry({ name, text })
  }

  const onDelete = async () => {
    setAreYouSureAlert({
      title: 'Delete a journal entry',
      message: 'Are you sure you want to delete this entry? This action can not be undone.',
      onYes: async () => {
        setIsTabOpen(false)

        await deleteEntry()
        navigation.navigate('Entries')
      },
    })
  }

  return (
    <EntryPanel title="▣ Text editor" isTabOpen={isTabOpen}>
      <PanelTopOptions>
        <PanelTopOption name="Delete" onPress={onDelete} />
        <PanelTopOption name="Save" onPress={onSave} />
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
