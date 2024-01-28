import React, { useState } from 'react'
import { View } from 'react-native'
import { SearchContainer, SearchIconContainer } from './styled'
import { UnderlineInput } from '../../Inputs/UnderlineInput'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

export const Search = ({ searchValue, setSearchValue }) => {
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