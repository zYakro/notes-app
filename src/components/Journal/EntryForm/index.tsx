import React, { useState } from 'react'
import { EditorContainer, TextArea } from './styled'
import { UnderlineInput } from '../../Inputs/UnderlineInput'
import { SectionSeparator } from '../../Separators/SectionSeparator'

type IEntryForm = {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
}

export const EntryForm = ({ name, setName, text, setText }) => {
  return (
    <EditorContainer>
      <UnderlineInput
        placeholder='Name'
        text={name}
        onChangeText={setName}
      />
      <SectionSeparator />
      <TextArea
        value={text}
        onChangeText={setText}
        style={{
          textAlignVertical: 'top',
        }}
        multiline={true}
      />
      <SectionSeparator />
    </EditorContainer>
  )
}