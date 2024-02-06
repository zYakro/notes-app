import React, { useEffect } from 'react'
import { Image } from 'react-native'
import { ImageContainer, ThemePanel, ThemePanelContainer } from './styled'
import { IShopItemImageProps, ShopItemType } from '@/types/types'
import { SHOP_ITEM_TYPE_BACKGROUND, SHOP_ITEM_TYPE_THEME } from '@/constant/shopConsts'

type IThemeShopItem = {
  type: ShopItemType
  itemProps: IShopItemImageProps
}

export const ShopItemImage = ({ itemProps, type }: IThemeShopItem) => {
  return (
    <>
      {
        type == SHOP_ITEM_TYPE_THEME &&
        <ThemePanelContainer backgroundColor={itemProps.panelColor}>
          <ThemePanel backgroundColor={itemProps.panelContentColor} />
        </ThemePanelContainer>
      }
      {
        type == SHOP_ITEM_TYPE_BACKGROUND &&
        <ImageContainer>
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover'
            }}
            source={itemProps.image}
          />
        </ImageContainer>
      }
    </>
  )
}