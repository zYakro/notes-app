import { SHOP_ITEM_TYPE_BACKGROUND, SHOP_ITEM_TYPE_PANEL, SHOP_ITEM_TYPE_THEME } from '@/constant/shopConsts'
import { IShopItemImageProps, ShopItemType } from '@/types/types'
import React from 'react'
import { ImageType, PanelContainer, PanelTitle, PanelTypingText, ScrollToEndPanelContent, TypeImageContainer } from './styled'
import { energyInfo } from '@/utils/energy/energyInfo'
import { Image } from 'react-native'

export const ShopImage = ({ type, itemProps }: { type: ShopItemType, itemProps: IShopItemImageProps }) => {
  return (
    <>
      {
        type == SHOP_ITEM_TYPE_THEME &&
        <PanelContainer panelColor={itemProps.panelColor}>
          <PanelTitle fontColor={itemProps.titleFontColor}>
            ▣ Themed Panel
          </PanelTitle>
          <ScrollToEndPanelContent panelContentColor={itemProps.panelContentColor}>
            <PanelTypingText
              fontColor={itemProps.fontColor}
              delay={400}
              text={energyInfo}
              duration={5000}
              velocity={8}
              typingChar='█'
            />
          </ScrollToEndPanelContent>
        </PanelContainer>
      }
      {
        type == SHOP_ITEM_TYPE_BACKGROUND &&
        <TypeImageContainer>
          <ImageType 
            source={itemProps.image} 
          />
        </TypeImageContainer>
      }
    </>
  )
}
