import { supabase } from "@/supabase/config";
import { IShopInventory, IShopItem, IShopItems, InventoryType, ShopItemType } from "@/types/types";
import { DatabaseError } from "./errors.service";

export const getInventory = async (): Promise<InventoryType> => {
  try {
    const session = await supabase.auth.getSession()

    if (session.error) throw session.error;

    const { data, error } = await supabase
      .from('inventory')
      .select(`inventory`)
      .eq("user_id", session.data.session?.user.id)
      .single()

    if (error) throw error;

    return data.inventory;
  } catch (e) {
    throw new DatabaseError('Something unexpected happened... Try again later')
  }
}

export const getShopItems = async (from: number, to: number, type: ShopItemType): Promise<IShopItems> => {
  try {
    const { data, error } = await supabase
      .from('shop-items')
      .select(`name, title, description, price, type, itemProps`)
      .eq("type", type)
      .range(from, to)

    if (error) throw error;

    return data;
  } catch (e) {
    throw new DatabaseError('Something unexpected happened... Try again later')
  }
}

export const getInventoryItems = async (): Promise<IShopItems> => {
  try {
    const inventory = await getInventory()

    const { data, error } = await supabase
      .from('shop-items')
      .select(`name, title, description, price, type, itemProps`)

    if (error) throw error;

    const items = data.filter(({ name }) => {
      return inventory.includes(name)
    })    

    return items;
  } catch (e) {
    console.log(e)
    throw new DatabaseError('Something unexpected happened... Try again later')
  }
}

export const buyItem = async (name: string): Promise<void> => {
  try {
    const { error } = await supabase
      .rpc('buy_item', { name: name });

    if (error) throw error;
  } catch (e) {
    
    console.log(e)
    throw new DatabaseError('Something unexpected happened... Try again later')
  }
}