import React, { useContext, useState } from 'react'
import {
  getJournalEntries,
  getJournalEntryInfo,
  updateJournalEntry,
  createJournalEntry,
  deleteJournalEntry,
} from "../../services/journal.service"
import { getCurrentServerDate } from '../../utils/firebase/getCurrentServerDate'
import { IJournalEntriesList, IJournalEntryInfo } from '@/types/types'
import { AlertsContext } from '@/context/Alerts/AlertsContext'

export const useJournal = () => {
  const { setAlert } = useContext(AlertsContext)

  const [entriesList, setEntriesList] = useState<IJournalEntriesList>([])
  const [currentEntryInfo, setCurrentEntryInfo] = useState<IJournalEntryInfo>()

  const getEntriesList = async () => {
    try {
      const entries = await getJournalEntries()

      setEntriesList(entries)
    } catch (err) {
      setAlert({
        title: 'Database error',
        message: err.message
      })
    }
  }

  const getEntryInfo = async (id: string) => {
    try {
      const info = await getJournalEntryInfo(id)

      setCurrentEntryInfo(info)
    } catch (err) {
      setAlert({
        title: 'Database error',
        message: err.message
      })
    }
  }

  const updateEntry = async ({ name, text }: { name: string, text: string }) => {
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
    } catch (err) {
      setAlert({
        title: 'Database error',
        message: err.message
      })
    }
  }

  const createEntry = async ({ name, text }: { name: string, text: string }) => {
    try {
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
    } catch (err) {
      setAlert({
        title: 'Database error',
        message: err.message
      })
    }
  }

  const deleteEntry = async () => {
    try {
      await deleteJournalEntry(currentEntryInfo.id)

      setEntriesList(entriesList.filter(entry => {
        return entry.id !== currentEntryInfo.id
      }))
    } catch (err) {
      setAlert({
        title: 'Database error',
        message: err.message
      })
    }
  }

  return {
    entriesList,
    currentEntryInfo,
    getEntriesList,
    getEntryInfo,
    updateEntry,
    createEntry,
    deleteEntry
  }
}