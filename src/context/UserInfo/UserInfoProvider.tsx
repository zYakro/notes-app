import React, { useEffect, useState } from 'react'
import { UserInfoContext } from './UserInfoContext'
import { IUserInfo, IUserInfoKey } from '@/types/types'

export const UserInfoProvider = ({ children }: { children: React.ReactNode }) => {
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    background: 'light-screen',
    theme: 'main-theme',
    coins: 0,
    exp: 0
  })

  const getUserPreferences = async () => {
    try {
      // API call
    } catch (e) {

    }
  }

  const changeUserInfo = async (key: IUserInfoKey, value: string) => {
    setUserInfo({
      ...userInfo,
      [key]: value
    })
  }

  useEffect(() => {
    getUserPreferences()
  }, [])

  return (
    <UserInfoContext.Provider value={{ userInfo, changeUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  )
}
