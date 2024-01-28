import React from 'react'
import { EntryContainer, EntryName } from './styled'

export const Entry = ({ name, id, onPress }) => {
  return (
    <EntryContainer onPress={() => onPress(id)}>
      <EntryName>
        {name}
      </EntryName>
    </EntryContainer>
  )
}
