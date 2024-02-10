import React, { useContext, useState } from 'react'
import { PanelContent, ViewContainer, Options } from './styled'
import { PanelContainer } from '../Shop/styled'
import { BasicPanel } from '../Panels/BasicPanel'
import { UserInfo } from './UserInfo'
import { SectionSeparator } from '../Separators/SectionSeparator'
import { SafeAreaInsets } from '../SafeAreaInsets'
import { useShop } from '@/hooks/useShop/useShop'
import { IShopItem, Routes } from '@/types/types'
import { ShopItemInfo } from '../Shop/ShopItemInfo'
import { BasicSubmitButton } from '../Inputs/BasicSubmitButton'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AlertsContext } from '@/context/Alerts/AlertsContext'
import { signOut } from '@/services/auth.service'
import { useIsTabOpenOnFocus } from '@/hooks/useIsTabOpenOnFocus/useIsTabOpenOnPage'
import { AnimatedPanel } from '../Panels/AnimatedPanel'
import { Inventory } from '../Shop/Inventory'

export const User = () => {
  const {
    inventory,
    currentItem,
    changeCurrentItem,
    onCurrentItemSelected,
  } = useShop()

  const navigation = useNavigation<StackNavigationProp<Routes>>()

  const { setAlert } = useContext(AlertsContext)

  const [isTabOpen, setIsTabOpen] = useIsTabOpenOnFocus(true)

  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false)

  const showItemInfo = (shopItem: IShopItem) => {
    changeCurrentItem(shopItem)
    setIsInfoModalVisible(true)
  }

  const closeShopItemInfoModal = () => {
    setIsInfoModalVisible(false)
  }

  const onSignOut = async () => {
    setIsTabOpen(false)

    try {
      await signOut()

      navigation.navigate('Auth')
    } catch (e) {
      setAlert({
        title: 'Error',
        message: e.message
      })
    }

    setIsTabOpen(true)
  }

  return (
    <SafeAreaInsets>
      <ViewContainer>
        <PanelContainer>
          <AnimatedPanel isTabOpen={isTabOpen}>
            <BasicPanel>
              <PanelContent>
                <SectionSeparator />
                <UserInfo />
                <SectionSeparator />
                <Inventory
                  inventory={inventory}
                  onItemSelected={showItemInfo}
                />
                {
                  isInfoModalVisible &&
                  <ShopItemInfo
                    {...currentItem}
                    isOwned={true}
                    closeModal={closeShopItemInfoModal}
                    onItemSelected={onCurrentItemSelected}
                  />
                }
                <Options>
                  <BasicSubmitButton title='Sign out' onPress={onSignOut} />
                </Options>
              </PanelContent>
            </BasicPanel>
          </AnimatedPanel>
        </PanelContainer>
      </ViewContainer>
    </SafeAreaInsets>
  )
}