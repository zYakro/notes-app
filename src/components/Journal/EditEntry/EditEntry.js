import React, { useContext, useState } from 'react'
import { PanelTopOptions, PanelTopOption } from '../../Panels/PanelTopOptions'
import { EntryPanel } from '../EntryPanel'
import { EntryForm } from '../EntryForm'
import { AlertsContext } from '../../../context/Alerts/AlertsContext'
import { useNavigation } from '@react-navigation/native'

export const EditEntry = ({ entryInfo, updateEntry, deleteEntry }) => {
  const { setAreYouSureAlert } = useContext(AlertsContext)
  const navigation = useNavigation()

  const [name, setName] = useState(entryInfo?.name || '')
  const [text, setText] = useState(entryInfo?.text || '')

  const onSave = async () => {
    await updateEntry({ name, text })
  }

  const onDelete = async () => {
    setAreYouSureAlert({
      title: 'Delete a journal entry',
      message: 'Are you sure you want to delete this entry? This action can not be undone.',
      onYes: async () => {
        await deleteEntry()
        navigation.navigate('Entries')
      },
    })
  }

  return (
    <EntryPanel title="▣ Text editor">
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
