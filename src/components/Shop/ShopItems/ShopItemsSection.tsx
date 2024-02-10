import React, { useEffect } from 'react'
import { ItemsSection, ShopItemsContainer } from './styled'
import { IShopInventory, IShopItem, ShopItemType } from '@/types/types'
import { useShopItems } from '@/hooks/useShop/useShopItems'
import { ScrollView } from 'react-native-gesture-handler'
import { ShopItem } from './ShopItem'

type IShopItemsSection = {
  type: ShopItemType
  inventory: IShopInventory
  onItemSelected: ({ name, description, price, type }: IShopItem) => void
}

export const ShopItemsSection = ({ type, inventory, onItemSelected }: IShopItemsSection) => {
  const { shopItems, getShopItems } = useShopItems(type)

  useEffect(() => {
    getShopItems(0, 10)
  }, [])

  return (
    <ScrollView>
      <ItemsSection>
        <ShopItemsContainer>
          {
            shopItems.map(item => {
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
            })
          }
        </ShopItemsContainer>
      </ItemsSection>
    </ScrollView>
  )
}