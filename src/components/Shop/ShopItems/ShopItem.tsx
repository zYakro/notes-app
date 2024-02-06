import { Price, ShopItemContainer, ShopItemImageContainer, ShopItemPrice } from './styled'
import { CoinIcon } from '@/components/Icons/CoinIcon'
import { CenterDotSeparator } from '@/components/Separators/CenterDotSeparator'
import { IShopItemImageProps, ShopItemType } from '@/types/types'
import { ShopItemImage } from './ShopItemImage'

type IShopItem = {
  name: string
  price: number
  type: ShopItemType
  itemProps: IShopItemImageProps
  isOwned: boolean
  onPress: (name: string) => void
}

export const ShopItem = ({ name, itemProps, price, isOwned, type, onPress }: IShopItem) => {
  return (
    <ShopItemContainer onPress={() => onPress(name)}>
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

