import { Text } from 'react-native'
import React, { useState } from 'react'
import { PanelContainer, PanelContent, ViewContainer } from './styled'
import { AnimatedPanelOnFocus } from '../Panels/AnimatedPanelOnFocus'
import { BasicPanel } from '../Panels/BasicPanel'
import { UserInfo } from '../UserInfo'
import { SectionSeparator } from '../Separators/SectionSeparator'
import { ShopItems } from './ShopItems'
import { ShopItemInfo } from './ShopItemInfo'
import { useShop } from '@/hooks/useShop/useShop'
import { IShopItem } from '@/types/types'

export const Shop = () => {
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

  return (
    <ViewContainer>
      <PanelContainer>
        <AnimatedPanelOnFocus>
          <BasicPanel>
            <PanelContent>
              <SectionSeparator />
              <UserInfo />
              <SectionSeparator />
              <ShopItems shopItems={shopItems} inventory={inventory} onItemSelected={showItemInfo}/>
              {
                isInfoModalVisible &&
                <ShopItemInfo 
                  {...currentItem} 
                  isOwned={inventory.includes(currentItem.name)} 
                  closeModal={closeShopItemInfoModal} 
                  onItemSelected={onCurrentItemSelected} 
                />
              }
            </PanelContent>
          </BasicPanel>
        </AnimatedPanelOnFocus>
      </PanelContainer>
    </ViewContainer>
  )
}