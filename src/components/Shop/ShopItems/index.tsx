import React, { useState } from 'react'
import { ItemsSection, SectionTitlesContainer, ShopSectionTitle } from './styled'
import { IShopInventory, IShopItem, IShopItems } from '@/types/types'
import { ScrollView } from 'react-native'
import { ShopItem } from './ShopItem'
import { groupBy } from '@/utils/groupBy'
import { ShopItemsSection } from './ShopItemsSection'

type IShopItemsProps = {
  inventory: IShopInventory
  onItemSelected: ({ name, description, price, type }: IShopItem) => void
}

export const ShopItems = ({ inventory, onItemSelected }: IShopItemsProps) => {
  const [currentSection, setCurrentSection] = useState('theme')

  return (
    <ScrollView>
      <SectionTitlesContainer>
        <ShopSectionTitle>Themes</ShopSectionTitle>
        <ShopSectionTitle>Background</ShopSectionTitle>
        <ShopSectionTitle>Panels</ShopSectionTitle>
      </SectionTitlesContainer>
      <ItemsSection>
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
      </ItemsSection>
    </ScrollView >
  )
}