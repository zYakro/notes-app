import React, { useEffect, useState } from 'react'
import { ShopItemsContainer, ItemsSection, ShopSectionTitle } from '../ShopItems/styled'
import { IShopInventory, IShopItem, IShopItems } from '@/types/types'
import { ScrollView } from 'react-native'
import { ShopItem } from '../ShopItems/ShopItem'
import { groupBy } from '@/utils/groupBy'
import { getInventoryItems } from '@/services/shop.service'

type IShopItemsProps = {
  inventory: IShopInventory
  onItemSelected: ({ name, description, price, type }: IShopItem) => void
}

export const Inventory = ({ inventory, onItemSelected }: IShopItemsProps) => {
  const [shopItems, setShopItems] = useState<IShopItems>([])

  useEffect(() => {
    const fetch = async () => {
      const items = await getInventoryItems()
      setShopItems(items)
    }

    fetch()
  }, [])

  const groupedItems = groupBy(shopItems, ({ type }) => type)

  const getShopItem = (item) => {
    return (
      <ShopItem
        key={item.name}
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
      <ItemsSection>
        <ShopSectionTitle>Themes</ShopSectionTitle>
        <ShopItemsContainer>
          {
            groupedItems?.theme?.map(item => getShopItem(item))
          }
        </ShopItemsContainer>
      </ItemsSection>
      <ItemsSection>
        <ShopSectionTitle>Backgrounds</ShopSectionTitle>
        <ShopItemsContainer>
          {
            groupedItems?.background?.map(item => getShopItem(item))
          }
        </ShopItemsContainer>
      </ItemsSection>
      <ItemsSection>
        <ShopSectionTitle>Panels</ShopSectionTitle>
        <ShopItemsContainer>
          {
            groupedItems?.panel?.map(item => getShopItem(item))
          }
        </ShopItemsContainer>
      </ItemsSection>
    </ScrollView >
  )
}