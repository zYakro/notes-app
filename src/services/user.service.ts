import { supabase } from "@/supabase/config"
import { DatabaseError } from "./errors.service"
import { IUserInfo } from "@/types/types"

const userInfoFromDatabase = (data): IUserInfo => {
  return data;
}

export const getUserInfo = async () => {
  try {
    const session = await supabase.auth.getSession()

    if (session.error) throw session.error;

    const { data, error } = await supabase
      .from('users')
      .select(`email, coins, exp, preferences`)
      .eq('user_id', session.data.session?.user.id)
      .single()

    if (error) throw error

    return userInfoFromDatabase(data)
  } catch (e) {
    throw new DatabaseError('Something unexpected happened... Try again later')
  }
}

export const updateUserInfo = async (info: IUserInfo) => {
  try {
    const session = await supabase.auth.getSession()

    if (session.error) throw session.error;

    const { error } = await supabase
      .from('users')
      .update(info)
      .eq('user_id', session.data.session?.user.id)

    if (error) throw error;

  } catch (e) {
    throw new DatabaseError('Something unexpected happened... Try again later')
  }
}