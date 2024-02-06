import React from 'react'
import { ShopItemsContainer, ShopItemsSection, ShopSectionTitle } from './styled'
import { IShopInventory, IShopItem, IShopItems } from '@/types/types'
import { ScrollView } from 'react-native'
import { ShopItem } from './ShopItem'
import { groupBy } from '@/utils/groupBy'

type IShopItemsProps = {
  shopItems: IShopItems
  inventory: IShopInventory
  onItemSelected: ({ name, description, price, type }: IShopItem) => void
}

export const ShopItems = ({ shopItems, inventory, onItemSelected }: IShopItemsProps) => {
  const groupedItems = groupBy(shopItems, ({ type }) => type)

  const getShopItem = (item) => {
    return (
      <ShopItem
        key={item.name}
        name={item.name}
        price={item.price}
        onPress={() => { onItemSelected(item) }}
        itemProps={item.itemProps}
        type={item.type}
        isOwned={inventory.includes(item.name)}
      />
    )
  }

  return (
    <ScrollView>
      <ShopItemsSection>
        <ShopSectionTitle>Themes</ShopSectionTitle>
        <ShopItemsContainer>
          {
            groupedItems?.theme?.map(item => getShopItem(item))
          }
        </ShopItemsContainer>
      </ShopItemsSection>
      <ShopItemsSection>
        <ShopSectionTitle>Backgrounds</ShopSectionTitle>
        <ShopItemsContainer>
          {
            groupedItems?.background?.map(item => getShopItem(item))
          }
        </ShopItemsContainer>
      </ShopItemsSection>
      <ShopItemsSection>
        <ShopSectionTitle>Panels</ShopSectionTitle>
        <ShopItemsContainer>
          {
            groupedItems?.panel?.map(item => getShopItem(item))
          }
        </ShopItemsContainer>
      </ShopItemsSection>
    </ScrollView >
  )
}