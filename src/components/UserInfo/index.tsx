import React from 'react'
import { Coins, Exp, Level, UserImage, UserInfoContainer, UserStats } from './styled'

export const UserInfo = () => {
  return (
    <UserInfoContainer>
      <UserImage />
      <UserStats>
        <Level>Level: 1</Level>
        <Exp>Exp: 25</Exp>
        <Coins>Coins: 200</Coins>
      </UserStats>
    </UserInfoContainer>
  )
}
