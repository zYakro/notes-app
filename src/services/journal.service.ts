import { IJournalEntryInfo, IJournalEntriesList, IJournalListEntry, IJournalEntryToDatabase } from "@/types/types"
import { DatabaseError } from "./errors.service"
import { supabase } from "@/supabase/config";

const journalEntriesFromDatabase = (data): IJournalEntriesList => {
  return data.map(entry => {
    return {
      ...entry,
      createdAt: new Date(entry.createdAt)
    }
  })
}

const journalEntryFromDatabase = ({ id, name, text, createdAt }): IJournalEntryInfo => {
  return {
    id,
    name,
    text,
    createdAt: new Date(createdAt)
  }
}

const journalEntryToDatabase = ({ name, text }: IJournalEntryToDatabase) => {
  return {
    name,
    text,
  }
}

export const getJournalEntries = async (): Promise<IJournalEntriesList> => {
  try {
    const session = await supabase.auth.getSession()

    if (session.error) throw session.error;

    const { data, error } = await supabase
      .from('journal')
      .select(`id, name, createdAt`)
      .eq('user_id', session.data.session?.user.id)

    if (error) throw error;

    return journalEntriesFromDatabase(data)
  } catch (e) {
    throw new DatabaseError('Something unexpected happened... Try again later')
  }
}

export const getJournalEntryInfo = async (id: number): Promise<IJournalEntryInfo> => {
  try {
    const session = await supabase.auth.getSession()

    if (session.error) throw session.error;

    const { data, error } = await supabase
      .from('journal')
      .select(`id, name, text, createdAt`)
      .eq('user_id', session.data.session?.user.id)
      .single()

    if (error) throw error;

    return journalEntryFromDatabase(data)
  } catch (e) {
    throw new DatabaseError('Something unexpected happened... Try again later')
  }
}

export const updateJournalEntry = async (entry: IJournalEntryInfo) => {
  try {
    const session = await supabase.auth.getSession()

    if (session.error) throw session.error;

    const { error } = await supabase
      .from('journal')
      .update(journalEntryToDatabase(entry))
      .eq('id', entry.id)

    if (error) throw error;

  } catch (e) {
    throw new DatabaseError('Something unexpected happened... Try again later')
  }
}

export const createJournalEntry = async (entry: IJournalEntryToDatabase) => {
  try {
    const session = await supabase.auth.getSession()

    if (session.error) throw session.error;

    const { data, error } = await supabase
      .from('journal')
      .insert(journalEntryToDatabase(entry))
      .select()
      .single()

    if (error) throw error;

    return data.id
  } catch (e) {
    throw new DatabaseError('Something unexpected happened... Try again later')
  }
}

export const deleteJournalEntry = async (id: number) => {
  try {
    const session = await supabase.auth.getSession()

    if (session.error) throw session.error;

    const { error } = await supabase
      .from('journal')
      .delete()
      .eq('id', id)

    if (error) throw error;

  } catch (e) {
    throw new DatabaseError('Something unexpected happened... Try again later')
  }
}
