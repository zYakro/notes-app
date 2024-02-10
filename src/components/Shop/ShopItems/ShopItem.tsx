import { Price, ShopItemContainer, ShopItemImageContainer, ShopItemPrice } from './styled'
import { CoinIcon } from '@/components/Icons/CoinIcon'
import { CenterDotSeparator } from '@/components/Separators/CenterDotSeparator'
import { IShopItemImageProps, ShopItemType } from '@/types/types'
import { Image } from 'react-native'
import { ImageContainer, ThemePanel, ThemePanelContainer } from './styled'
import { SHOP_IMAGES, SHOP_ITEM_TYPE_BACKGROUND, SHOP_ITEM_TYPE_THEME } from '@/constant/shopConsts'

type IThemeShopItem = {
  type: ShopItemType
  itemProps: IShopItemImageProps
}

type IShopItem = {
  price: number
  type: ShopItemType
  itemProps: IShopItemImageProps
  isOwned: boolean
  onPress: () => void
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
            source={SHOP_IMAGES[itemProps.image]}
          />
        </ImageContainer>
      }
    </>
  )
}

export const ShopItem = ({ itemProps, price, isOwned, type, onPress }: IShopItem) => {
  return (
    <ShopItemContainer onPress={onPress}>
      <ShopItemImageContainer>
        <ShopItemImage itemProps={itemProps} type={type} />
      </ShopItemImageContainer>
      <CenterDotSeparator />
      { 
        !isOwned &&
        <ShopItemPrice>
          <CoinIcon size={14} />
          <Price>{price}</Price>
        </ShopItemPrice>
      }
    </ShopItemContainer>
  )
}


