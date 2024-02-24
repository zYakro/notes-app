import React, { useContext } from 'react'
import { DraggablePanel } from '../Panels/DraggablePanel'
import { useIsFocused } from '@react-navigation/native'
import { UserInfoContext } from '@/context/UserInfo/UserInfoContext'
import { CenteredContent, LineSeparator, UserInfoText } from './styled'
import { LevelIcon } from '../Icons/LevelIcon'
import { ExpIcon } from '../Icons/ExpIcon'
import { CoinIcon } from '../Icons/CoinIcon'

export const UserInfoPanel = () => {
  const { userInfo } = useContext(UserInfoContext)
  const isFocused = useIsFocused()

  return (
    <DraggablePanel title="▣ User Info" isTabOpen={isFocused} style={{
      width: 150,
      height: 150
    }}>
      <UserInfoText>{userInfo.email}</UserInfoText>
      <LineSeparator />
      <UserInfoText>Exp: <ExpIcon size={12} /> {userInfo.exp}</UserInfoText>
      <UserInfoText>Coins: <CoinIcon size={12} /> {userInfo.coins}</UserInfoText>
      <LineSeparator />
    </DraggablePanel>
  )
}