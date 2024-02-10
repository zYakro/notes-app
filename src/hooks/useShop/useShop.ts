import { SHOP_ITEM_TYPE_BACKGROUND, SHOP_ITEM_TYPE_THEME } from '@/constant/shopConsts'
import { AlertsContext } from '@/context/Alerts/AlertsContext'
import { UserInfoContext } from '@/context/UserInfo/UserInfoContext'
import { ShopError } from '@/services/errors.service'
import { buyItem, getInventory } from '@/services/shop.service'
import { IShopInventory, IShopItem, IShopItems, ShopItemType } from '@/types/types'
import React, { useContext, useEffect, useState } from 'react'

export const useShop = () => {
  const { setAlert } = useContext(AlertsContext)
  const { userInfo, changeUserPreference } = useContext(UserInfoContext)

  const [currentItem, setCurrentItem] = useState<IShopItem>()
  const [inventory, setInventory] = useState<IShopInventory>([])

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
      if(userInfo.coins < currentItem.price){
        throw new ShopError('Not enough coins')
      }

      await buyItem(currentItem.name);

      selectItem(currentItem.name, currentItem.type)

      setInventory([
        ...inventory,
        currentItem.name
      ])

    } catch (e) {
      setAlert({
        title: 'Error',
        message: e.message
      })
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
      changeUserPreference(type, name)
  }

  const getUserInventory = async () => {
    try{
      const inventory = await getInventory();

      setInventory(inventory)
    }catch(e){
      setAlert({
        title: 'Error',
        message: e.message
      })
    }
  }

  useEffect(() => {
    getUserInventory()
  }, [])

  return {
    inventory,
    currentItem,
    changeCurrentItem,
    onCurrentItemSelected
  }
}
