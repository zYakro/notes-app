import { AlertsContext } from "@/context/Alerts/AlertsContext";
import { IShopInventory, IShopItems, ShopItemType } from "@/types/types";
import { useContext, useState } from "react";
import { getShopItems as getShopItemsFromDB } from "@/services/shop.service";

export const useShopItems = (type: ShopItemType) => {
  const { setAlert } = useContext(AlertsContext)

  const [shopItems, setShopItems] = useState<IShopItems>([])
  const [isLoading, setIsLoading] = useState(true)

  const getShopItems = async (from: number, to: number) => {
    try{
      setIsLoading(true)

      const items = await getShopItemsFromDB(from, to, type)

      setShopItems(items)

      setIsLoading(false)
    }catch(e){
      setAlert({
        title: 'Error',
        message: e.message
      })
    }
  }

  return {
    shopItems,
    isLoading,
    getShopItems
  }
}