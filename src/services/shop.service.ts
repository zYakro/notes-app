import { supabase } from "@/supabase/config";
import { InventoryType } from "@/types/types";
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