import React, { useState } from 'react'
import { EntriesContainer, EntriesPanelContainer, ViewContainer } from './styled'
import { Search } from './Search'
import { Entry } from './Entry'
import { AnimatedPanelOnFocus } from '../../Panels/AnimatedPanelOnFocus'
import { SoloPanel } from '../../Panels/SoloPanel'
import { useNavigation } from '@react-navigation/native'
import { AddFAB } from '../../Panels/AddFAB'

export const EntriesList = ({ entries, getEntryInfo }) => {
  const navigation = useNavigation()

  const [searchValue, setSearchValue] = useState('')

  const openJournalEditor = async (id) => {
    await getEntryInfo(id)
    navigation.navigate('EditEntry')
  }

  const openCreateJournal = async () => {
    navigation.navigate('CreateEntry')
  }

  const searchedEntries = entries.filter(entry => {
    return entry.name.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (
    <ViewContainer>
      <EntriesPanelContainer>
        <AnimatedPanelOnFocus>
          <SoloPanel title="▣ Journal Entries">
            <EntriesContainer>
              <Search
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
              {
                searchedEntries.map(entry => {
                  return <Entry key={entry.id} onPress={openJournalEditor} {...entry} />
                })
              }
              <AddFAB onPress={openCreateJournal} iconSize={35} />
            </EntriesContainer>
          </SoloPanel>
        </AnimatedPanelOnFocus>
      </EntriesPanelContainer>
    </ViewContainer>
  )
}
