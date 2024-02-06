import React, { useContext } from 'react'
import { Coins, Exp, Level, UserImage, UserInfoContainer, UserStats } from './styled'
import { UserInfoContext } from '@/context/UserInfo/UserInfoContext'
import { CoinIcon } from '@/components/Icons/CoinIcon'
import { ExpIcon } from '@/components/Icons/ExpIcon'
import { LevelIcon } from '@/components/Icons/LevelIcon'

export const UserInfo = () => {
  const { userInfo } = useContext(UserInfoContext)

  return (
    <UserInfoContainer>
      <UserImage />
      <UserStats>
        <Level>
          Level: <LevelIcon size={15} /> 1
        </Level>
        <Exp>
          Exp: <ExpIcon size={15} /> {userInfo.exp}
        </Exp>
        <Coins>
          Coins: <CoinIcon size={15}/> {userInfo.coins}
        </Coins>
      </UserStats>
    </UserInfoContainer>
  )
}
