import React, { useContext, useState } from 'react'
import {
  getJournalEntries,
  getJournalEntryInfo,
  updateJournalEntry,
  createJournalEntry,
  deleteJournalEntry,
} from "../../services/journal.service"
import { IJournalEntriesList, IJournalEntryInfo } from '@/types/types'
import { AlertsContext } from '@/context/Alerts/AlertsContext'

export const useJournal = () => {
  const { setAlert } = useContext(AlertsContext)

  const [entriesList, setEntriesList] = useState<IJournalEntriesList>([])
  const [isListLoaded, setIsListLoaded] = useState(false)
  const [currentEntryInfo, setCurrentEntryInfo] = useState<IJournalEntryInfo>()

  const getEntriesList = async (): Promise<boolean> => {
    try {
      setIsListLoaded(false)

      const entries = await getJournalEntries()

      setEntriesList(entries)

      setIsListLoaded(true)

      return true;
    } catch (err) {
      setAlert({
        title: 'Database error',
        message: err.message
      })

      setIsListLoaded(true)

      return false;
    }
  }

  const getEntryInfo = async (id: number): Promise<boolean> => {
    try {
      const info = await getJournalEntryInfo(id)

      setCurrentEntryInfo(info)

      return true
    } catch (err) {
      setAlert({
        title: 'Database error',
        message: err.message
      })

      return false
    }
  }

  const updateEntry = async ({ name, text }: { name: string, text: string }): Promise<boolean> => {
    try {
      await updateJournalEntry({
        id: currentEntryInfo.id,
        name,
        text,
        createdAt: currentEntryInfo.createdAt,
      })

      setEntriesList(entriesList.map(item => {
        if (item.id === currentEntryInfo.id) {
          return {
            id: item.id,
            name,
            text,
            createdAt: currentEntryInfo.createdAt,
          }
        }
        return item
      }))

      return true;
    } catch (err) {
      setAlert({
        title: 'Database error',
        message: err.message
      })

      return false;
    }
  }

  const createEntry = async ({ name, text }: { name: string, text: string }): Promise<boolean> => {
    try {
      const entry = {
        name,
        text,
        createdAt: new Date()
      }

      const id = await createJournalEntry(entry)

      setEntriesList([
        ...entriesList,
        {
          id: id,
          ...entry
        }
      ])
    
      return true;
    } catch (err) {
      setAlert({
        title: 'Database error',
        message: err.message
      })

      return false;
    }
  }

  const deleteEntry = async (): Promise<boolean> => {
    try {
      await deleteJournalEntry(currentEntryInfo.id)

      setEntriesList(entriesList.filter(entry => {
        return entry.id !== currentEntryInfo.id
      }))

      return true
    } catch (err) {
      setAlert({
        title: 'Database error',
        message: err.message
      })

      return false
    }
  }

  return {
    entriesList,
    currentEntryInfo,
    isListLoaded,
    getEntriesList,
    getEntryInfo,
    updateEntry,
    createEntry,
    deleteEntry
  }
}