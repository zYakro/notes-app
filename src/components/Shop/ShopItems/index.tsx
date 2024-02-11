import React, { useState } from 'react'
import { ItemsSection, SectionTitlesContainer, ShopSectionTitle } from './styled'
import { IShopInventory, IShopItem, IShopItems } from '@/types/types'
import { ScrollView } from 'react-native'
import { ShopItemsSection } from './ShopItemsSection'
import { TouchableOpacity } from 'react-native-gesture-handler'

type IShopItemsProps = {
  inventory: IShopInventory
  onItemSelected: ({ name, description, price, type }: IShopItem) => void
}

export const ShopItems = ({ inventory, onItemSelected }: IShopItemsProps) => {
  const [currentSection, setCurrentSection] = useState('theme')

  return (
    <ScrollView>
      <SectionTitlesContainer>
        <TouchableOpacity onPress={() => setCurrentSection('theme')}>
          <ShopSectionTitle>Themes</ShopSectionTitle>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentSection('background')}>
          <ShopSectionTitle>Background</ShopSectionTitle>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentSection('panel')}>
          <ShopSectionTitle>Panels</ShopSectionTitle>
        </TouchableOpacity>
      </SectionTitlesContainer>
      {
        currentSection == 'theme' &&
        <ShopItemsSection type="theme" inventory={inventory} onItemSelected={onItemSelected} />
      }
      {
        currentSection == 'panel' &&
        <ShopItemsSection type="panel" inventory={inventory} onItemSelected={onItemSelected} />
      }
      {
        currentSection == 'background' &&
        <ShopItemsSection type="background" inventory={inventory} onItemSelected={onItemSelected} />
      }
    </ScrollView >
  )
}