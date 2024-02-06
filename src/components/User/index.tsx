import React, { useState } from 'react'
import { PanelContent, ViewContainer, Options } from './styled'
import { PanelContainer } from '../Shop/styled'
import { BasicPanel } from '../Panels/BasicPanel'
import { UserInfo } from './UserInfo'
import { AnimatedPanelOnFocus } from '../Panels/AnimatedPanelOnFocus'
import { SectionSeparator } from '../Separators/SectionSeparator'
import { SafeAreaInsets } from '../SafeAreaInsets'
import { useShop } from '@/hooks/useShop/useShop'
import { IShopItem } from '@/types/types'
import { ShopItemInfo } from '../Shop/ShopItemInfo'
import { ShopItems } from '../Shop/ShopItems'
import { BasicSubmitButton } from '../Inputs/BasicSubmitButton'

export const User = () => {
  const {
    inventory,
    currentItem,
    changeCurrentItem,
    onCurrentItemSelected,
    shopItems,
  } = useShop()

  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false)

  const showItemInfo = (shopItem: IShopItem) => {
    changeCurrentItem(shopItem)
    setIsInfoModalVisible(true)
  }

  const closeShopItemInfoModal = () => {
    setIsInfoModalVisible(false)
  }

  const onLogout = () => {

  }

  const inventoryItems = shopItems.filter(item => inventory.includes(item.name))

  return (
    <SafeAreaInsets>
      <ViewContainer>
        <PanelContainer>
          <AnimatedPanelOnFocus>
            <BasicPanel>
              <PanelContent>
                <SectionSeparator />
                <UserInfo />
                <SectionSeparator />
                <ShopItems
                  shopItems={inventoryItems}
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
                  <BasicSubmitButton title='Log out' onPress={onLogout}/>
                </Options>
              </PanelContent>
            </BasicPanel>
          </AnimatedPanelOnFocus>
        </PanelContainer>
      </ViewContainer>
    </SafeAreaInsets>
  )
}