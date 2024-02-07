import React, { useContext, useEffect, useState } from 'react'
import { UserInfoContext } from './UserInfoContext'
import { IUserInfo, IUserPreferencesKey } from '@/types/types'
import { getUserInfo, updateUserInfo } from '@/services/user.service'
import { AlertsContext } from '../Alerts/AlertsContext'
import { supabase } from '@/supabase/config'

export const UserInfoProvider = ({ children }: { children: React.ReactNode }) => {
  const { setAlert } = useContext(AlertsContext)

  const [userInfo, setUserInfo] = useState<IUserInfo>({
    email: '',
    coins: 0,
    exp: 0,
    preferences: {
      background: 'light-screen',
      theme: 'main-theme',
    }
  })

  const getUserPreferences = async () => {
    try {
      const data = await getUserInfo()

      setUserInfo(data)
    } catch (e) {
      setAlert({
        title: 'Error',
        message: e.message
      })
    }
  }

  const changeUserPreference = async (key: IUserPreferencesKey, value: string) => {
    const newUserInfo = {
      ...userInfo,
      preferences: {
        ...userInfo.preferences,
        [key]: value
      }
    }

    setUserInfo(newUserInfo)

    try {
      await updateUserInfo(newUserInfo)
    } catch (e) {
      setAlert({
        title: 'Error',
        message: e.message
      })
    }
  }

  useEffect(() => {
    supabase.auth.onAuthStateChange((event) => {
      if (event == 'SIGNED_IN' || event == 'INITIAL_SESSION') {
        getUserPreferences()
      }
    })
  }, [])

  return (
    <UserInfoContext.Provider value={{ userInfo, changeUserPreference }}>
      {children}
    </UserInfoContext.Provider>
  )
}
