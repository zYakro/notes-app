import { UserInfoContext } from '@/context/UserInfo/UserInfoContext'
import React, { useContext } from 'react'
import { ImageBackground } from 'react-native'

export const BackgroundImage = ({ children }: { children: React.ReactNode }) => {
  const { userInfo } = useContext(UserInfoContext)

  const Backgrounds = {
    "light-screen": require('@/assets/light-screen.jpg'),
    "night-background": require('@/assets/night-screen.jpg')
  }

  return (
    <ImageBackground
      source={Backgrounds[userInfo.background]}
      style={{ flex: 1 }}
      resizeMode='stretch'
    >
      {children}
    </ImageBackground>
  )
}
