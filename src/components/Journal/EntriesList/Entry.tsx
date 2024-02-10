import React from 'react'
import { EntryContainer, EntryName } from './styled'

type IEntry = {
  name: string
  id: number 
  onPress: (id: number) => void
}

export const Entry = ({ name, id, onPress }: IEntry) => {
  return (
    <EntryContainer onPress={() => onPress(id)}>
      <EntryName>
        {name}
      </EntryName>
    </EntryContainer>
  )
}
