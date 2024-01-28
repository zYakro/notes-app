import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { EntriesList } from './EntriesList'
import { useJournal } from '../../hooks/useJournal/useJournal'
import { EditEntry } from './EditEntry/EditEntry'
import { CreateEntry } from './CreateEntry'


const Stack = createStackNavigator()

export const Journal = () => {
  const {
    entriesList,
    currentEntryInfo,
    getEntriesList,
    getEntryInfo,
    updateEntry,
    deleteEntry,
    createEntry
  } = useJournal()

  useEffect(() => {
    getEntriesList()
  }, [])

  return (
    <Stack.Navigator initialRouteName='Entries' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Entries'>
        {(props) => <EntriesList {...props} entries={entriesList} getEntryInfo={getEntryInfo}/>}
      </Stack.Screen>
      <Stack.Screen name='EditEntry'>
        {(props) => <EditEntry {...props} entryInfo={currentEntryInfo} updateEntry={updateEntry} deleteEntry={deleteEntry} />}
      </Stack.Screen>
      <Stack.Screen name='CreateEntry'>
        {(props) => <CreateEntry {...props} createEntry={createEntry}/>}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
