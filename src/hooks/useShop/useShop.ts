import { SHOP_ITEM_TYPE_BACKGROUND, SHOP_ITEM_TYPE_THEME } from '@/constant/shopConsts'
import { AlertsContext } from '@/context/Alerts/AlertsContext'
import { UserInfoContext } from '@/context/UserInfo/UserInfoContext'
import { IShopInventory, IShopItem, IShopItems, ShopItemType } from '@/types/types'
import React, { useContext, useState } from 'react'

export const useShop = () => {
  const { setAlert } = useContext(AlertsContext)
  const { userInfo, changeUserInfo } = useContext(UserInfoContext)

  const [currentItem, setCurrentItem] = useState<IShopItem>()
  const [inventory, setInventory] = useState<IShopInventory>(['main-theme', 'night-background', 'light-screen'])
  const [shopItems, setShopItems] = useState<IShopItems>([
    {
      name: "main-theme",
      title: "Main Theme",
      description: 'A simple and elegant theme',
      price: 100,
      type: 'theme',
      itemProps: {
        panelColor: '#4C4940',
        panelContentColor: '#d0ccb3F2',
        titleFontColor: '#d0ccb3',
        fontColor: '#4C4940'
      }
    },
    {
      title: 'Aono',
      name: "aono",
      description: 'Aono',
      price: 100,
      type: 'theme',
      itemProps: {
        panelColor: '#FF8552F2',
        panelContentColor: '#E6E6E6',
        fontColor: '#fff',
        titleFontColor: '#fff'
      }
    },
    {
      title: 'Blush',
      name: "blush",
      description: 'A pink-based theme',
      price: 100,
      type: 'theme',
      itemProps: {
        panelColor: '#DE4D86F0',
        panelContentColor: '#F7CACD',
        fontColor: '#fff',
        titleFontColor: '#fff'
      }
    },
    {
      title: 'Night background',
      name: "night-background",
      description: "Aasda",
      price: 150,
      type: 'background',
      itemProps: {
        image: require('@/assets/night-screen.jpg')
      }
    },
    {
      title: 'Light background',
      name: "light-screen",
      description: "Aasda",
      price: 150,
      type: 'background',
      itemProps: {
        image: require('@/assets/light-screen.jpg')
      }
    }
  ])

  const changeCurrentItem = ({ title, name, type, description, price, itemProps }: IShopItem) => {
    setCurrentItem({
      title,
      name,
      type,
      description,
      price,
      itemProps
    })
  }

  const buyCurrentItem = async () => {
    try {
      // Api call

      selectItem(currentItem.name, currentItem.type)

      setInventory([
        ...inventory,
        currentItem.name
      ])

    } catch (e) {

    }
  }

  const onCurrentItemSelected = () => {
    const userOwnsItem = inventory.includes(currentItem.name)
    if (userOwnsItem) {
      return selectItem(currentItem.name, currentItem.type)
    }
    return buyCurrentItem()
  }

  const selectItem = (name: string, type: ShopItemType) => {
    if (type == SHOP_ITEM_TYPE_BACKGROUND || type == SHOP_ITEM_TYPE_THEME)
      changeUserInfo(type, name)
  }

  return {
    inventory,
    currentItem,
    shopItems,
    changeCurrentItem,
    onCurrentItemSelected
  }
}
