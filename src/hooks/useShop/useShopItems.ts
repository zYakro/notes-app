import { AlertsContext } from "@/context/Alerts/AlertsContext";
import { IShopInventory, IShopItems, ShopItemType } from "@/types/types";
import { useContext, useState } from "react";
import { getShopItems as getShopItemsFromDB } from "@/services/shop.service";

export const useShopItems = (type: ShopItemType) => {
  const { setAlert } = useContext(AlertsContext)

  const [shopItems, setShopItems] = useState<IShopItems>([])

  const getShopItems = async (from: number, to: number) => {
    try{
      const items = await getShopItemsFromDB(from, to, type)

      setShopItems(items)
    }catch(e){
      setAlert({
        title: 'Error',
        message: e.message
      })
    }
  }

  return {
    shopItems,
    getShopItems
  }
}