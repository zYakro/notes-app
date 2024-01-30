import React, { useState } from 'react'
import { View } from 'react-native'
import { SearchContainer, SearchIconContainer } from './styled'
import { UnderlineInput } from '../../Inputs/UnderlineInput'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

type ISearch = {
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

export const Search = ({ searchValue, setSearchValue }: ISearch) => {
  const theme = useTheme()

  return (
    <SearchContainer>
      <UnderlineInput 
        placeholder='Search'
        text={searchValue}
        onChangeText={setSearchValue}
      />
      <SearchIconContainer>
        <MaterialCommunityIcons name="magnify" size={18} color={theme.onBackgroundColor} />
      </SearchIconContainer>
    </SearchContainer>
  )
}