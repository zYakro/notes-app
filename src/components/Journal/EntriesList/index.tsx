import React, { useState } from 'react'
import { EntriesContainer, EntriesPanelContainer, ListLoadingContainer, ViewContainer } from './styled'
import { Search } from './Search'
import { Entry } from './Entry'
import { SoloPanel } from '../../Panels/SoloPanel'
import { useNavigation } from '@react-navigation/native'
import { AddFAB } from '../../Panels/AddFAB'
import { StackNavigationProp } from '@react-navigation/stack'
import { IJournalEntriesList, Routes } from '@/types/types'
import { useIsTabOpenOnFocus } from '@/hooks/useIsTabOpenOnFocus/useIsTabOpenOnPage'
import { AnimatedPanel } from '@/components/Panels/AnimatedPanel'
import { LoadingIndicator } from '@/components/ActivityIndicators/LoadingIndicator'

type IEntriesList = {
  entries: IJournalEntriesList,
  getEntryInfo: (id: string) => Promise<boolean>
  isListLoaded: boolean
}

export const EntriesList = ({ entries, getEntryInfo, isListLoaded }: IEntriesList) => {
  const navigation = useNavigation<StackNavigationProp<Routes>>()

  const [isTabOpen, setIsTabOpen] = useIsTabOpenOnFocus(true)
  const [searchValue, setSearchValue] = useState('')

  const openJournalEditor = async (id: string) => {
    setIsTabOpen(false)

    const success = await getEntryInfo(id)

    if (success)
      return navigation.navigate('EditEntry')

    setIsTabOpen(true)
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
        <AnimatedPanel isTabOpen={isTabOpen}>
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
              {
                !isListLoaded &&
                <ListLoadingContainer>
                  <LoadingIndicator size={40} animating={true} />
                </ListLoadingContainer>
              }
              <AddFAB onPress={openCreateJournal} iconSize={35} />
            </EntriesContainer>
          </SoloPanel>
        </AnimatedPanel>
      </EntriesPanelContainer>
    </ViewContainer>
  )
}
