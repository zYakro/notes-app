import React, { useState } from 'react'
import {
  getJournalEntries,
  getJournalEntryInfo,
  updateJournalEntry,
  createJournalEntry,
  deleteJournalEntry,
} from "../../services/journal.service"
import { getCurrentServerDate } from '../../utils/firebase/getCurrentServerDate'

export const useJournal = () => {
  const [entriesList, setEntriesList] = useState([])
  const [currentEntryInfo, setCurrentEntryInfo] = useState({})

  const getEntriesList = async () => {
    const entries = await getJournalEntries() 

    setEntriesList(entries)
  }

  const getEntryInfo = async (id) => {

    const info = await getJournalEntryInfo(id)
    console.log(id, info)

    setCurrentEntryInfo(info)
  }

  const updateEntry = async ({ name, text }) => {
    await updateJournalEntry(currentEntryInfo.id, {
      name,
      text,
      createdAt: currentEntryInfo.createdAt,
    })
  
    setEntriesList(entriesList.map(item => {
      if(item.id === currentEntryInfo.id){
        return {
          id: item.id,
          name,
          text,
          createdAt: currentEntryInfo.createdAt,
        }
      }
      return item
    }))
  }

  const createEntry = async ({name, text }) => {
    const entry = {
      name,
      text,
      createdAt: getCurrentServerDate()
    }

    const id = await createJournalEntry(entry)

    setEntriesList([
      ...entriesList,
      {
        id: id,
        ...entry
      }
    ])
  }

  const deleteEntry = async () => {
    await deleteJournalEntry(currentEntryInfo.id)

    setEntriesList(entriesList.filter(entry => {
      return entry.id !== currentEntryInfo.id
    }))
  }

  return{
    entriesList,
    currentEntryInfo,
    getEntriesList,
    getEntryInfo,
    updateEntry,
    createEntry,
    deleteEntry
  }
}